const fs = require('fs');
const path = require('path');

const files = [
    'Austin_Title_25.txt'
];

const query = "food truck regulations in Public zoning district requirements restrictions permit";

console.log(`Testing search for query: "${query}"`);

const stopWords = ['want', 'open', 'building', 'that', 'is', 'what', 'maximum', 'number', 'have', 'can', 'years'];
const queryTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2 && !stopWords.includes(t));
console.log('Filtered Query terms:', queryTerms);

files.forEach(filename => {
    const filePath = path.join(__dirname, '../../data', filename);
    if (!fs.existsSync(filePath)) return;

    console.log(`\nScanning ${filename}...`);
    const text = fs.readFileSync(filePath, 'utf8');
    const lowerText = text.toLowerCase();

    let matchCount = 0;
    const matchedTerms = [];

    for (const term of queryTerms) {
        if (lowerText.includes(term)) {
            matchCount++;
            matchedTerms.push(term);
        }
    }

    const score = matchCount / queryTerms.length;
    console.log(`Score: ${score.toFixed(2)} (${matchCount}/${queryTerms.length})`);
    console.log(`Matched: ${matchedTerms.join(', ')}`);

    if (matchCount > 0 && matchCount >= queryTerms.length * 0.4) { // Lowered threshold to 0.4 for testing
        console.log('>>> MATCH FOUND <<<');

        // Find snippet
        const firstTerm = queryTerms.find(t => lowerText.includes(t)) || queryTerms[0];
        const index = lowerText.indexOf(firstTerm);
        const start = Math.max(0, index - 100);
        const end = Math.min(text.length, index + 300);
        console.log('Snippet:', text.substring(start, end).replace(/\n/g, ' '));
    }
});
