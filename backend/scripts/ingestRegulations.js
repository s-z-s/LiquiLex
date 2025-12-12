const fs = require('fs');
const path = require('path');

// Configuration
const DATA_DIR = path.join(__dirname, '../../data');
const OUTPUT_DIR = path.join(DATA_DIR, 'chunks');
const MANIFEST_FILE = path.join(OUTPUT_DIR, 'manifest.json');
const MAX_CHUNK_SIZE = 500 * 1024; // 500KB target size

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper to normalize text for filenames
const safeName = (str) => str.replace(/[^a-z0-9]/gi, '_').toLowerCase();

async function ingest() {
    console.log('Starting regulation ingestion...');

    // 1. Identify Source Files
    // In a real scenario, this might be a single huge "Austin_Code.txt"
    // For now, we'll ingest the existing Part files as a simulation/migration
    const sourceFiles = fs.readdirSync(DATA_DIR).filter(f => f.startsWith('Austin_Part') && f.endsWith('.txt'));

    if (sourceFiles.length === 0) {
        console.error('No source files found in data directory (looking for Austin_Part*.txt)');
        return;
    }

    let manifest = [];
    let chunkCounter = 0;

    for (const file of sourceFiles) {
        console.log(`Processing ${file}...`);
        const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');

        // Simple strategy: If file is small enough, keep it as one chunk.
        // If too large, we would split. For now, let's treat existing Parts as chunks 
        // but rename them to a standard format.

        // In a full implementation, we would regex for "Title \d+" here.
        // For this "Universal" upgrade, we'll assume the user might upload a "Title_4.txt" later.
        // We will just copy the file to the chunks dir and add to manifest.

        const chunkName = `chunk_${safeName(file.replace('.txt', ''))}.txt`;
        const outputPath = path.join(OUTPUT_DIR, chunkName);

        fs.writeFileSync(outputPath, content);

        manifest.push({
            id: `chunk_${chunkCounter++}`,
            filename: chunkName,
            originalName: file,
            size: content.length
        });
    }

    // 2. Write Manifest
    fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
    console.log(`Ingestion complete. Manifest written to ${MANIFEST_FILE}`);
    console.log(`Total chunks: ${manifest.length}`);
}

ingest();
