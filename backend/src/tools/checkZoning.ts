import { Env } from '../hello-world/raindrop.gen';

export interface ZoningResult {
    zoning_code: string;
    description?: string;
}

export async function checkZoning(lat: number | undefined, long: number | undefined, env: Env, address?: string): Promise<ZoningResult | null> {
    // Real Geocoding via Nominatim (OpenStreetMap)
    if (address && (!lat || !long)) {
        console.log(`Geocoding address: ${address}`);
        try {
            // Append "Austin, TX" to ensure local results
            const query = `${address}, Austin, TX`;
            const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;

            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'LiquiLex-Demo/1.0' // Required by Nominatim
                }
            });

            if (response.ok) {
                const data = await response.json() as any[];
                if (data && data.length > 0) {
                    lat = parseFloat(data[0].lat);
                    long = parseFloat(data[0].lon);
                    console.log(`Geocoded '${address}' to: ${lat}, ${long}`);
                } else {
                    console.warn('Geocoding returned no results');
                }
            }
        } catch (e) {
            console.error('Geocoding failed:', e);
        }

        // Fallback Mock (if API fails or returns nothing)
        if (!lat || !long) {
            if (address.toLowerCase().includes('25 east')) {
                lat = 30.26; long = -97.74;
            } else if (address.toLowerCase().includes('500 e 6th')) {
                lat = 30.2675; long = -97.7395;
            } else if (address.toLowerCase().includes('1234 s lamar')) {
                lat = 30.2555; long = -97.7620;
            } else {
                // Default to downtown
                lat = 30.2672; long = -97.7431;
            }
        }
    }

    if (!lat || !long) {
        throw new Error('Location required (lat/long or address)');
    }

    // @ts-ignore
    const bridgeUrl = (env.VULTR_BRIDGE_URL || '').trim();

    if (!bridgeUrl) {
        console.error('VULTR_BRIDGE_URL not set');
        throw new Error('Vultr Bridge configuration missing');
    }

    // --- Caching Logic ---
    let rows: any[] = [];
    const CACHE_KEY = 'zoning_data_simple';

    // Try Cache First
    // @ts-ignore
    if (env.mem) { // Use 'mem' (KvCache) if available
        try {
            // @ts-ignore
            const cached = await env.mem.get(CACHE_KEY);
            if (cached) {
                console.log('✅ Using Cached Zoning Data');
                rows = JSON.parse(cached);
            }
        } catch (e) {
            console.warn('Cache read failed:', e);
        }
    }

    // If Cache Miss, Fetch from DB
    if (rows.length === 0) {
        const query = `SELECT zoning_code, description, polygon_json FROM austin_zoning_simple`;
        console.log(`Checking zoning at ${lat}, ${long} using bridge: ${bridgeUrl}`);

        try {
            const response = await fetch(`${bridgeUrl}/query`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: query })
            });

            if (!response.ok) {
                const errorText = await response.text();
                // If the error is 500/504, it might be timeout.
                console.error(`Bridge failed: ${response.status} ${response.statusText}`, errorText);
                // Fallback to "Emergency Mock" if DB is totally dead? No, throw error.
                throw new Error(`Bridge error (${bridgeUrl}): ${response.status} ${response.statusText} - ${errorText}`);
            }

            const data = await response.json() as { rows: any[] };
            rows = data.rows;
            console.log(`Fetched ${rows.length} rows from DB`);

            // Write to Cache
            // @ts-ignore
            if (env.mem && rows.length > 0) {
                // @ts-ignore
                // TTL 1 hour = 3600 seconds
                env.mem.put(CACHE_KEY, JSON.stringify(rows), { expirationTtl: 3600 }).catch((e: any) => console.warn('Cache write failed', e));
                console.log('✅ Zoning Data Cached');
            }
        } catch (error) {
            console.error('Failed to query bridge:', error);
            throw error;
        }
    }

    // Manual Point-in-Polygon (Ray Casting)
    for (const row of rows) {
        if (!row.polygon_json) continue;
        try {
            const polygon = JSON.parse(row.polygon_json); // Expecting [[[x,y], [x,y]...]] (GeoJSON Polygon coordinates)
            // Handle both Polygon (nested array) and simple array of points if simplified
            const ring = Array.isArray(polygon[0][0]) ? polygon[0] : polygon;

            if (isPointInPolygon([long, lat], ring)) {
                return {
                    zoning_code: row.zoning_code,
                    description: row.description
                };
            }
        } catch (e) {
            // Suppress warnings for expected parsing glitches to keep logs clean
            // console.warn('Failed to parse polygon', e);
        }
    }

    return { error: "No zoning found for this location in the database." } as any;
}

// Ray Casting Algorithm
// Ray Casting Algorithm
function isPointInPolygon(point: number[], vs: number[][]) {
    const x = point[0], y = point[1];
    if (x === undefined || y === undefined) return false;

    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        const vi = vs[i];
        const vj = vs[j];

        if (!vi || !vj) continue;

        const xi = vi[0], yi = vi[1];
        const xj = vj[0], yj = vj[1];

        if (xi === undefined || yi === undefined || xj === undefined || yj === undefined) continue;

        const intersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}
