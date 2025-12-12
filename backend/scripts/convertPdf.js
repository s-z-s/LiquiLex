const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const pdfPath = path.join(__dirname, '../../data/Austin_Title_25.pdf');
const txtPath = path.join(__dirname, '../../data/Austin_Title_25.txt');

console.log(`Reading PDF from: ${pdfPath}`);

if (!fs.existsSync(pdfPath)) {
    console.error('PDF file not found!');
    process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function (data) {
    console.log(`PDF loaded. Pages: ${data.numpages}`);

    // Save to text file
    fs.writeFileSync(txtPath, data.text);
    console.log(`Successfully converted PDF to text: ${txtPath}`);
    console.log(`Total characters: ${data.text.length}`);
}).catch(err => {
    console.error('Failed to parse PDF:', err);
    process.exit(1);
});
