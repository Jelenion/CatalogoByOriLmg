const fs = require('fs');
const path = require('path');

const shoesDir = path.join(__dirname, 'src', 'img', 'shoes');
const outputFile = path.join(__dirname, 'shoes-images.json');

const result = {};

fs.readdirSync(shoesDir).forEach(folder => {
  const folderPath = path.join(shoesDir, folder);
  if (fs.statSync(folderPath).isDirectory()) {
    const images = fs.readdirSync(folderPath)
      .filter(file => file.toLowerCase().endsWith('.jpg'));
    result[folder] = images;
  }
});

fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
console.log('✅ shoes-images.json generado correctamente.'); 