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
  'installation-toc.tsx',
  'creepy-button-demo.tsx',
  'spotlight-navbar-demo.tsx'
];

for (const file of files) {
  if (excludeFiles.includes(file)) continue;

  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Backgrounds
  content = content.replaceAll(' bg-neutral-50 dark:bg-neutral-950', '');
  content = content.replaceAll(' bg-white dark:bg-black', '');
  content = content.replaceAll(' bg-neutral-50 dark:bg-black', '');
  content = content.replaceAll(' bg-background', '');
  if (file === 'liquid-ocean.tsx') content = content.replaceAll(' border bg-black', '');
  
  // Borders
  content = content.replaceAll(' rounded-lg border', '');
  content = content.replaceAll(' rounded-xl border border-neutral-200 dark:border-[#222]', '');
  content = content.replaceAll(' rounded-lg border border-neutral-200 dark:border-[#222]', '');
  content = content.replaceAll(' border border-neutral-200 dark:border-[#222]', '');
  
  // Clean up any stray classes if the border was removed but padding is weird
  // Mostly just targeted removal
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Cleaned:', file);
  }
}
