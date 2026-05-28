import {
  DocsArticle,
  DocsCodeBlock,
  DocsHeader,
  DocsParagraph,
  DocsSection,
  DocsSubsection,
} from "@/components/docs/static-docs";

export default function InstallNextjsPage() {
  return (
    <DocsArticle>
      <DocsHeader
        title="Install Next.js"
        description="Install Next.js with Create Next App"
      />

      <DocsSection title="Create a new project">
        <DocsCodeBlock code="npx create-next-app@latest my-app" />
      </DocsSection>

      <DocsSection title="On installation, you'll see the following prompts">
        <DocsCodeBlock
          code={`What is your project named? my-app
Would you like to use the recommended Next.js defaults?
  Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router, AGENTS.md
  No, reuse previous settings
  No, customize settings - Choose your own preferences

If you customize settings:
Would you like to use TypeScript? No / Yes
Which linter would you like to use? ESLint / Biome / None
Would you like to use React Compiler? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a src/ directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the import alias (@/* by default)? No / Yes`}
        />
      </DocsSection>

      <DocsSection title="Start the app">
        <DocsCodeBlock
          code={`cd my-app
npm run dev`}
        />
      </DocsSection>

      <DocsSubsection title="Recommended project shape">
        <DocsParagraph>
          Use the App Router, TypeScript, Tailwind CSS, and the default{" "}
          <span className="font-mono">@/*</span> import alias. That matches how
          Vengeance UI examples and registry components are written.
        </DocsParagraph>
      </DocsSubsection>
    </DocsArticle>
  );
}
