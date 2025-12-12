import { Hono } from 'hono';
import { upgradeWebSocket } from 'hono/cloudflare-workers';
import { Env } from '../hello-world/raindrop.gen';
import { Lex } from '../agent/lex';

export function setupVoiceProxy(app: Hono<{ Bindings: Env }>) {
    app.get('/api/voice/ws', upgradeWebSocket((c) => {
        return {
            onOpen: () => {
                console.log('Voice connection opened');
            },
            onMessage: async (event, ws) => {
                try {
                    const data = JSON.parse(event.data as string);
                    console.log('Voice received:', data);

                    const userText = data.text;

                    if (userText) {
                        // Initialize Lex
                        const lex = new Lex(c.env);

                        // Get response from Lex
                        // Note: Lex.chat expects an array of messages
                        const responseText = await lex.chat([{ role: 'user', content: userText }]);

                        console.log('Voice responding:', responseText);

                        // Send back to ElevenLabs
                        ws.send(JSON.stringify({
                            text: responseText,
                            is_final: true // Signal that this is the complete response
                        }));
                    }
                } catch (error) {
                    console.error('Voice error:', error);
                    ws.send(JSON.stringify({
                        text: "I'm sorry, I had trouble processing that.",
                        is_final: true
                    }));
                }
            },
            onClose: () => {
                console.log('Voice connection closed');
            }
        };
    }));
}
