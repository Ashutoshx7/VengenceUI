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
  
  content = content.replaceAll(' bg-neutral-50 dark:bg-neutral-950', '');
  content = content.replaceAll(' bg-white dark:bg-black', '');
  content = content.replaceAll(' bg-neutral-50 dark:bg-black', '');
  
  if (file === 'liquid-ocean.tsx') {
    content = content.replaceAll(' border bg-black', ' border');
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Modified', file);
    modifiedCount++;
  }
}

console.log('Total modified:', modifiedCount);
