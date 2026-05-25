const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'src', 'components', 'docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.tsx'));

const bgRegex = /\s(bg-neutral-50\s+dark:bg-neutral-950|bg-neutral-50\s+dark:bg-black|bg-white\s+dark:bg-black|bg-black)\b/g;
const bgRegex2 = /\s(bg-neutral-50|dark:bg-neutral-950|dark:bg-black|bg-zinc-950|bg-white)\b/g;

let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Specific patterns often used for wrappers
  content = content.replace(/bg-neutral-50 dark:bg-neutral-950/g, '');
  content = content.replace(/bg-neutral-50 dark:bg-black/g, '');
  content = content.replace(/bg-white dark:bg-black/g, '');
  content = content.replace(/bg-black/g, '');
  // Specifically for flip-fade-text where there is an off-black
  // Wait, just removing `bg-neutral-50 dark:bg-neutral-950` should fix flip-fade-text.
  // And for liquid-ocean, removing `bg-black` helps, but maybe it needs to be transparent.
  // Actually, some components might rely on their background color to look good, like a card.
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Modified', file);
    modifiedCount++;
  }
}

console.log('Total modified:', modifiedCount);
