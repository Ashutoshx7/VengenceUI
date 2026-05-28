import * as React from "react";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

export function DocsArticle({ children }: { children: React.ReactNode }) {
  return (
    <article className="space-y-10 pb-24 text-neutral-900 dark:text-zinc-100">
      {children}
    </article>
  );
}

export function DocsHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
        {title}
      </h1>
      <p className="text-lg text-neutral-500 dark:text-zinc-400">
        {description}
      </p>
    </header>
  );
}

export function DocsSection({
  title,
  children,
  id,
  className,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 space-y-4", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function DocsSubsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function DocsParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl text-base leading-7 text-neutral-700 dark:text-zinc-300">
      {children}
    </p>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.9em] text-neutral-950 dark:bg-zinc-900 dark:text-zinc-100">
      {children}
    </code>
  );
}

export function DocsCodeBlock({
  code,
  title,
  className,
}: {
  code: string;
  title?: string;
  className?: string;
}) {
  const displayCode = code.trimEnd();
  const lines = displayCode.split("\n");

  return (
    <div className={cn("space-y-2", className)}>
      {title ? (
        <div className="font-mono text-sm font-medium text-neutral-700 dark:text-zinc-300">
          {title}
        </div>
      ) : null}
      <div className="group/code relative overflow-hidden rounded-md border border-zinc-800 bg-[#101116] shadow-[0_18px_44px_rgba(15,15,18,0.18)]">
        <CopyButton
          code={displayCode}
          className="absolute right-3 top-3 border-zinc-700 bg-zinc-900/80 opacity-0 backdrop-blur transition-opacity group-hover/code:opacity-100"
        />
        <pre className="overflow-x-auto p-5 pr-14 text-sm leading-6 text-zinc-100">
          <code className="table min-w-max font-mono">
            {lines.map((line, index) => (
              <span className="table-row" key={`${index}-${line}`}>
                <span className="table-cell w-8 select-none pr-5 text-right text-xs text-zinc-600">
                  {index + 1}
                </span>
                <span className="table-cell whitespace-pre text-zinc-100">
                  {line || " "}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
