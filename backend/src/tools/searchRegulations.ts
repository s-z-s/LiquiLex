import { Env } from '../liquilex/raindrop.gen';

export async function searchRegulations(query: string, env: Env) {
    console.log(`Searching regulations for: "${query}"`);

    try {
        // 1. Fetch Manifest (The Knowledge Base)
        // @ts-ignore
        const manifestObj = await env.AUSTIN_CODES.get('chunks/manifest.json');
        let manifest: any[] = [];

        if (manifestObj) {
            manifest = await new Response(manifestObj.body).json() as any[];
        } else {
            console.warn("Manifest not found!");
            return { error: "Regulatory database not found. Please contact support." };
        }

        // 2. Normalize Query
        const normalize = (str: string) => str.replace(/[^\w\s]/g, ' ').toLowerCase();
        const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'down', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must', 'want', 'open', 'building', 'that', 'what', 'maximum', 'number', 'years', 'located', 'neighborhood', 'operate', 'after', 'establishment', 'allowed', 'if', 'it', 'how', 'far', 'extend', 'limits', 'required', 'repair', 'size', 'use', 'develop', 'calculated', 'place'];

        // Synonym Map
        const synonyms: Record<string, string[]> = {
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

        const queryTerms = normalize(query).split(/\s+/).filter(t => t.length > 2 && !stopWords.includes(t));

        if (queryTerms.length === 0) {
            return { error: "Query too short or contains only stop words." };
        }

        const scoredSections: any[] = [];

        // 3. Search In-Memory Manifest
        for (const entry of manifest) {
            // Use text_content from manifest, fallback to empty if missing (shouldn't happen with new ingestion)
            const content = entry.text_content || '';
            const title = entry.title || '';

            // Build Rich Content
            let richContent = content;
            if (entry.tables && entry.tables.length > 0) {
                richContent += '\n\n[RELATED TABLES]:\n' + entry.tables.map((t: string) => `- ${t}`).join('\n');
            }
            if (entry.images && entry.images.length > 0) {
                richContent += '\n\n[RELATED IMAGES]:\n' + entry.images.map((i: string) => `- ${i}`).join('\n');
            }

            const lowerContent = normalize(content);
            const matchedOriginalTerms = new Set();

            for (const term of queryTerms) {
                if (lowerContent.includes(term)) {
                    matchedOriginalTerms.add(term);
                } else if (synonyms[term]) {
                    for (const syn of synonyms[term]) {
                        if (lowerContent.includes(syn)) {
                            matchedOriginalTerms.add(term);
                            break;
                        }
                    }
                }
            }

            if (matchedOriginalTerms.size > 0) {
                const density = matchedOriginalTerms.size / (Math.max(content.length, 1) / 1000);
                const baseScore = matchedOriginalTerms.size / queryTerms.length;
                let finalScore = (baseScore * 0.7) + (Math.min(density, 1) * 0.3);

                // Boosters
                let isTitleMatch = false;
                for (const term of queryTerms) {
                    if (title.toLowerCase().includes(term)) { isTitleMatch = true; break; }
                    if (synonyms[term] && synonyms[term].some(s => title.toLowerCase().includes(s))) { isTitleMatch = true; break; }
                }
                if (isTitleMatch) finalScore *= 1.5;
                if (title.toLowerCase().includes('schedule') || title.toLowerCase().includes('table')) finalScore *= 1.5;
                if (query.toLowerCase().includes('parking') && title.toLowerCase().includes('parking')) finalScore *= 1.2;

                scoredSections.push({
                    title,
                    text: richContent,
                    score: finalScore,
                    matches: Array.from(matchedOriginalTerms)
                });
            }
        }

        // 4. Sort and Return
        scoredSections.sort((a, b) => b.score - a.score);
        const topResults = scoredSections.slice(0, 20);

        if (topResults.length > 0) {
            return {
                matches: topResults.map(r => {
                    const idMatch = r.title.match(/([\d-]+)/);
                    const shortSource = idMatch ? `Section ${idMatch[1]}` : r.title;
                    return {
                        text: `[Source: ${shortSource}]\n${r.text.substring(0, 1500)}${r.text.length > 1500 ? '...' : ''}`,
                        score: r.score,
                        source: shortSource
                    };
                })
            };
        }

        return { error: "No relevant regulations found." };

    } catch (error) {
        console.error('SmartBucket Search Error:', error);
        return { error: "Failed to search regulations database." };
    }
}
