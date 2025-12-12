const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '../../data/Austin_Title_25.txt');
const outputDir = path.join(__dirname, '../../data');

console.log(`Reading source file: ${sourcePath}`);

if (!fs.existsSync(sourcePath)) {
    console.error('Source file not found!');
    process.exit(1);
}

const content = fs.readFileSync(sourcePath, 'utf8');
const totalLength = content.length;
console.log(`Total length: ${totalLength} characters`);

// Rough split points based on user suggestion (approximate page counts)
// Total ~690 pages. 
// Part 1: Definitions (pg 1-150) -> ~22%
// Part 2: Site Dev (pg 151-400) -> ~36%
// Part 3: Special Reqs (pg 401-690) -> ~42%

const split1 = Math.floor(totalLength * 0.22);
const split2 = Math.floor(totalLength * 0.58); // 0.22 + 0.36

const part1 = content.substring(0, split1);
const part2 = content.substring(split1, split2);
const part3 = content.substring(split2);

const files = [
    { name: 'Austin_Part1_Definitions.txt', content: part1 },
    { name: 'Austin_Part2_SiteDev.txt', content: part2 },
    { name: 'Austin_Part3_SpecialReqs.txt', content: part3 }
];

files.forEach(file => {
    const filePath = path.join(outputDir, file.name);
    fs.writeFileSync(filePath, file.content);
    console.log(`Created ${file.name} (${file.content.length} chars)`);
});

console.log('Splitting complete.');
