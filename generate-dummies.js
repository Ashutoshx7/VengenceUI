const fs = require('fs');
const path = require('path');

const components = Array.from({ length: 20 }, (_, i) => ({
  id: `dummy-component-${i + 1}`,
  name: `Dummy Component ${i + 1}`,
}));

components.forEach(comp => {
  // Write to registry
  const compName = comp.name.replace(/\s/g, '');
  const regContent = `"use client";\n\nimport { motion } from "framer-motion";\n\nexport default function ${compName}() {\n  return (\n    <motion.div whileHover={{ scale: 1.05 }} className="p-8 rounded-xl bg-zinc-900 border border-white/10 text-white font-mono flex items-center justify-center shadow-2xl">\n      ${comp.name} Live Preview\n    </motion.div>\n  );\n}`;
  fs.writeFileSync(path.join(__dirname, `src/registry/${comp.id}.tsx`), regContent);

  // Write to app directory
  const dir = path.join(__dirname, `src/app/components/${comp.id}`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const pageContent = `import { ComponentShowcase } from "@/components/ui/component-showcase";\nimport ${compName} from "@/registry/${comp.id}";\n\nexport default function Page() {\n  return (\n    <div className="w-full max-w-4xl">\n      <ComponentShowcase componentName="${comp.id}" title="${comp.name}" description="This is an auto-generated dummy component to show how the architecture scales.">\n        <${compName} />\n      </ComponentShowcase>\n    </div>\n  );\n}`;
  fs.writeFileSync(path.join(dir, `page.tsx`), pageContent);
});

// Update the Sidebar to include all 20
const sidebarPath = path.join(__dirname, 'src/components/layout/sidebar.tsx');
let sidebar = fs.readFileSync(sidebarPath, 'utf8');
const newLinks = components.map(c => `  { name: "${c.name}", href: "/components/${c.id}" },`).join('\n');
sidebar = sidebar.replace(/];/, newLinks + '\n];');
fs.writeFileSync(sidebarPath, sidebar);

console.log("Successfully generated 20 dummy components and updated the sidebar!");
