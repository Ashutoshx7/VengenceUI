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

  // Try multiple source folders so migrated docs/components can still show code.
  if (fileName) {
    const candidates = [
      path.join(process.cwd(), "src", "registry", fileName),
      path.join(process.cwd(), "src", "components", "ui", fileName),
      path.join(process.cwd(), "src", "components", "docs", fileName),
      path.join(process.cwd(), "src", "components", "docs", "Fliptext-examples", fileName),
    ];

    try {
      const existingFilePath = candidates.find((candidatePath) => fs.existsSync(candidatePath));

      if (!existingFilePath) {
        throw new Error("No matching source file found");
      }

      codeString = fs.readFileSync(existingFilePath, "utf8");
    } catch (e) {
      codeString = `// Error reading file: ${fileName}\n// Looked in src/registry, src/components/ui, and src/components/docs`;
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
