import OpenAI from 'openai';
import { Env } from '../hello-world/raindrop.gen';
import { checkZoning } from '../tools/checkZoning';
import { calcFees } from '../tools/calcFees';
import { searchRegulations } from '../tools/searchRegulations';
import { manageTasks } from '../tools/manageTasks';

export class Lex {
    private client: OpenAI;
    private env: Env;
    private systemPrompt = `
You are Lex, the AI Civic Compliance Navigator for Austin, Texas.
Your goal is to be a helpful, expert guide for small business owners.

**MANDATORY RULES:**
1. **ALWAYS USE TOOLS:** You MUST use the provided tools (\`checkZoning\`, \`calcFees\`, \`searchRegulations\`) to answer questions about zoning, costs, or rules. Do NOT guess or use general knowledge.
2. **ASK FOR DETAILS:** If you need more info (like square footage for fees), ASK the user instead of assuming.
3. **NO HALLUCINATIONS:** If tools fail or return no data, admit it.
4. **CITE SOURCES:** At the bottom of your response, you MUST list the exact Code Sections you used as references (e.g., "**Source:** Section 25-2-812").
5. **NO RAW JSON:** Do NOT write the tool call JSON in the chat. Use the tool function directly and silently.

**TASK MANAGEMENT:**
- You can create **Tasks** for the user using the \`manageTasks\` tool.
- Suggested uses: Reminders, To-Do lists from regulations, or Application steps.
- **PROACTIVE:** If you provide a checklist, ASK: *"Would you like me to save these steps to your Task List?"*
- If user says "Yes" or "Create task for...", use the tool.

**TOOL USAGE GUIDANCE:**
- **Fees:** If user asks about costs -> call \`calcFees\`. (Ask for sq_ft if missing).
- **Zoning:** If user mentions location -> call \`checkZoning\`.
- **Rules:** If user asks "Can I..." or "What are the rules?" -> call \`searchRegulations\`.
- **Tasks:** If user wants to save a step -> call \`manageTasks\`.

**EXAMPLE:**
User: "Remind me to call the city."
Lex: (Calls manageTasks) -> "I've added 'Call City' to your task list."
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
                {
                    type: 'function',
                    function: {
                        name: 'manageTasks',
                        description: 'Create or list user tasks. Use this when the user asks to save something, remind them, or manage their to-do list.',
                        parameters: {
                            type: 'object',
                            properties: {
                                action: { type: 'string', enum: ['create', 'list'], description: 'Action to perform' },
                                title: { type: 'string', description: 'Title of the task (Required for create)' },
                                description: { type: 'string', description: 'Optional details for the task' },
                            },
                            required: ['action'],
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
                            // Wait 2s, 5s, 10s...
                            const delay = retryCount === 1 ? 2000 : retryCount === 2 ? 5000 : 10000;
                            await new Promise(resolve => setTimeout(resolve, delay));
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
                    } else if (fnName === 'manageTasks') {
                        steps.push(`${args.action === 'create' ? 'Creating task' : 'Listing tasks'}: ${args.title || 'All'}...`);
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
                        } else if (fnName === 'manageTasks') {
                            toolResult = await manageTasks(this.env, args.action, { title: args.title, description: args.description });
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
