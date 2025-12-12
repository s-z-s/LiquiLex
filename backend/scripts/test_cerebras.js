const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

// Try to load key from .dev.vars (common in Cloudflare/Raindrop projects)
let apiKey = process.env.CEREBRAS_API_KEY;
if (!apiKey) {
    try {
        const devVarsPath = path.resolve(__dirname, '../.dev.vars');
        const rootEnvPath = path.resolve(__dirname, '../../.env');

        if (fs.existsSync(devVarsPath)) {
            const content = fs.readFileSync(devVarsPath, 'utf8');
            const match = content.match(/CEREBRAS_API_KEY="?([^"\n]+)"?/);
            if (match) {
                apiKey = match[1];
                console.log('✅ Loaded CEREBRAS_API_KEY from backend/.dev.vars');
            }
        } else if (fs.existsSync(rootEnvPath)) {
            const content = fs.readFileSync(rootEnvPath, 'utf8');
            // .env might use CEREBRAS_API_KEY=key format
            const match = content.match(/CEREBRAS_API_KEY="?([^"\n]+)"?/);
            if (match) {
                apiKey = match[1];
                console.log('✅ Loaded CEREBRAS_API_KEY from root .env');
            }
        }
    } catch (e) {
        console.warn('⚠️ Could not read .dev.vars');
    }
}

if (!apiKey) {
    console.error('❌ Error: CEREBRAS_API_KEY not found in environment or .dev.vars');
    console.error('Usage: CEREBRAS_API_KEY=your_key node scripts/test_cerebras.js');
    process.exit(1);
}

const client = new OpenAI({
    apiKey: apiKey,
    baseURL: 'https://api.cerebras.ai/v1',
});

async function testModel(modelName) {
    console.log(`\n🧪 Testing Model: ${modelName}...`);
    try {
        const start = Date.now();
        const response = await client.chat.completions.create({
            model: modelName,
            messages: [{ role: 'user', content: 'Hello, are you working?' }],
        });
        const duration = Date.now() - start;
        console.log(`✅ Success! (${duration}ms)`);
        console.log(`📝 Response: ${response.choices[0].message.content}`);
    } catch (error) {
        console.error(`❌ Failed!`);
        if (error.response) {
            console.error(`Status: ${error.response.status}`);
            console.error(`Data:`, error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

async function run() {
    await testModel('llama-3.3-70b');
    // await testModel('llama3.1-70b'); // Uncomment to test the other one
}

run();
