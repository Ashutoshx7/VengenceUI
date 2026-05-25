const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'src', 'components', 'docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.tsx'));

const excludeFiles = [
  'component-installation.tsx', 
  'component-preview.tsx', 
  'props-table.tsx', 
  'cli-command.tsx', 
  'component-docs-sections.tsx',
  'demo-renderer.tsx',
  'preview-tabs.tsx',
  'sidebar-hover-indicator.tsx',
  'installation.tsx',
  'installation-toc.tsx'
];

let modifiedCount = 0;

for (const file of files) {
  if (excludeFiles.includes(file)) continue;

  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Specific border and radius classes that act as outer wrapper frames
  content = content.replaceAll(' rounded-lg border', '');
  content = content.replaceAll(' rounded-xl border border-neutral-200 dark:border-[#222]', '');
  content = content.replaceAll(' border border-neutral-200 dark:border-[#222]', '');
  content = content.replaceAll(' rounded-xl', ''); // some wrappers have just rounded-xl left
  content = content.replaceAll(' rounded-lg', '');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Modified', file);
    modifiedCount++;
  }
}

console.log('Total modified:', modifiedCount);
