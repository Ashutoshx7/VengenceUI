"use client";

import * as React from "react";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

const packageManagers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

export function PackageCommand({
  commands,
}: {
  commands: Record<PackageManager, string>;
}) {
  const [activeManager, setActiveManager] =
    React.useState<PackageManager>("npm");
  const command = commands[activeManager];

  return (
    <div className="space-y-2">
      <div className="inline-flex items-center rounded-md bg-neutral-100 p-1 text-sm text-neutral-500 dark:bg-zinc-900 dark:text-zinc-400">
        {packageManagers.map((manager) => (
          <button
            key={manager}
            type="button"
            onClick={() => setActiveManager(manager)}
            className={cn(
              "rounded px-3 py-1 font-medium transition-colors",
              activeManager === manager
                ? "bg-white text-neutral-950 shadow-sm dark:bg-zinc-800 dark:text-white"
                : "text-neutral-500 hover:text-neutral-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            )}
          >
            {manager}
          </button>
        ))}
      </div>
      <div className="group/command relative inline-flex max-w-full items-center overflow-hidden rounded-md bg-neutral-100 text-sm dark:bg-zinc-900">
        <span className="border-r border-neutral-200 px-3 py-2 font-mono text-neutral-500 dark:border-zinc-800 dark:text-zinc-400">
          bash
        </span>
        <code className="overflow-x-auto px-3 py-2 pr-12 font-mono text-neutral-950 dark:text-zinc-100">
          {command}
        </code>
        <CopyButton
          code={command}
          className="absolute right-1.5 top-1/2 h-7 w-7 -translate-y-1/2 border-zinc-700 bg-zinc-900/80 opacity-0 transition-opacity group-hover/command:opacity-100"
        />
      </div>
    </div>
  );
}
