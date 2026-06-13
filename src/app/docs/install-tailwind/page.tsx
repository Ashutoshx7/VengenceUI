import type { Metadata } from "next";
import {
  DocsArticle,
  DocsCodeBlock,
  DocsHeader,
  DocsParagraph,
  DocsSection,
  DocsSubsection,
  InlineCode,
} from "@/components/docs/static-docs";

export const metadata: Metadata = {
  title: "Install Tailwind CSS",
  description: "Configure Tailwind CSS for Vengeance UI components in a Next.js project.",
  alternates: {
    canonical: "/docs/install-tailwind",
  },
};

export default function InstallTailwindPage() {
  return (
    <DocsArticle>
      <DocsHeader
        title="Install Tailwind CSS"
        description="Install Tailwind CSS with Next.js"
      />

      <DocsSection title="Tailwind CSS v4 Installation">
        <DocsSubsection title="Create your project">
          <DocsCodeBlock
            code={`npx create-next-app@latest my-project --typescript --eslint --app
cd my-project`}
          />
        </DocsSubsection>

        <DocsSubsection title="Install Tailwind CSS">
          <DocsCodeBlock code="npm install tailwindcss @tailwindcss/postcss" />
        </DocsSubsection>

        <DocsSubsection title="Create your CSS file">
          <DocsParagraph>
            Add the Tailwind import to your global CSS file.
          </DocsParagraph>
          <DocsCodeBlock
            title="app/globals.css"
            code={`@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-mono: "Geist Mono", monospace;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}`}
          />
        </DocsSubsection>

        <DocsSubsection title="Configure PostCSS">
          <DocsCodeBlock
            title="postcss.config.mjs"
            code={`const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`}
          />
        </DocsSubsection>

        <DocsSubsection title="Start your build process">
          <DocsCodeBlock code="npm run dev" />
        </DocsSubsection>

        <DocsSubsection title="Start using Tailwind">
          <DocsCodeBlock
            title="app/page.tsx"
            code={`export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}`}
          />
        </DocsSubsection>
      </DocsSection>

      <DocsSection title="Key differences in v4">
        <DocsParagraph>
          Tailwind v4 is CSS-first. Theme values can live in{" "}
          <InlineCode>@theme inline</InlineCode>, custom variants can live in CSS,
          and the PostCSS plugin is now <InlineCode>@tailwindcss/postcss</InlineCode>.
        </DocsParagraph>
      </DocsSection>
    </DocsArticle>
  );
}
