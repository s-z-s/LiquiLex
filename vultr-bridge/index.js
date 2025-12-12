require('dotenv').config();
const express = require('express');
const { Client } = require('pg');
const Redis = require('ioredis');
const cors = require('cors');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors());

// --- Configuration ---
const PORT = process.env.PORT || 3000;

// --- Postgres Connection ---
let pgClient;

async function connectPg() {
    if (!process.env.POSTGRES_URL) {
        console.warn('⚠️ POSTGRES_URL not set. Postgres features disabled.');
        return;
    }

    try {
        pgClient = new Client({
            connectionString: process.env.POSTGRES_URL,
            ssl: { rejectUnauthorized: false } // Required for Vultr Managed DB
        });
        await pgClient.connect();
        console.log('✅ Connected to Vultr Postgres');
    } catch (err) {
        console.error('❌ Postgres Connection Failed:', err.message);
    }
}

// --- Valkey (Redis) Connection ---
let redis;

function connectRedis() {
    if (!process.env.VALKEY_URL) {
        console.warn('⚠️ VALKEY_URL not set. Valkey features disabled.');
        return;
    }

    try {
        redis = new Redis(process.env.VALKEY_URL, {
            tls: { rejectUnauthorized: false }, // Required for Vultr Managed Redis
            retryStrategy: (times) => Math.min(times * 50, 2000)
        });

        redis.on('connect', () => console.log('✅ Connected to Vultr Valkey'));
        redis.on('error', (err) => console.error('❌ Valkey Error:', err.message));
    } catch (err) {
        console.error('❌ Valkey Connection Failed:', err.message);
    }
}

// Initialize Connections
connectPg();
connectRedis();

// --- Endpoints ---

// Health Check
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        postgres: pgClient ? 'connected' : 'disconnected',
        valkey: redis ? 'connected' : 'disconnected'
    });
});

// SQL Query Proxy
app.post('/query', async (req, res) => {
    if (!pgClient) return res.status(503).json({ error: 'Postgres not available' });

    const { text, params } = req.body;

    if (!text) return res.status(400).json({ error: 'SQL text required' });

    try {
        const result = await pgClient.query(text, params);
        res.json({ rows: result.rows, rowCount: result.rowCount });
    } catch (err) {
        console.error('Query Error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Cache Get
app.post('/cache/get', async (req, res) => {
    if (!redis) return res.status(503).json({ error: 'Valkey not available' });

    const { key } = req.body;
    if (!key) return res.status(400).json({ error: 'Key required' });

    try {
        const value = await redis.get(key);
        res.json({ value });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Cache Set
app.post('/cache/set', async (req, res) => {
    if (!redis) return res.status(503).json({ error: 'Valkey not available' });

    const { key, value, ttl } = req.body;
    if (!key || value === undefined) return res.status(400).json({ error: 'Key and value required' });

    try {
        if (ttl) {
            await redis.set(key, value, 'EX', ttl);
        } else {
            await redis.set(key, value);
        }
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`🌉 Vultr Bridge listening on port ${PORT}`);
});
