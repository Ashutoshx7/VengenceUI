import * as React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { CopyButton } from "@/components/ui/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Expand, Terminal, WandSparkles, TerminalSquare, PictureInPicture2 } from "lucide-react";

interface ComponentShowcaseProps {
  componentName: string; // The exact filename in the registry (without .tsx)
  title: string;
  description: string;
  children: React.ReactNode; // The live component itself
}

export function ComponentShowcase({
  componentName,
  title,
  description,
  children,
}: ComponentShowcaseProps) {
  const installCommand = `npx shadcn@latest add @vengeanceui/${componentName}`;
  const tags = ["Feature", "Utility", "Special"];

  return (
    <div className="mb-24 space-y-7">
      {/* Component Header */}
      <div id="overview" className="space-y-3 scroll-mt-24">
        <p className="text-sm font-medium text-zinc-500">
          Components <span className="mx-1 text-zinc-700">/</span>
          <span className="text-zinc-200">{title}</span>
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-zinc-100">{title}</h2>
        <p className="text-zinc-400 text-lg">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* The Showcase Toggle */}
      <Tabs defaultValue="preview" className="space-y-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <TabsList className="mb-0">
            <TabsTrigger value="preview" className="gap-2 px-3 py-1.5 text-sm h-8 font-medium">
              <PictureInPicture2 className="h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="gap-2 px-3 py-1.5 text-sm h-8 font-medium text-zinc-400 hover:text-zinc-300">
              <TerminalSquare className="h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-black px-1.5 py-1.5 text-xs text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:w-auto">
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-zinc-800 text-zinc-500">
              <Terminal className="h-3.5 w-3.5" />
            </div>
            <span className="max-w-[42vw] truncate font-mono text-zinc-400 lg:max-w-[500px]">{installCommand}</span>
            <button
              type="button"
              className="ml-auto hidden h-7 items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 text-zinc-300 transition-colors hover:bg-white/10 sm:inline-flex"
            >
              Copy prompt
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <CopyButton code={installCommand} className="h-7 w-7 border-white/10 bg-transparent hover:bg-white/10" />
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-transparent text-zinc-400 transition-colors hover:bg-white/10 hover:text-zinc-200"
              aria-label="Open in v0"
            >
              <WandSparkles className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-transparent text-zinc-400 transition-colors hover:bg-white/10 hover:text-zinc-200"
              aria-label="Expand preview"
            >
              <Expand className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <TabsContent value="preview">
          <div className="w-full">
            <div id="preview" className="w-full scroll-mt-24 rounded-2xl border border-zinc-800 bg-zinc-900 p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-4">
              <div className="relative flex min-h-[700px] items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-black p-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.04),transparent_34%)]" />

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
            {/* We automatically append .tsx so you don't have to type it every time */}
            <CodeBlock fileName={`${componentName}.tsx`} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
