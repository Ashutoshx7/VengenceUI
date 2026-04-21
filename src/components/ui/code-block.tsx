import * as React from "react";
import { codeToHtml } from "shiki";
import fs from "fs";
import path from "path";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  fileName?: string; // If provided, it reads this file from src/registry/
  code?: string;     // If provided, it just highlights this string
  language?: string;
}

export async function CodeBlock({ fileName, code, language = "tsx" }: CodeBlockProps) {
  let codeString = code || "";

  // The Magic: Read directly from the registry folder
  if (fileName) {
    try {
      const filePath = path.join(process.cwd(), "src", "registry", fileName);
      codeString = fs.readFileSync(filePath, "utf8");
    } catch (e) {
      codeString = `// Error reading file: ${fileName}\n// Make sure it exists in src/registry/`;
    }
  }

  // Convert the raw React code to styled HTML using Shiki
  const html = await codeToHtml(codeString, {
    lang: language,
    theme: "github-dark-dimmed", // Sleek, dark theme perfect for VengeanceUI
  });

  return (
    <div className="relative rounded-xl bg-[#22272e] border border-white/10 overflow-hidden my-6 shadow-2xl">
      {/* Header bar with filename and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1c2128] border-b border-white/5">
        <span className="text-xs font-mono text-zinc-400">
          {fileName || "code"}
        </span>
        <CopyButton code={codeString} />
      </div>
      
      {/* The beautifully highlighted code */}
      <div 
        className="p-4 overflow-x-auto text-sm [&>pre]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
