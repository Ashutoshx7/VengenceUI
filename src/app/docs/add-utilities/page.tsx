import {
  DocsArticle,
  DocsCodeBlock,
  DocsHeader,
  DocsParagraph,
  DocsSection,
  DocsSubsection,
  InlineCode,
} from "@/components/docs/static-docs";

export default function AddUtilitiesPage() {
  return (
    <DocsArticle>
      <DocsHeader
        title="Add Utilities"
        description="Commonly used utilities for Vengeance UI"
      />

      <DocsSection title="Install dependencies">
        <DocsCodeBlock code="npm install clsx tailwind-merge framer-motion" />
      </DocsSection>

      <DocsSection title="Add util file">
        <DocsCodeBlock
          title="lib/utils.ts"
          code={`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
        />
      </DocsSection>

      <DocsSection title="Use the utility">
        <DocsParagraph>
          Use <InlineCode>cn</InlineCode> anywhere you need conditional classes
          that should still merge Tailwind conflicts cleanly.
        </DocsParagraph>
        <DocsCodeBlock
          title="components/example.tsx"
          code={`import { cn } from "@/lib/utils";

export function Example({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        "rounded-md border px-4 py-2 text-sm",
        active && "border-neutral-950 bg-neutral-950 text-white"
      )}
    >
      Vengeance UI
    </div>
  );
}`}
        />
      </DocsSection>

      <DocsSubsection title="Motion components">
        <DocsParagraph>
          Many animated components use <InlineCode>framer-motion</InlineCode>.
          Components that need a different dependency list still show the exact
          package command on their own component page.
        </DocsParagraph>
      </DocsSubsection>
    </DocsArticle>
  );
}
