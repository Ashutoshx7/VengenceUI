"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CLICommand } from "@/components/docs/cli-command";
import { CodeBlock as DocCodeBlock, Dependencies } from "@/components/docs/component-installation";
import { PropsTable } from "@/components/docs/props-table";
import { COMPONENT_DOCS } from "@/lib/component-docs";

const UTILS_CODE = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

interface ComponentDocsSectionsProps {
  componentName: string;
  slug: string;
  sourceCode: string;
}

export function ComponentDocsSections({ componentName, slug, sourceCode }: ComponentDocsSectionsProps) {
  const docs = COMPONENT_DOCS[slug] || COMPONENT_DOCS[componentName];
  const [installTab, setInstallTab] = useState<"cli" | "manual">("cli");

  if (!docs) {
    return null;
  }

  return (
    <div className="space-y-10 mt-6">
      {/* ─── Installation Section with CLI | Manual Toggle ─── */}
      <section id="installation" className="scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100 mb-6">Installation</h2>

        {/* CLI / Manual Toggle Tabs */}
        <div className="inline-flex items-center rounded-xl bg-neutral-100 dark:bg-zinc-900/80 border border-neutral-200 dark:border-zinc-700/50 p-1 mb-6">
          <button
            onClick={() => setInstallTab("cli")}
            className={cn(
              "relative px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 select-none",
              installTab === "cli"
                ? "bg-white dark:bg-zinc-700 text-neutral-900 dark:text-white shadow-sm"
                : "text-neutral-400 dark:text-zinc-500 hover:text-neutral-700 dark:hover:text-zinc-300"
            )}
          >
            CLI
          </button>
          <button
            onClick={() => setInstallTab("manual")}
            className={cn(
              "relative px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 select-none",
              installTab === "manual"
                ? "bg-white dark:bg-zinc-700 text-neutral-900 dark:text-white shadow-sm"
                : "text-neutral-400 dark:text-zinc-500 hover:text-neutral-700 dark:hover:text-zinc-300"
            )}
          >
            Manual
          </button>
        </div>

        {/* CLI Tab Content */}
        {installTab === "cli" && (
          <div className="space-y-4">
            <p className="text-sm text-neutral-500 dark:text-zinc-400">Run the following command</p>
            <CLICommand componentName={componentName} />
          </div>
        )}

        {/* Manual Tab Content */}
        {installTab === "manual" && (
          <div className="space-y-6">
            {/* Left border accent line */}
            <div className="border-l-2 border-neutral-200 dark:border-[#222] pl-6 space-y-8">
              {/* Step: Install dependencies */}
              <div className="relative">
                <div className="absolute -left-[26px] -top-0.5 h-6 w-2 bg-neutral-300 dark:bg-zinc-600 rounded-r-full" />
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-zinc-200 mb-4 tracking-tight leading-none">Install dependencies</h3>
                <DocCodeBlock code={docs.dependencies} />
              </div>

              {/* Step: Add util file (if needed) */}
              {docs.includeUtils && (
                <div className="relative">
                  <div className="absolute -left-[26px] -top-0.5 h-6 w-2 bg-neutral-300 dark:bg-zinc-600 rounded-r-full" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-zinc-200 mb-4 tracking-tight leading-none">lib/utils.ts</h3>
                  <DocCodeBlock language="tsx" code={UTILS_CODE} />
                </div>
              )}

              {/* Step: Copy the source code */}
              <div className="relative">
                <div className="absolute -left-[26px] -top-0.5 h-6 w-2 bg-neutral-300 dark:bg-zinc-600 rounded-r-full" />
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-zinc-200 mb-4 tracking-tight leading-none">Copy the source code</h3>
                <div className="inline-flex items-center rounded-md border border-neutral-200 dark:border-[#222] bg-neutral-100 dark:bg-zinc-900 px-3 py-1 text-sm text-neutral-600 dark:text-zinc-300 mb-4 font-mono">
                  components/ui/{componentName}.tsx
                </div>
                <DocCodeBlock
                  language="tsx"
                  expandable={true}
                  code={sourceCode}
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ─── Usage Section ─── */}
      <section id="usage" className="scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100 mb-6">Usage</h2>
        <DocCodeBlock language="tsx" code={docs.usageCode} />
      </section>

      {/* ─── Props Section ─── */}
      {docs.props.length > 0 && (
        <section id="props" className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100 mb-6">Props</h2>
          <PropsTable data={docs.props} />

          {/* Additional prop sections (e.g. metalConfig) */}
          {docs.additionalPropSections?.map((section, i) => (
            <div key={i} className="mt-8">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-zinc-200 mb-4">{section.title}</h3>
              <PropsTable data={section.data} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
