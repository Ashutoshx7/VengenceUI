const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'src', 'components', 'docs');
const targetFiles = [
  'liquid-text.tsx',
  'testimonials-card.tsx',
  'perspective-grid.tsx',
  'social-flip-button.tsx',
  'animated-hero.tsx',
  'glass-dock.tsx'
];

let modifiedCount = 0;

for (const file of targetFiles) {
  const filePath = path.join(docsDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  content = content.replaceAll(' bg-background', '');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Modified', file);
    modifiedCount++;
  }
}

console.log('Total modified:', modifiedCount);
