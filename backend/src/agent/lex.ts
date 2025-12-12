import OpenAI from 'openai';
import { Env } from '../hello-world/raindrop.gen';
import { checkZoning } from '../tools/checkZoning';
import { calcFees } from '../tools/calcFees';
import { searchRegulations } from '../tools/searchRegulations';

export class Lex {
    private client: OpenAI;
    private env: Env;
    private systemPrompt = `
You are Lex, the AI Civic Compliance Navigator for Austin, Texas.
Your goal is to be a helpful, expert guide for small business owners.

**CORE RULES:**
1. **BE ACTION-ORIENTED:** Provide checklists, numbered steps, and clear instructions.
2. **SIMPLIFY:** Speak in plain English. Explain technical terms simple.
3. **USE DATA:** Use \`checkZoning\`, \`calcFees\`, and \`searchRegulations\` to find facts.
4. **NO GUESSING:** If tools don't return data, say "I don't have that information."
5. **CITATIONS:** Mention code sections as references, but focus on the explanation.

**FORMATTING:**
- Use **Bold** for key terms.
- Use numbered lists.

**EXAMPLE:**
User: "How do I get a permit?"
Lex: "Here are the steps:
1. **Zoning Check:** Ensure use is allowed.
2. **Application:** Submit commercial application.
3. **Fees:** Estimated fee is **$209.54**."
`;

    constructor(env: Env) {
        this.env = env;
        // Cerebras API is OpenAI compatible
        this.client = new OpenAI({
            apiKey: (env as any).CEREBRAS_API_KEY, // Accessing secret from env
            baseURL: 'https://api.cerebras.ai/v1',
        });
    }

    async chat(messages: any[], userContext?: string) {
        try {
            const currentSystemPrompt = userContext
                ? `${this.systemPrompt}\n\nUSER CONTEXT:\n${userContext}`
                : this.systemPrompt;

            // 1. Define Tools
            let tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
                {
                    type: 'function',
                    function: {
                        name: 'checkZoning',
                        description: 'Check the zoning code for a specific location. Provide either lat/long OR an address.',
                        parameters: {
                            type: 'object',
                            properties: {
                                lat: { type: 'number', description: 'Latitude of the location' },
                                long: { type: 'number', description: 'Longitude of the location' },
                                address: { type: 'string', description: 'Street address (e.g., "25 East St, Austin, TX")' },
                            },
                        },
                    },
                },
                {
                    type: 'function',
                    function: {
                        name: 'calcFees',
                        description: 'Calculate permit fees based on category, trade, and square footage.',
                        parameters: {
                            type: 'object',
                            properties: {
                                category: { type: 'string', description: 'Permit category. MUST be one of: "New Construction", "Plan Review", "Mobile Food Vendor".' },
                                trade: { type: 'string', description: 'Trade type. MUST be one of: "Building", "Electrical", "Plumbing", "Permit", "Fire Inspection".' },
                                sq_ft: { type: 'number', description: 'Square footage of the project' },
                            },
                            required: ['category', 'trade'],
                        },
                    },
                },
                {
                    type: 'function',
                    function: {
                        name: 'searchRegulations',
                        description: 'Search the City of Austin Land Development Code (Title 25) for specific regulations, definitions, or rules.',
                        parameters: {
                            type: 'object',
                            properties: {
                                query: { type: 'string', description: 'The search query (e.g., "food truck hours", "setback requirements", "noise ordinance")' },
                            },
                            required: ['query'],
                        },
                    },
                },
            ];

            // INTELLIGENT CONTEXT AWARENESS:
            // Match "Zone: CODE" or "zoning district **CODE**"
            const hasKnownZone = messages.some(m =>
                m.role === 'assistant' &&
                m.content &&
                (m.content.includes("Zone: ") || m.content.includes("zoning district **"))
            );

            if (hasKnownZone) {
                console.log("Lex has known zone in context. Disabling checkZoning tool to enforce consistency.");
                tools = tools.filter(t => t.type === 'function' && t.function.name !== 'checkZoning');
            }

            // 2. Multi-Turn Loop
            let turns = 0;
            const MAX_TURNS = 5;
            const steps: string[] = [];
            let finalResponseContent = "";

            while (turns < MAX_TURNS) {
                turns++;
                console.log(`💬 Lex Step ${turns}/${MAX_TURNS}`);

                let response: OpenAI.Chat.Completions.ChatCompletion | undefined;
                let retryCount = 0;
                const maxRetries = 3;

                while (retryCount < maxRetries) {
                    try {
                        response = await this.client.chat.completions.create({
                            model: 'llama-3.3-70b',
                            messages: [
                                { role: 'system', content: currentSystemPrompt },
                                ...messages
                            ],
                            tools: tools.length > 0 ? tools : undefined,
                            tool_choice: tools.length > 0 ? 'auto' : undefined,
                        });
                        break; // Success
                    } catch (err: any) {
                        console.error(`Cerebras attempt ${retryCount + 1} failed:`, err);
                        if (err.status === 503 || err.status === 500 || err.status === 429) {
                            retryCount++;
                            if (retryCount === maxRetries) throw err;
                            // Wait 1s, 2s, 4s...
                            await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount - 1)));
                        } else {
                            throw err; // Fatal error
                        }
                    }
                }

                if (!response) {
                    throw new Error('Failed to get response after retries');
                }

                const responseMessage = response.choices[0]?.message;
                if (!responseMessage) {
                    throw new Error('No response from Cerebras');
                }

                // If no tool calls, we are done
                if (!responseMessage.tool_calls || responseMessage.tool_calls.length === 0) {
                    finalResponseContent = responseMessage.content || "I have processed your request.";
                    break;
                }

                // Append the model's request to call tools to history
                messages.push(responseMessage);

                // Process all tool calls in parallel (simulated)
                for (const toolCall of responseMessage.tool_calls) {
                    const tc = toolCall as any;
                    const fnName = tc.function.name;
                    let args: any = {};
                    try {
                        args = JSON.parse(tc.function.arguments);
                    } catch (e) {
                        console.warn('Failed to parse args', tc.function.arguments);
                    }

                    // Add to Thinking Chain
                    if (fnName === 'checkZoning') {
                        steps.push(`Checking zoning for ${args.address || `${args.lat}, ${args.long}`}...`);
                    } else if (fnName === 'calcFees') {
                        steps.push(`Calculating fees for ${args.category} (${args.trade})...`);
                    } else if (fnName === 'searchRegulations') {
                        steps.push(`Searching regulations for "${args.query}"...`);
                    } else {
                        steps.push(`Executing tool: ${fnName}...`);
                    }

                    console.log(`Lex calling tool: ${fnName}`, args);

                    let toolResult;
                    try {
                        if (fnName === 'checkZoning') {
                            toolResult = await checkZoning(args.lat, args.long, this.env, args.address);
                        } else if (fnName === 'calcFees') {
                            toolResult = await calcFees(this.env, { category: args.category, trade: args.trade, sq_ft: args.sq_ft });
                        } else if (fnName === 'searchRegulations') {
                            toolResult = await searchRegulations(args.query, this.env);
                        } else {
                            toolResult = { error: 'Unknown tool' };
                        }
                    } catch (e) {
                        toolResult = { error: String(e) };
                    }

                    // Append Result
                    messages.push({
                        tool_call_id: toolCall.id,
                        role: 'tool',
                        name: fnName,
                        content: JSON.stringify(toolResult),
                    });
                }

                // Loop continues to let model see the result and decide next step
            }

            if (turns >= MAX_TURNS) {
                finalResponseContent += "\n[Note: Stopping due to maximum conversation turns.]";
            }

            return {
                response: finalResponseContent,
                steps
            };

        } catch (error) {
            console.error('Lex Error:', error);
            return {
                response: `I'm sorry, I encountered an error: ${String(error)}`,
                steps: []
            };
        }
    }
}
