const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../build/index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Исправляем пути
indexContent = indexContent.replace(/href="\/static/g, 'href="./static');
indexContent = indexContent.replace(/src="\/static/g, 'src="./static');
indexContent = indexContent.replace(/href="\/favicon/g, 'href="./favicon');
indexContent = indexContent.replace(/href="\/logo/g, 'href="./logo');
indexContent = indexContent.replace(/href="\/manifest/g, 'href="./manifest');

fs.writeFileSync(indexPath, indexContent);
console.log('Paths fixed for GitHub Pages!');