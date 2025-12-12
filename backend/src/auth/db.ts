import { Env } from '../hello-world/raindrop.gen';

export async function queryPostgres(env: Env, sql: string, params: any[] = []) {
    // @ts-ignore
    const bridgeUrl = (env.VULTR_BRIDGE_URL || '').trim();

    if (!bridgeUrl) {
        throw new Error('VULTR_BRIDGE_URL not set');
    }

    const response = await fetch(`${bridgeUrl}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: sql, params })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Bridge error: ${response.status} ${errorText}`);
    }

    return await response.json() as { rows: any[], rowCount: number };
}
