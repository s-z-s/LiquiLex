console.log('Script started');
const shapefile = require('shapefile');
const path = require('path');

const BRIDGE_URL = 'http://149.28.228.181:8080';

async function seed() {
    const shpPath = path.resolve(__dirname, '../../data/austin-zones.shp');
    console.log(`Reading ${shpPath}...`);
    console.log(`Target Bridge: ${BRIDGE_URL}`);

    // 1. Re-create Table
    console.log('Re-creating table...');
    await queryBridge(`DROP TABLE IF EXISTS austin_zoning_simple`);
    await queryBridge(`
        CREATE TABLE austin_zoning_simple (
            id SERIAL PRIMARY KEY, 
            zoning_code VARCHAR(50), 
            description TEXT, 
            polygon_json TEXT
        )
    `);

    // 2. Read and Insert
    const source = await shapefile.open(shpPath);
    let count = 0;
    let batch = [];
    const BATCH_SIZE = 50;

    while (true) {
        const result = await source.read();
        if (result.done) break;

        const feature = result.value;
        const zoningCode = feature.properties.zoning_zty;

        if (!zoningCode) continue;
        if (!feature.geometry) continue;

        let coords = null;
        if (feature.geometry.type === 'Polygon') {
            coords = feature.geometry.coordinates;
        } else if (feature.geometry.type === 'MultiPolygon') {
            coords = feature.geometry.coordinates[0];
        }

        if (!coords) continue;

        batch.push({
            zoning_code: zoningCode,
            description: feature.properties.zoning_bas || '',
            polygon_json: JSON.stringify(coords)
        });

        if (batch.length >= BATCH_SIZE) {
            await insertBatch(batch);
            count += batch.length;
            process.stdout.write(`\rInserted ${count} records...`);
            batch = [];
        }
    }

    if (batch.length > 0) {
        await insertBatch(batch);
        count += batch.length;
    }

    console.log(`\n✅ Done! Inserted ${count} records.`);
}

async function insertBatch(rows) {
    const params = [];
    const placeholders = [];

    rows.forEach((r, i) => {
        const offset = i * 3;
        placeholders.push(`($${offset + 1}, $${offset + 2}, $${offset + 3})`);

        // Sanitize strings to remove null bytes and invalid chars
        const code = (r.zoning_code || '').replace(/\0/g, '').trim();
        const desc = (r.description || '').replace(/\0/g, '').trim();

        params.push(code, desc, r.polygon_json);
    });

    const sql = `INSERT INTO austin_zoning_simple (zoning_code, description, polygon_json) VALUES ${placeholders.join(',')}`;

    await queryBridge(sql, params);
}

async function queryBridge(text, params = []) {
    try {
        const response = await fetch(`${BRIDGE_URL}/query`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, params })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Bridge Error: ${response.status} - ${err}`);
        }
    } catch (error) {
        console.error('\nQuery Failed:', error);
        process.exit(1);
    }
}

seed();
