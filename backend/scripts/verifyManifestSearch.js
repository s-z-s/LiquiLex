const fs = require('fs');
const path = require('path');

// 1. Mock Manifest Load
const manifestPath = path.join(__dirname, '../../data/chunks/manifest.json');
let manifest = [];
if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
} else {
    console.error("Manifest not found!");
    process.exit(1);
}

const questions = [
    "food truck",
    "food truck in district P",
    "food truck Public zoning",
    "open a food truck in zoning district P",
    "Mobile Food Establishments district P"
];

const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'down', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must', 'want', 'open', 'building', 'that', 'what', 'maximum', 'number', 'years', 'located', 'neighborhood', 'operate', 'after', 'establishment', 'allowed', 'if', 'it', 'how', 'far', 'extend', 'limits', 'required', 'repair', 'size', 'use', 'develop', 'calculated', 'place'];

console.log(`Testing ${questions.length} questions against FAT MANIFEST...`);

questions.forEach((q, i) => {
    console.log(`\n--- Q${i + 1}: "${q}" ---`);
    const normalize = (str) => str.replace(/[^\w\s]/g, ' ').toLowerCase();

    // Synonym Map
    const synonyms = {
        'bar': ['cocktail', 'lounge', 'tavern', 'nightclub', 'alcohol', 'restaurant'],
        'shop': ['retail', 'merchandise', 'sales'],
        'store': ['retail', 'merchandise', 'sales'],
        'home': ['residential', 'dwelling'],
        'house': ['residential', 'dwelling'],
        'apartment': ['multifamily', 'residential'],
        'condo': ['condominium', 'multifamily'],
        'office': ['administrative', 'professional'],
        'gym': ['fitness', 'recreation'],
        'school': ['educational', 'instruction'],
        'church': ['religious', 'assembly'],
        'next': ['adjacent', 'abutting', 'proximity', 'distance', 'within', 'setback']
    };

    const queryTerms = normalize(q).split(/\s+/).filter(t => t.length > 2 && !stopWords.includes(t));
    if (queryTerms.length === 0) return;

    const scoredSections = [];

    // 3. Search In-Memory
    for (const entry of manifest) {
        // Uses text_content directly
        const content = entry.text_content || '';
        if (!content) continue; // Skip if empty (e.g. intro chunks)

        const title = entry.title || '';
        const lowerContent = normalize(content);

        const matchedOriginalTerms = new Set();
        for (const term of queryTerms) {
            if (lowerContent.includes(term)) matchedOriginalTerms.add(term);
            else if (synonyms[term]) {
                for (const syn of synonyms[term]) {
                    if (lowerContent.includes(syn)) { matchedOriginalTerms.add(term); break; }
                }
            }
        }

        if (matchedOriginalTerms.size > 0) {
            const density = matchedOriginalTerms.size / (content.length / 1000);
            const baseScore = matchedOriginalTerms.size / queryTerms.length;
            let finalScore = (baseScore * 0.7) + (Math.min(density, 1) * 0.3);

            let isTitleMatch = false;
            for (const term of queryTerms) {
                if (title.toLowerCase().includes(term)) { isTitleMatch = true; break; }
                if (synonyms[term] && synonyms[term].some(s => title.toLowerCase().includes(s))) { isTitleMatch = true; break; }
            }
            if (isTitleMatch) finalScore *= 1.5;
            if (title.toLowerCase().includes('schedule') || title.toLowerCase().includes('table')) finalScore *= 1.5;
            if (q.toLowerCase().includes('parking') && title.toLowerCase().includes('parking')) finalScore *= 1.2;

            scoredSections.push({
                title,
                score: finalScore,
                matches: Array.from(matchedOriginalTerms)
            });
        }
    }

    scoredSections.sort((a, b) => b.score - a.score);
    const topResults = scoredSections.slice(0, 5);

    topResults.forEach((r, idx) => {
        console.log(`${idx + 1}. [${r.score.toFixed(2)}] ${r.title}`);
    });
});
