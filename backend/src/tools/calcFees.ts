import { Env } from '../hello-world/raindrop.gen';

export interface FeeParams {
    category: string;
    trade: string;
    sq_ft?: number;
}

export async function calcFees(env: Env, params: FeeParams) {
    const { category, trade, sq_ft = 0 } = params;

    // Query SmartSQL
    // Note: SmartSQL executeQuery takes a single string argument.
    // We interpolate values directly.
    const query = `
    SELECT base_fee, incremental_fee, incremental_threshold 
    FROM fees 
    WHERE category = '${category}' 
    AND trade = '${trade}' 
    AND ${sq_ft} >= min_sq_ft 
    AND ${sq_ft} <= max_sq_ft
  `;

    // SmartSQL query returns { results: string, ... }
    // We need to cast or inspect the result type.
    const result = await env.FEES_DB.executeQuery({ sqlQuery: query });
    const resultObj = result as any;

    // Parse the results string
    let rows: any[] = [];
    if (typeof resultObj.results === 'string') {
        try {
            rows = JSON.parse(resultObj.results);
        } catch (e) {
            console.error('Failed to parse SmartSQL results:', e);
            rows = [];
        }
    } else if (Array.isArray(resultObj.results)) {
        rows = resultObj.results;
    }

    if (rows.length === 0) {
        throw new Error(`No fee schedule found for ${category}/${trade} with ${sq_ft} sq ft. Query: ${query}`);
    }

    const row = rows[0];
    const baseFee = parseFloat(row.base_fee);
    const incFee = parseFloat(row.incremental_fee);
    const incThreshold = parseFloat(row.incremental_threshold);

    let total = baseFee;
    if (sq_ft > incThreshold && incFee > 0) {
        total += (sq_ft - incThreshold) * incFee;
    }

    return {
        category,
        trade,
        sq_ft,
        base_fee: baseFee,
        incremental_fee: incFee,
        incremental_threshold: incThreshold,
        total_fee: Math.round(total * 100) / 100
    };
}
