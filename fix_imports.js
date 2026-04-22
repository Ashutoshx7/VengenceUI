const fs = require('fs');
const path = require('path');

function replaceInDir(target, searchRegex, replaceStr) {
  if (fs.statSync(target).isFile()) {
    let content = fs.readFileSync(target, 'utf8');
    if (searchRegex.test(content)) {
      content = content.replace(searchRegex, replaceStr);
      fs.writeFileSync(target, content, 'utf8');
    }
    return;
  }
  
  const files = fs.readdirSync(target);
  for (const file of files) {
    const fullPath = path.join(target, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath, searchRegex, replaceStr);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (searchRegex.test(content)) {
        content = content.replace(searchRegex, replaceStr);
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

replaceInDir('src/components/ui', /@vengeance\/core\/lib\/utils/g, '@/lib/utils');
replaceInDir('src/components/landing', /@vengeance\/core\/lib\/utils/g, '@/lib/utils');
replaceInDir('src/components/ui', /@vengeance\/core\/ui/g, '@/components/ui');
replaceInDir('src/components/landing', /@vengeance\/core\/ui/g, '@/components/ui');
replaceInDir('src/app/page.tsx', /@vengeance\/core\/ui/g, '@/components/ui');

replaceInDir('src/components/landing', /"motion\/react"/g, '"framer-motion"');
replaceInDir('src/components/landing', /'motion\/react'/g, "'framer-motion'");
replaceInDir('src/components/ui', /"motion\/react"/g, '"framer-motion"');
replaceInDir('src/components/ui', /'motion\/react'/g, "'framer-motion'");
