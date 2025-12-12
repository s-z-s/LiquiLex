const fs = require('fs');
const path = require('path');

let files = [];
let manifest = [];
const manifestPath = path.join(__dirname, '../../data/chunks/manifest.json');
if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    files = manifest.map(m => `chunks/${m.filename}`);
} else {
    console.error("Manifest not found! Please run ingest_pdf.py first.");
    process.exit(1);
}

const questions = [
    "Can I park my food truck in a 'General Office' (GO) zoning district?",
    "I run a business from my home. Can I put up a sign?",
    "My restaurant wants to host live bands on the patio. How loud can it be?",
    "I'm opening a shop Downtown (CBD). Do I need to provide customer parking?",
    "I want to open a microbrewery. How far must I be from a house to sell beer on-site?",
    "I'm opening an art gallery. How many parking spaces do I need?",
    "Can I hold a parking lot sale or swap meet at my commercial property?",
    "Do I have to screen my dumpster from the street?",
    "I want to open a 'Corner Store'. Does it actually have to be at an intersection?",
    "Can I rent out my Bed & Breakfast for weddings?"
];

const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'down', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must', 'want', 'open', 'building', 'that', 'what', 'maximum', 'number', 'years', 'located', 'neighborhood', 'operate', 'after', 'establishment', 'allowed', 'if', 'it', 'how', 'far', 'extend', 'limits', 'required', 'repair', 'size', 'use', 'develop', 'how', 'calculated', 'place', 'my', 'wants'];

console.log(`Testing ${questions.length} questions...`);

// Clear previous results
fs.writeFileSync('verification_results.txt', '');

questions.forEach((q, i) => {
    console.log(`\n--- Q${i + 1}: "${q}" ---`);
    const normalize = (str) => str.replace(/[^\w\s]/g, ' ').toLowerCase();

    // Synonym Map for Legal Term Expansion
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
    console.log('Terms:', queryTerms);

    let scoredSections = [];

    files.forEach(filename => {
        const filePath = path.join(__dirname, '../../data', filename);
        if (!fs.existsSync(filePath)) return;

        const text = fs.readFileSync(filePath, 'utf8');

        // Find metadata
        const meta = manifest.find(m => `chunks/${m.filename}` === `chunks/${filename}`);
        let richText = text;
        if (meta) {
            if (meta.tables && meta.tables.length > 0) {
                richText += '\n\n[RELATED TABLES]:\n' + meta.tables.map(t => `- ${t}`).join('\n');
            }
            if (meta.images && meta.images.length > 0) {
                richText += '\n\n[RELATED IMAGES]:\n' + meta.images.map(i => `- ${i}`).join('\n');
            }
        }

        // Split by Section Symbol '§'
        const sections = richText.split('§');

        sections.forEach(sectionRaw => {
            if (sectionRaw.length < 50) return;

            // Split by Appendix Title (capturing it) to handle embedded Appendices
            const parts = sectionRaw.split(/(APPENDIX [A-Z]\.\s+-\s+[^\n]+)/);

            let chunks = [];

            // The first part is the original section content (needs '§')
            if (parts[0] && parts[0].trim()) {
                chunks.push('§' + parts[0]);
            }

            // Subsequent parts are [Title, Content, Title, Content...]
            for (let i = 1; i < parts.length; i += 2) {
                const appTitle = parts[i];
                const appContent = parts[i + 1] || '';
                chunks.push(appTitle + appContent);
            }

            chunks.forEach(sectionContent => {
                const lowerSection = normalize(sectionContent);

                // Extract Title
                let title = 'Unknown Section';
                const titleMatch = sectionContent.match(/§\s+([\d-]+\s+-\s+[^\n]+)/);
                if (titleMatch && titleMatch[1]) {
                    title = titleMatch[1].trim();
                } else {
                    const appMatch = sectionContent.match(/^(APPENDIX [A-Z]\.\s+-\s+[^\n]+)/);
                    if (appMatch && appMatch[1]) title = appMatch[1].trim();
                }

                // Score: Check if original term OR any synonym matches
                const matchedOriginalTerms = new Set();

                for (const term of queryTerms) {
                    // Check original term
                    if (lowerSection.includes(term)) {
                        matchedOriginalTerms.add(term);
                    }
                    // Check synonyms
                    else if (synonyms[term]) {
                        for (const syn of synonyms[term]) {
                            if (lowerSection.includes(syn)) {
                                matchedOriginalTerms.add(term); // Count as match for the ORIGINAL term
                                break; // One synonym match is enough
                            }
                        }
                    }
                }

                if (matchedOriginalTerms.size > 0) {
                    // Score = (Unique Matches / Total Query Terms) * Density Bonus
                    const density = matchedOriginalTerms.size / (sectionContent.length / 1000);
                    const baseScore = matchedOriginalTerms.size / queryTerms.length;

                    // Weighted Score: 70% match coverage, 30% density
                    let finalScore = (baseScore * 0.7) + (Math.min(density, 1) * 0.3);

                    // BOOST: Prioritize sections where Title matches query terms
                    let titleMatch = false;
                    for (const term of queryTerms) {
                        if (title.toLowerCase().includes(term)) {
                            titleMatch = true;
                            break;
                        }
                        if (synonyms[term]) {
                            for (const syn of synonyms[term]) {
                                if (title.toLowerCase().includes(syn)) {
                                    titleMatch = true;
                                    break;
                                }
                            }
                        }
                        if (titleMatch) break;
                    }
                    if (titleMatch) {
                        finalScore *= 1.5; // 50% boost for title match
                    }

                    // BOOST: Prioritize "Schedule" or "Table" sections for quantitative queries
                    if (title.toLowerCase().includes('schedule') || title.toLowerCase().includes('table')) {
                        finalScore *= 1.5; // 50% boost
                    }

                    // BOOST: Prioritize "Parking" sections if query mentions parking
                    if (q.toLowerCase().includes('parking') && title.toLowerCase().includes('parking')) {
                        finalScore *= 1.2; // 20% boost
                    }

                    scoredSections.push({
                        title,
                        score: finalScore,
                        matches: Array.from(matchedOriginalTerms),
                        text: sectionContent
                    });
                }
            });
        });
    });

    // Sort and Return Top Results
    scoredSections.sort((a, b) => b.score - a.score);
    const topResults = scoredSections.slice(0, 20);

    const output = topResults.map((r, idx) => `${idx + 1}. [${r.score.toFixed(2)}] ${r.title}`).join('\n');
    console.log(output);
    fs.appendFileSync('verification_results.txt', `\n--- Q${i + 1} Results ---\n${output}\n`);
});
