import {
  DocsArticle,
  DocsCodeBlock,
  DocsHeader,
  DocsParagraph,
  DocsSection,
  InlineCode,
} from "@/components/docs/static-docs";
import { PackageCommand } from "@/components/docs/package-command";
import { getShadcnAddCommand } from "@/lib/registry";

const addAnimatedRaysCommand = getShadcnAddCommand("animated-rays");

export default function CliPage() {
  return (
    <DocsArticle>
      <DocsHeader
        title="CLI"
        description="Installing Vengeance UI with the shadcn CLI"
      />

      <DocsSection title="Initialization">
        <DocsParagraph>
          Use the <InlineCode>init</InlineCode> command to initialize a new
          shadcn project before adding registry components.
        </DocsParagraph>

        <PackageCommand
          commands={{
            npm: "npx shadcn@latest init",
            pnpm: "pnpm dlx shadcn@latest init",
            yarn: "yarn dlx shadcn@latest init",
            bun: "bunx shadcn@latest init",
          }}
        />

        <DocsCodeBlock
          code={`Which style would you like to use? New York
Which color would you like to use as base color? Zinc
Do you want to use CSS variables for colors? yes`}
        />
      </DocsSection>

      <DocsSection title="Add components">
        <DocsParagraph>
          Use the <InlineCode>add</InlineCode> command with the Vengeance UI
          registry URL from any component page.
        </DocsParagraph>

        <PackageCommand
          commands={{
            npm: addAnimatedRaysCommand,
            pnpm: addAnimatedRaysCommand.replace(/^npx/, "pnpm dlx"),
            yarn: addAnimatedRaysCommand.replace(/^npx/, "yarn dlx"),
            bun: addAnimatedRaysCommand.replace(/^npx/, "bunx"),
          }}
        />

        <DocsCodeBlock
          code={`Usage: shadcn add [options] [components...]

add a component to your project

Arguments:
  components        the components to add or a url to the component.

Options:
  -y, --yes         skip confirmation prompt
  -o, --overwrite   overwrite existing files
  -c, --cwd <cwd>   the working directory
  -p, --path <path> the path to add the component to
  -h, --help        display help for command`}
        />
      </DocsSection>

      <DocsSection title="Monorepo">
        <DocsParagraph>
          In a monorepo, pass the workspace path with <InlineCode>-c</InlineCode>{" "}
          or <InlineCode>--cwd</InlineCode>.
        </DocsParagraph>
        <PackageCommand
          commands={{
            npm: "npx shadcn@latest add https://vengeance-ui-v2.vercel.app/r/animated-rays.json -c ./apps/web",
            pnpm: "pnpm dlx shadcn@latest add https://vengeance-ui-v2.vercel.app/r/animated-rays.json -c ./apps/web",
            yarn: "yarn dlx shadcn@latest add https://vengeance-ui-v2.vercel.app/r/animated-rays.json -c ./apps/web",
            bun: "bunx shadcn@latest add https://vengeance-ui-v2.vercel.app/r/animated-rays.json -c ./apps/web",
          }}
        />
      </DocsSection>

      <DocsSection title="Namespaced registry">
        <DocsParagraph>
          If you prefer short component names, add a registry alias to{" "}
          <InlineCode>components.json</InlineCode>.
        </DocsParagraph>
        <DocsCodeBlock
          title="components.json"
          code={`{
  "registries": {
    "@vengeanceui": "https://vengeance-ui-v2.vercel.app/r/{name}.json"
  }
}`}
        />
        <PackageCommand
          commands={{
            npm: "npx shadcn@latest add @vengeanceui/animated-rays",
            pnpm: "pnpm dlx shadcn@latest add @vengeanceui/animated-rays",
            yarn: "yarn dlx shadcn@latest add @vengeanceui/animated-rays",
            bun: "bunx shadcn@latest add @vengeanceui/animated-rays",
          }}
        />
      </DocsSection>
    </DocsArticle>
  );
}
