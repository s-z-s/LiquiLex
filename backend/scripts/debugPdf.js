const pdf = require('pdf-parse');
console.log('Type of pdf:', typeof pdf);
console.log('Is array?', Array.isArray(pdf));
console.log('Keys:', Object.keys(pdf));
console.log('Export:', pdf);
