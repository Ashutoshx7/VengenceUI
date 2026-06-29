const fs = require('fs');

const css = fs.readFileSync('input.css', 'utf8');

const regex = /\.((?:god|adam)[0-9a-z-]*)/g;
const classes = new Set();
let match;
while ((match = regex.exec(css)) !== null) {
  classes.add(match[1]);
}

const buildTree = (prefix) => {
  const nodes = Array.from(classes).filter(c => c.startsWith(prefix) && c !== prefix);
  
  // Find immediate children. e.g. if prefix is 'god', immediate children are 'god-1', 'god-2', 'god-1a', etc.
  // Meaning there's exactly one more hyphen block.
  const children = nodes.filter(c => {
    const remaining = c.slice(prefix.length + 1);
    return !remaining.includes('-');
  });

  if (children.length === 0) return '';

  let html = '';
  for (const child of children) {
    html += `<div class="${child}">\n`;
    html += buildTree(child);
    html += `</div>\n`;
  }
  return html;
};

let html = `<div class="scene">\n`;
html += `<div class="god">\n${buildTree('god')}</div>\n`;
html += `<div class="adam">\n${buildTree('adam')}</div>\n`;
html += `</div>`;

fs.writeFileSync('output.html', html);
console.log("Done");
