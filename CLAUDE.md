# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start development server
npm run build            # Build (runs registry:build then next build)
npm run lint             # Run ESLint
npm run registry:build   # Regenerate public/r/ component registry JSON files
```

There are no tests in this project.

## Architecture

**VengeanceUI** is a Next.js-based documentation site and component registry for an animated React component library. It uses [Nextra](https://nextra.site/) for MDX-based documentation pages.

### Key directories

- `src/components/ui/` — The actual library components (animated, form, data display, etc.). These are the components users copy-paste into their projects.
- `src/components/docs/` — Demo/preview wrappers used in the documentation site only.
- `src/components/mine/landing-page/` — Components for the VengeanceUI landing page itself.
- `src/pages/docs/` — MDX files that become documentation pages via Nextra.
- `src/app/` — Next.js App Router pages (home, playground, templates).
- `src/scripts/build-registry.ts` — Scans `src/components/ui/` and generates `public/r/*.json` registry files (shadcn-style installable registry).
- `public/r/` — Auto-generated; do not edit manually. Regenerate with `npm run registry:build`.

### Routing

The project mixes two Next.js routing approaches:

- **App Router** (`src/app/`) — Home page, playground, templates.
- **Pages Router** (`src/pages/docs/`) — All documentation pages, powered by Nextra.

`theme.config.tsx` controls the Nextra docs theme (navbar, footer, sidebar).

### Component patterns

- **Styling:** Tailwind CSS v4 + CVA (class-variance-authority) for variant-based components. Use `cn()` from `@/lib/utils` (clsx + tailwind-merge).
- **Animation:** Framer Motion for declarative animations; GSAP for imperative/timeline animations; Three.js/R3F for 3D.
- **Dark mode:** `next-themes` with CSS custom properties defined in `src/app/globals.css`. Use `dark:` Tailwind prefix or CSS variables.
- **Heavy components:** Wrap in `dynamic(() => import(...), { ssr: false })` and provide a `<Skeleton>` fallback.
- **Path aliases:** `@/` maps to `src/` (configured in `tsconfig.json` and `components.json`).

### Adding a new UI component

1. Create `src/components/ui/your-component.tsx`.
2. Create `src/components/docs/your-component-demo.tsx` for the docs preview.
3. Create `src/pages/docs/your-component.mdx` using the existing MDX docs as a template.
4. Run `npm run registry:build` to add it to the registry.

### Package manager

Use **npm** for all commands. The repo contains multiple lock files (`bun.lock`, `pnpm-lock.yaml`, `package-lock.json`) — always use npm to keep `package-lock.json` as the source of truth.

### shadcn/ui configuration

The project uses shadcn's **new-york** style with **lucide** icons (see `components.json`). RSC is enabled. When adding shadcn components, use `npx shadcn@latest add <component>` — it will respect these settings automatically.

### Deployment

Deployed on **Vercel**. The project uses `@vercel/analytics` and `next-sitemap` for post-build sitemap generation.

### TypeScript & formatting

- TypeScript **strict mode** is enabled.
- There is **no Prettier config** — formatting is handled by ESLint (`next/core-web-vitals` + `next/typescript`). Do not add a Prettier config or reformat files beyond what ESLint enforces.

### MCP server

`src/scripts/mcp-server.ts` exposes an MCP (Model Context Protocol) server so AI assistants can browse and install components. See `MCP.md` for setup details.
