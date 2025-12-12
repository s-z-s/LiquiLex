import { Env } from '../hello-world/raindrop.gen';

export async function updateContext(
    env: Env,
    userId: string,
    data: { businessName?: string; businessType?: string; description?: string }
) {
    try {
        const memory = await env.USER_CONTEXT.getProceduralMemory();
        const key = `user_${userId}`;

        // 1. Get existing
        const existingStr = await memory.getProcedure(key);
        let existing = {};
        if (existingStr) {
            try {
                existing = JSON.parse(existingStr);
            } catch (e) {
                // ignore
            }
        }

        // 2. Merge
        const updated = {
            ...existing,
            ...data,
            lastUpdated: new Date().toISOString()
        };

        // 3. Save
        await memory.putProcedure(key, JSON.stringify(updated));

        return {
            success: true,
            message: `Context updated for ${data.businessName || 'Business'}. I will remember this forever.`,
            currentContext: updated
        };

    } catch (error) {
        console.error('updateContext error:', error);
        return { error: String(error) };
    }
}
