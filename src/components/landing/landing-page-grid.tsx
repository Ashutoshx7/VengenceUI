import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Command,
  Grid3X3,
  Layers2,
  MousePointer2,
  Sparkles,
  Terminal,
  Type,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PreviewKind =
  | "buttons"
  | "text"
  | "interactive"
  | "layout"
  | "marquee"
  | "background";

type LibraryFamily = {
  name: string;
  meta: string;
  href: string;
  icon: LucideIcon;
  preview: PreviewKind;
  items: Array<{
    name: string;
    href: string;
  }>;
};

const libraryFamilies: LibraryFamily[] = [
  {
    name: "Buttons",
    meta: "Hover, click, glow",
    href: "/components/my-animated-button",
    icon: MousePointer2,
    preview: "buttons",
    items: [
      { name: "Animated", href: "/components/my-animated-button" },
      { name: "Candy", href: "/components/candy-button" },
      { name: "Radial Glow", href: "/components/radial-glow-button" },
    ],
  },
  {
    name: "Text Motion",
    meta: "Flip, fade, morph",
    href: "/components/flip-text",
    icon: Type,
    preview: "text",
    items: [
      { name: "Flip Text", href: "/components/flip-text" },
      { name: "Liquid Text", href: "/components/liquid-text" },
      { name: "Morph Text", href: "/components/morph-text" },
    ],
  },
  {
    name: "Layout Systems",
    meta: "Cards and grids",
    href: "/components/staggered-grid",
    icon: Grid3X3,
    preview: "layout",
    items: [
      { name: "Staggered", href: "/components/staggered-grid" },
      { name: "Agent Bento", href: "/components/agent-bento-grid" },
      { name: "Expandable", href: "/components/expandable-bento-grid" },
    ],
  },
  {
    name: "Interactive",
    meta: "Input driven",
    href: "/components/pixelated-image-trail",
    icon: Sparkles,
    preview: "interactive",
    items: [
      { name: "Pixel Trail", href: "/components/pixelated-image-trail" },
      { name: "Book", href: "/components/interactive-book" },
      { name: "Keyboard", href: "/components/interactive-keyboard" },
    ],
  },
  {
    name: "Tooltip Marquee",
    meta: "Micro motion",
    href: "/components/logo-slider",
    icon: Layers2,
    preview: "marquee",
    items: [
      { name: "Logo Slider", href: "/components/logo-slider" },
      { name: "Shared Tooltip", href: "/components/shared-tooltip-avatars" },
      { name: "Cursor Card", href: "/components/cursor-card" },
    ],
  },
  {
    name: "Scene Layers",
    meta: "Background motion",
    href: "/components/animated-rays",
    icon: Boxes,
    preview: "background",
    items: [
      { name: "Animated Rays", href: "/components/animated-rays" },
      { name: "Perspective", href: "/components/perspective-grid" },
      { name: "Light Lines", href: "/components/light-lines" },
    ],
  },
];

const stats = [
  { value: "46", label: "Components" },
  { value: "09", label: "Families" },
  { value: "CLI", label: "Ready" },
];

const quickPicks = [
  { name: "Glass Dock", href: "/components/glass-dock" },
  { name: "Spotlight Navbar", href: "/components/spotlight-navbar" },
  { name: "Folder Preview", href: "/components/folder-preview" },
  { name: "Kinetic Loader", href: "/components/kinetic-text-loader" },
];

function StaticPreview({ kind }: { kind: PreviewKind }) {
  if (kind === "buttons") {
    return (
      <div className="flex h-full items-center justify-center gap-2 px-3">
        <span className="preview-shine relative overflow-hidden rounded-md border bg-background px-3 py-2 text-[10px] font-medium text-foreground">
          Hover
        </span>
        <span className="preview-glow rounded-md border border-cyan-300/50 px-3 py-2 text-[10px] font-semibold text-white shadow-[0_14px_30px_-24px_rgba(34,211,238,0.85)]">
          Glow
        </span>
        <span className="rounded-md border bg-foreground/90 px-3 py-2 text-[10px] font-medium text-background shadow-[0_4px_0_rgba(113,113,122,0.22)]">
          Press
        </span>
      </div>
    );
  }

  if (kind === "text") {
    return (
      <div className="flex h-full items-center justify-between px-5">
        <span className="font-orbitron text-lg font-semibold tracking-normal text-foreground">
          FLIP
        </span>
        <span className="h-9 w-px bg-border" />
        <span className="bg-linear-to-r from-foreground via-muted-foreground to-foreground bg-clip-text font-orbitron text-lg font-semibold tracking-normal text-transparent">
          MORPH
        </span>
      </div>
    );
  }

  if (kind === "layout") {
    return (
      <div className="grid h-full grid-cols-5 grid-rows-3 gap-1.5 p-3">
        <span className="col-span-2 row-span-2 rounded-sm border bg-background/80" />
        <span className="col-span-3 rounded-sm border bg-background/60" />
        <span className="col-span-1 rounded-sm border bg-muted/70" />
        <span className="col-span-2 row-span-2 rounded-sm border bg-foreground/80" />
        <span className="col-span-3 rounded-sm border bg-background/60" />
      </div>
    );
  }

  if (kind === "interactive") {
    return (
      <div className="relative h-full overflow-hidden">
        <span className="absolute left-5 top-5 size-10 rounded-md border bg-background" />
        <span className="absolute right-6 top-6 size-12 rounded-md border bg-muted/55" />
        <span className="absolute bottom-5 left-1/2 size-10 -translate-x-1/2 rounded-md border bg-background" />
        <span className="absolute left-8 top-9 h-px w-32 origin-left rotate-[16deg] bg-border" />
        <span className="preview-cursor absolute left-[57%] top-[44%] size-2 rounded-full bg-foreground" />
      </div>
    );
  }

  if (kind === "marquee") {
    return (
      <div className="flex h-full flex-col justify-center gap-3 overflow-hidden px-3">
        <div className="preview-marquee flex w-max gap-2">
          {["Logo", "Tooltip", "Cursor", "Avatar", "Slider", "Logo"].map(
            (item, index) => (
              <span
                className="rounded-md border bg-background px-2.5 py-1 text-[10px] text-muted-foreground"
                key={`${item}-${index}`}
              >
                {item}
              </span>
            )
          )}
        </div>
        <span className="preview-pop ml-12 w-fit rounded-md border bg-foreground px-2.5 py-1 text-[10px] text-background">
          shared preview
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden">
      <span className="absolute inset-x-4 top-1/2 h-px bg-border" />
      <span className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px bg-border" />
      <span className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-sm border" />
      <span className="preview-ray absolute left-1/2 top-1/2 h-px w-24 origin-left bg-linear-to-r from-foreground/45 to-transparent" />
      <span className="preview-ray preview-ray-delay absolute left-1/2 top-1/2 h-px w-20 origin-left bg-linear-to-r from-cyan-400/60 to-transparent" />
    </div>
  );
}

function PreviewCell({
  family,
  index,
}: {
  family: LibraryFamily;
  index: number;
}) {
  const Icon = family.icon;

  return (
    <div className="group flex min-h-[204px] flex-col border-b border-r bg-background/35 p-4 transition-colors hover:bg-muted/15 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md border bg-background/70 text-muted-foreground">
            <Icon className="size-3.5" />
          </span>
          <div>
            <Link
              className="font-orbitron text-sm font-medium tracking-normal text-foreground"
              href={family.href}
            >
              {family.name}
            </Link>
            <p className="mt-1 text-[11px] text-muted-foreground">
              {family.meta}
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <Link
        className="mt-4 block h-[76px] overflow-hidden rounded-md border bg-muted/10 transition-colors group-hover:bg-muted/25"
        href={family.href}
      >
        <StaticPreview kind={family.preview} />
      </Link>

      <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-4 text-[11px] text-muted-foreground">
        {family.items.map((item, itemIndex) => (
          <span className="inline-flex items-center gap-x-2" key={item.name}>
            <Link
              className="transition-colors hover:text-foreground"
              href={item.href}
            >
              {item.name}
            </Link>
            {itemIndex < family.items.length - 1 ? (
              <span className="text-border" aria-hidden="true">
                /
              </span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}

function IntroBand() {
  return (
    <div className="grid gap-8 border-b px-4 py-10 md:px-8 md:py-14 lg:grid-cols-[1fr_420px] lg:items-end xl:grid-cols-[1fr_480px]">
      <div>
        <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
          Explore
        </p>
        <h2 className="mt-4 max-w-2xl font-orbitron text-3xl font-semibold leading-tight tracking-normal text-foreground md:text-4xl">
          Browse by interaction.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
          A compact index for motion, layout, feedback, and scene layers. Static
          previews keep the landing page light while the links stay close.
        </p>
      </div>

      <div className="space-y-3">
        <div className="grid gap-2 rounded-lg border bg-card/35 p-2 dark:bg-white/[0.02] sm:grid-cols-[auto_1fr_auto] sm:items-center">
          <span className="flex size-8 items-center justify-center rounded-md border bg-background/70 text-muted-foreground">
            <Command className="size-3.5" />
          </span>
          <code className="min-w-0 truncate px-1 font-mono text-xs text-muted-foreground">
            npx shadcn@latest add @vengeanceui/[component]
          </code>
          <Link
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border bg-background px-3 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            href="/docs/cli"
          >
            CLI
            <ArrowUpRight className="size-3" />
          </Link>
        </div>
        <div className="grid grid-cols-3 overflow-hidden rounded-lg border bg-background/35">
          {stats.map((stat) => (
            <div className="border-r px-3 py-2.5 last:border-r-0" key={stat.label}>
              <p className="font-orbitron text-sm font-semibold leading-none tracking-normal text-foreground">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[10px] leading-none text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewMatrix() {
  return (
    <div className="grid border-b md:grid-cols-2 lg:grid-cols-3">
      {libraryFamilies.map((family, index) => (
        <PreviewCell family={family} index={index} key={family.name} />
      ))}
    </div>
  );
}

function QuickPicks() {
  return (
    <div className="grid gap-3 px-4 py-3.5 md:grid-cols-[auto_1fr] md:items-center md:px-8">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-normal text-muted-foreground">
        <Terminal className="size-3.5" />
        Quick picks
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {quickPicks.map((item) => (
          <Link
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            href={item.href}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function LandingPageGrid() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.18] dark:opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background to-transparent" />

      <div className="relative">
        <IntroBand />
        <PreviewMatrix />
        <QuickPicks />
      </div>

      <style>{`
        @keyframes preview-shine {
          from { transform: translateX(-130%) skewX(-18deg); }
          to { transform: translateX(220%) skewX(-18deg); }
        }

        @keyframes preview-glow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes preview-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes preview-pop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes preview-cursor {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -7px); }
        }

        @keyframes preview-ray {
          from { transform: rotate(0deg); opacity: 0.18; }
          50% { opacity: 0.58; }
          to { transform: rotate(360deg); opacity: 0.18; }
        }

        .preview-shine::after {
          content: "";
          position: absolute;
          inset: -20% auto -20% 0;
          width: 32px;
          background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.72), transparent);
          animation: preview-shine 4s ease-in-out infinite;
        }

        .preview-glow {
          background: radial-gradient(circle at 50% 100%, #22d3ee, #0f172a 68%);
          background-size: 160% 160%;
          animation: preview-glow 5.5s ease-in-out infinite;
        }

        .preview-marquee { animation: preview-marquee 14s linear infinite; }
        .preview-pop { animation: preview-pop 4.6s ease-in-out infinite; }
        .preview-cursor { animation: preview-cursor 3.8s ease-in-out infinite; }
        .preview-ray { animation: preview-ray 15s linear infinite; }
        .preview-ray-delay { animation-delay: -5.5s; }

        @media (prefers-reduced-motion: reduce) {
          .preview-shine::after,
          .preview-glow,
          .preview-marquee,
          .preview-pop,
          .preview-cursor,
          .preview-ray {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
