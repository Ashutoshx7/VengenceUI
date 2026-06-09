import * as React from "react";
import fs from "fs";
import path from "path";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ComponentDocsSections } from "@/components/docs/component-docs-sections";
import { ComponentPreviewPanel } from "@/components/ui/component-preview-panel";
import { getShadcnAddCommand } from "@/lib/registry";

interface ComponentShowcaseProps {
  componentName: string; // The exact filename in the registry (without .tsx)
  title: string;
  description: string;
  slug?: string;
  children: React.ReactNode; // The live component itself
}

/**
 * Read the component source code from the filesystem (server-side only).
 * Tries multiple candidate directories.
 * The turbopackIgnore comment prevents Turbopack from tracing the entire project.
 */
function readComponentSource(componentName: string): string {
  const fileName = `${componentName}.tsx`;

  try {
    const p1 = path.join(process.cwd(), "src", "components", "ui", fileName);
    if (fs.existsSync(p1)) return fs.readFileSync(p1, "utf8");
  } catch {}

  try {
    const p2 = path.join(process.cwd(), "src", "registry", fileName);
    if (fs.existsSync(p2)) return fs.readFileSync(p2, "utf8");
  } catch {}

  try {
    const p3 = path.join(process.cwd(), "src", "components", "docs", fileName);
    if (fs.existsSync(p3)) return fs.readFileSync(p3, "utf8");
  } catch {}

  return `// Source code for ${componentName} not found`;
}

export function ComponentShowcase({
  componentName,
  title,
  description,
  slug = componentName,
  children,
}: ComponentShowcaseProps) {
  const installCommand = getShadcnAddCommand(componentName);
  const sourceCode = readComponentSource(componentName);

  return (
    <div className="mb-8 space-y-4">
      {/* Component Header */}
      <div id="overview" className="space-y-1 scroll-mt-24">
        <p className="text-sm font-medium text-neutral-500 dark:text-zinc-500">
          Components <span className="mx-1 text-neutral-400 dark:text-zinc-700">/</span>
          <span className="text-neutral-900 dark:text-zinc-200">{title}</span>
        </p>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100">{title}</h1>
        <p className="text-neutral-500 dark:text-zinc-400 text-lg">{description}</p>
      </div>

      {/* The Showcase Toggle */}
      <Tabs defaultValue="preview" className="space-y-4">
        <ComponentPreviewPanel installCommand={installCommand}>
          {children}
        </ComponentPreviewPanel>

        {/* Code Block */}
        <TabsContent value="code">
          <div id="code" className="scroll-mt-24" />
          <div className="mt-4">
            <CodeBlock fileName={`${componentName}.tsx`} />
          </div>
        </TabsContent>
      </Tabs>

      {/* ─── Documentation Sections (Client Component) ─── */}
      <ComponentDocsSections componentName={componentName} slug={slug} sourceCode={sourceCode} />
    </div>
  );
}
