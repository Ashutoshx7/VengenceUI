const fs = require('fs');
const path = require('path');

const componentPath = path.join(__dirname, 'src/components/ui/fluid-morph-bg.tsx');
const content = fs.readFileSync(componentPath, 'utf8');

const registryData = {
  name: "fluid-morph-bg",
  type: "registry:ui",
  title: "Fluid Morph Background",
  description: "Organic fluid shape morphing animation",
  dependencies: [
    "framer-motion",
    "clsx",
    "tailwind-merge"
  ],
  files: [
    {
      path: "components/ui/fluid-morph-bg.tsx",
      content: content,
      type: "registry:ui",
      target: "components/ui/fluid-morph-bg.tsx"
    }
  ]
};

const outPath = path.join(__dirname, 'public/r/fluid-morph-bg.json');
fs.writeFileSync(outPath, JSON.stringify(registryData, null, 2));

console.log('Successfully wrote public/r/fluid-morph-bg.json');
