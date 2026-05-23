import * as React from "react";
import fs from "fs";
import path from "path";
import { CodeBlock } from "@/components/ui/code-block";
import { CopyButton } from "@/components/ui/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Expand, Terminal, WandSparkles, TerminalSquare, PictureInPicture2 } from "lucide-react";
import { ComponentDocsSections } from "@/components/docs/component-docs-sections";

interface ComponentShowcaseProps {
  componentName: string; // The exact filename in the registry (without .tsx)
  title: string;
  description: string;
  children: React.ReactNode; // The live component itself
}

/**
 * Read the component source code from the filesystem (server-side only).
 * Tries multiple candidate directories.
 */
function readComponentSource(componentName: string): string {
  const fileName = `${componentName}.tsx`;
  const candidates = [
    path.join(process.cwd(), "src", "components", "ui", fileName),
    path.join(process.cwd(), "src", "registry", fileName),
    path.join(process.cwd(), "src", "components", "docs", fileName),
  ];

  for (const candidate of candidates) {
    try {
      if (fs.existsSync(candidate)) {
        return fs.readFileSync(candidate, "utf8");
      }
    } catch {
      continue;
    }
  }
  return `// Source code for ${componentName} not found`;
}

export function ComponentShowcase({
  componentName,
  title,
  description,
  children,
}: ComponentShowcaseProps) {
  const installCommand = `npx shadcn@latest add @vengeanceui/${componentName}`;
  const sourceCode = readComponentSource(componentName);

  return (
    <div className="mb-24 space-y-7">
      {/* Component Header */}
      <div id="overview" className="space-y-3 scroll-mt-24">
        <p className="text-sm font-medium text-neutral-500 dark:text-zinc-500">
          Components <span className="mx-1 text-neutral-400 dark:text-zinc-700">/</span>
          <span className="text-neutral-900 dark:text-zinc-200">{title}</span>
        </p>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100">{title}</h1>
        <p className="text-neutral-500 dark:text-zinc-400 text-lg">{description}</p>
      </div>

      {/* The Showcase Toggle */}
      <Tabs defaultValue="preview" className="space-y-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <TabsList className="mb-0">
            <TabsTrigger value="preview" className="gap-2 px-3 py-1.5 text-sm h-8 font-medium">
              <PictureInPicture2 className="h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="gap-2 px-3 py-1.5 text-sm h-8 font-medium text-neutral-500 dark:text-zinc-400 hover:text-neutral-700 dark:hover:text-zinc-300">
              <TerminalSquare className="h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex w-full items-center gap-2 rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-black px-1.5 py-1.5 text-xs text-neutral-600 dark:text-zinc-300 shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:w-auto">
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 dark:bg-zinc-800 text-neutral-400 dark:text-zinc-500">
              <Terminal className="h-3.5 w-3.5" />
            </div>
            <span className="max-w-[42vw] truncate font-mono text-neutral-500 dark:text-zinc-400 lg:max-w-[500px]">{installCommand}</span>
            <button
              type="button"
              className="ml-auto hidden h-7 items-center gap-1 rounded-md border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 px-2.5 text-neutral-600 dark:text-zinc-300 transition-colors hover:bg-neutral-200 dark:hover:bg-white/10 sm:inline-flex"
            >
              Copy prompt
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <CopyButton code={installCommand} className="h-7 w-7 border-neutral-200 dark:border-white/10 bg-transparent hover:bg-neutral-100 dark:hover:bg-white/10" />
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 dark:border-white/10 bg-transparent text-neutral-400 dark:text-zinc-400 transition-colors hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-700 dark:hover:text-zinc-200"
              aria-label="Open in v0"
            >
              <WandSparkles className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 dark:border-white/10 bg-transparent text-neutral-400 dark:text-zinc-400 transition-colors hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-700 dark:hover:text-zinc-200"
              aria-label="Expand preview"
            >
              <Expand className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <TabsContent value="preview">
          <div className="w-full">
            <div id="preview" className="w-full scroll-mt-24 rounded-2xl border border-neutral-200 dark:border-[#222] bg-neutral-100 dark:bg-zinc-900 p-2.5 shadow-lg dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-4">
              <div className="relative flex min-h-[700px] items-center justify-center overflow-hidden rounded-xl border border-neutral-200 dark:border-[#222] bg-white dark:bg-black p-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/5 dark:bg-white/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.03),transparent_32%),radial-gradient(circle_at_80%_100%,rgba(0,0,0,0.02),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.04),transparent_34%)]" />

                <div className="relative z-10 w-full flex justify-center items-center">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Code Block */}
        <TabsContent value="code">
          <div id="code" className="scroll-mt-24" />
          <div className="mt-4">
            <CodeBlock fileName={`${componentName}.tsx`} />
          </div>
        </TabsContent>
      </Tabs>

      {/* ─── Documentation Sections (Client Component) ─── */}
      <ComponentDocsSections componentName={componentName} sourceCode={sourceCode} />
    </div>
  );
}
