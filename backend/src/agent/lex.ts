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
Your goal is to help small business owners navigate complex regulations.

STRICT RULES:
1. You ONLY discuss:
   - Zoning regulations in Austin.
   - Permit fees and calculations.
   - City codes and ordinances.
2. **NO GENERAL KNOWLEDGE:** If the tools (checkZoning, calcFees, searchRegulations) do not return specific data for the requested location or category, you must say: "I do not have that information in my database." DO NOT guess or use outside knowledge.
3. Be concise, professional, and helpful.
4. Use the provided tools to get accurate data. DO NOT guess zoning or fees.
5. **ALWAYS CITE SOURCES:** When answering from searchRegulations, you MUST mention the Section Number/Title provided in the text (e.g., "According to Section 25-2-1176...").
6. **NO RAW JSON OR CODE:** Never output raw JSON or user-facing tool call strings like "calcFees(...)". Use the structured tool calling format provided by the API.
7. **PLAIN ENGLISH:** Simplify complex legal terms for a lay audience. Avoid jargon where possible. Explain things like you're talking to a small business owner, not a lawyer.
8. **VOICE CORRECTION:** You are receiving raw voice transcripts. If the input seems nonsensical (e.g., "print out" instead of "rent out"), infer the correct intent related to zoning/business. Explicitly state: "I understood your question as: [Corrected Question]" before answering.
9. **TRUST CONTEXT:** If the conversation history or system context ALREADY specifies a zoning code (e.g., "I see you are asking about DMU-CURE" or "Zone: DMU-CURE"), YOU MUST USE THAT CODE. Do NOT call \`checkZoning\` again for the same location unless the user provides a completely different address. The context is the source of truth.
10. **STRICT CONSISTENCY:** If you see a zoning code like "DMU-CURE" in the prompt, do NOT verify it against the database. Assume the user's clicked location (Source of Truth) is correct.

TOOL USAGE:
- To find fees: Call \`calcFees\`.
- To find rules: Call \`searchRegulations\`.
- To check a NEW location: Call \`checkZoning\`.

Do NOT act out the tool call in text. Just call it.
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

                const response = await this.client.chat.completions.create({
                    model: 'llama-3.3-70b',
                    messages: [
                        { role: 'system', content: currentSystemPrompt },
                        ...messages
                    ],
                    tools: tools.length > 0 ? tools : undefined,
                    tool_choice: tools.length > 0 ? 'auto' : undefined,
                });

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
                response: "I'm sorry, I encountered an error while processing your request.",
                steps: []
            };
        }
    }
}
