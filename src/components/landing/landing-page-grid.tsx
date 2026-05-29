import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Check,
  Command,
  Grid3X3,
  Heart,
  Layers2,
  Music2,
  MousePointer2,
  Plus,
  Search,
  Sparkles,
  Terminal,
  Timer,
  Type,
  Zap,
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
  className = "",
}: {
  family: LibraryFamily;
  index: number;
  className?: string;
}) {
  const Icon = family.icon;

  return (
    <div
      className={`group relative z-10 flex min-h-[224px] flex-col border-b bg-background/35 p-4 transition-colors hover:bg-muted/15 ${className}`}
    >
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

function InteractionBuilderCell({
  buttonsFamily,
  interactiveFamily,
}: {
  buttonsFamily: LibraryFamily;
  interactiveFamily: LibraryFamily;
}) {
  const checks = ["Hover states", "Input trails", "Theme ready"];

  return (
    <div className="group relative z-20 flex min-h-[492px] flex-col border-b bg-background/40 p-4 transition-colors hover:bg-muted/15 md:border-r lg:row-span-2 lg:min-h-0 lg:border-r">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md border bg-background/70 text-muted-foreground">
            <MousePointer2 className="size-3.5" />
          </span>
          <div>
            <p className="font-orbitron text-sm font-medium tracking-normal text-foreground">
              Interaction Builder
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Buttons + input driven
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          01/04
        </span>
      </div>

      <div className="motion-panel relative mt-4 flex min-h-[356px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-zinc-300/75 bg-[#dddddd] text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] dark:border-white/10 dark:bg-[#171719] dark:text-zinc-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.9),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.04))] dark:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.13),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] dark:block" />
        <span className="absolute inset-x-[-22%] top-1/2 h-px bg-zinc-400/45 dark:bg-white/10" />

        <div className="motion-island relative h-[91%] max-h-[340px] w-[94%] max-w-[480px] overflow-hidden rounded-[2.35rem] border border-white/75 bg-[#f4f4f4] shadow-[0_24px_72px_-42px_rgba(24,24,27,0.72),inset_0_1px_0_rgba(255,255,255,0.92)] dark:border-white/12 dark:bg-[#202124] dark:shadow-[0_24px_72px_-44px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.03)_1px,transparent_1px)] bg-[size:58px_58px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.052)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-zinc-300/55 dark:bg-white/8" />
          <div className="absolute inset-x-0 top-[30%] h-px bg-zinc-300/45 dark:bg-white/8" />
          <div className="absolute left-[-8%] top-[42%] h-32 w-20 rounded-r-2xl border border-zinc-300/55 bg-white/38 dark:border-white/8 dark:bg-white/[0.03]" />
          <div className="absolute right-[-8%] top-[36%] h-28 w-20 rounded-l-2xl border border-zinc-300/55 bg-white/38 dark:border-white/8 dark:bg-white/[0.03]" />
          <div className="absolute left-1/2 top-[35%] h-24 w-60 -translate-x-1/2 rounded-t-[1.45rem] border border-zinc-300/55 bg-white/36 dark:border-white/8 dark:bg-white/[0.03]" />
          <div className="absolute bottom-[-10%] left-1/2 h-24 w-32 -translate-x-1/2 rounded-t-[1.7rem] border border-zinc-300/65 bg-white/34 dark:border-white/9 dark:bg-white/[0.03]" />

          <div className="generator-prompt absolute inset-x-[12%] top-[8%] z-30 flex h-10 items-center gap-1.5 rounded-full border border-white/95 bg-white/95 py-1 pl-4 pr-1.5 shadow-[0_16px_30px_-22px_rgba(24,24,27,0.78),0_2px_0_rgba(24,24,27,0.08)] dark:border-white/12 dark:bg-zinc-950/84 dark:shadow-[0_16px_36px_-28px_rgba(0,0,0,1)]">
            <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap font-mono text-[7.5px] text-zinc-800 dark:text-zinc-100 sm:text-[8.5px]">
              Business gradient landing page
            </span>
            <span className="motion-caret h-3 w-px bg-blue-500" />
            <Link
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_10px_24px_-14px_rgba(59,130,246,0.9)]"
              href={buttonsFamily.href}
              title="Generate"
            >
              <Sparkles className="size-3.5" />
            </Link>
          </div>

          <div className="generator-browser absolute bottom-[14%] left-[53%] top-[35%] z-10 w-[69%] -translate-x-1/2 rounded-[1.45rem] border border-white/85 bg-white/64 shadow-[0_22px_52px_-38px_rgba(24,24,27,0.82),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/36 dark:shadow-[0_22px_52px_-38px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="absolute left-5 top-4 flex gap-1.5">
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-white/15" />
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-white/15" />
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-white/15" />
            </div>
            <Search className="absolute right-5 top-4 size-4 text-zinc-500 dark:text-zinc-500" />
            <div className="absolute right-5 top-[39%] grid gap-2">
              <span className="generator-mini block h-9 w-[5.1rem] rounded-lg border border-white/80 bg-white/88 shadow-sm dark:border-white/10 dark:bg-white/[0.055]" />
              <span className="generator-mini generator-mini-b block h-9 w-[5.1rem] rounded-lg border border-white/80 bg-white/88 shadow-sm dark:border-white/10 dark:bg-white/[0.055]" />
            </div>
          </div>

          <Link
            className="generator-card absolute bottom-[10%] left-[29%] z-30 flex h-[52%] w-[39%] flex-col rounded-[1.35rem] border border-white/90 bg-white/90 p-4 shadow-[0_24px_54px_-36px_rgba(24,24,27,0.85),inset_0_1px_0_rgba(255,255,255,0.94)] backdrop-blur-sm dark:border-white/12 dark:bg-zinc-950/76 dark:shadow-[0_24px_54px_-36px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.08)]"
            href={interactiveFamily.href}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_80%_0%,rgba(96,165,250,0.5),transparent_24%),radial-gradient(circle_at_0%_30%,rgba(251,113,133,0.42),transparent_26%),radial-gradient(circle_at_0%_80%,rgba(251,146,60,0.38),transparent_24%)] opacity-70 dark:opacity-55" />
            <span className="relative ml-auto flex size-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-white/8">
              <span className="size-4 rounded-full border-4 border-zinc-300 border-t-zinc-500 dark:border-white/16 dark:border-t-white/45" />
            </span>
            <span className="relative mt-1 max-w-[7rem] text-[13px] font-semibold leading-[0.95] text-zinc-950 dark:text-zinc-50 sm:text-sm">
              About your project
            </span>
            <div className="relative mt-3 space-y-1.5">
              {checks.map((check) => (
                <span className="flex items-center gap-2" key={check}>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="h-1.5 w-16 rounded-full bg-zinc-300/80 dark:bg-white/16" />
                </span>
              ))}
            </div>
            <span className="relative mt-auto inline-flex h-8 items-center justify-center rounded-full border border-zinc-300 bg-zinc-200/80 font-mono text-[10px] text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors hover:bg-zinc-300/80 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/16">
              Generate
            </span>
          </Link>
        </div>
      </div>

      <div className="mt-4 grid gap-3 text-[11px] text-muted-foreground sm:grid-cols-2">
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground"
          href={buttonsFamily.href}
        >
          <span className="font-orbitron text-xs text-foreground">
            {buttonsFamily.name}
          </span>
          <span className="mt-1 block">{buttonsFamily.meta}</span>
        </Link>
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground"
          href={interactiveFamily.href}
        >
          <span className="font-orbitron text-xs text-foreground">
            {interactiveFamily.name}
          </span>
          <span className="mt-1 block">{interactiveFamily.meta}</span>
        </Link>
      </div>
    </div>
  );
}

function MotionHubCell({
  textFamily,
  marqueeFamily,
}: {
  textFamily: LibraryFamily;
  marqueeFamily: LibraryFamily;
}) {
  const rightNodes = [
    {
      icon: Type,
      label: "Flip",
      href: textFamily.items[0].href,
      className: "text-blue-500",
    },
    {
      icon: Sparkles,
      label: "Morph",
      href: textFamily.items[2].href,
      className: "text-fuchsia-500",
    },
    {
      icon: Layers2,
      label: "Tip",
      href: marqueeFamily.items[1].href,
      className: "text-orange-500",
    },
    {
      icon: Zap,
      label: "Cursor",
      href: marqueeFamily.items[2].href,
      className: "text-cyan-500",
    },
    {
      icon: Music2,
      label: "Slider",
      href: marqueeFamily.items[0].href,
      className: "text-emerald-500",
    },
  ];

  return (
    <div className="group relative z-20 flex min-h-[492px] flex-col border-b bg-background/40 p-4 transition-colors hover:bg-muted/15 lg:row-span-2 lg:min-h-0 lg:border-x">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md border bg-background/70 text-muted-foreground">
            <Layers2 className="size-3.5" />
          </span>
          <div>
            <p className="font-orbitron text-sm font-medium tracking-normal text-foreground">
              Motion Hub
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Text motion + micro feedback
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          02/05
        </span>
      </div>

      <div className="motion-panel relative mt-4 flex min-h-[326px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-zinc-300/75 bg-[#dedede] text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] dark:border-white/10 dark:bg-[#151516] dark:text-zinc-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.82),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.03))] dark:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_48%_36%,rgba(255,255,255,0.1),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] dark:block" />
        <span className="absolute inset-x-[-22%] top-1/2 h-px bg-zinc-400/45 dark:bg-white/10" />

        <div className="motion-island relative h-[86%] max-h-[306px] w-[88%] max-w-[410px] overflow-hidden rounded-[2.15rem] border border-white/70 bg-[#f2f2f2] shadow-[0_24px_72px_-40px_rgba(24,24,27,0.72),inset_0_1px_0_rgba(255,255,255,0.88)] dark:border-white/12 dark:bg-[#202123] dark:shadow-[0_24px_72px_-44px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.035)_1px,transparent_1px)] bg-[size:58px_58px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.052)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
          <div className="absolute inset-y-0 left-[20%] w-px bg-zinc-300/75 dark:bg-white/10" />
          <div className="absolute inset-y-0 left-[36%] w-px bg-zinc-300/60 dark:bg-white/9" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-300/80 dark:bg-white/10" />
          <div className="absolute left-1/2 top-[-10%] h-20 w-28 -translate-x-1/2 rounded-b-[1.7rem] border border-zinc-300/70 bg-white/30 dark:border-white/8 dark:bg-white/[0.025]" />
          <div className="absolute bottom-[-10%] left-1/2 h-20 w-28 -translate-x-1/2 rounded-t-[1.7rem] border border-zinc-300/70 bg-white/30 dark:border-white/8 dark:bg-white/[0.025]" />
          <div className="absolute left-1/2 top-[18%] h-24 w-28 -translate-x-1/2 rounded-2xl border border-zinc-300/70 bg-white/34 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)] dark:border-white/9 dark:bg-white/[0.03]">
            <span className="absolute left-7 top-1/2 h-1 w-9 -translate-y-1/2 rounded-full bg-zinc-300 dark:bg-white/14" />
            <span className="absolute left-7 top-[58%] h-1 w-16 rounded-full bg-zinc-200 dark:bg-white/8" />
          </div>
          <div className="absolute bottom-[15%] left-1/2 h-24 w-28 -translate-x-1/2 rounded-2xl border border-zinc-300/70 bg-white/34 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)] dark:border-white/9 dark:bg-white/[0.03]">
            <span className="absolute left-7 top-[58%] h-1 w-9 rounded-full bg-zinc-300 dark:bg-white/14" />
            <span className="absolute left-7 top-[66%] h-1 w-16 rounded-full bg-zinc-200 dark:bg-white/8" />
          </div>

          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-zinc-300/95 dark:text-white/14"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              className="motion-path"
              d="M0 50H48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path motion-path-b"
              d="M64 50C70 50 69 25 78 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path motion-path-c"
              d="M64 50C70 50 69 38 78 38"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path"
              d="M64 50H100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path motion-path-b"
              d="M64 50C70 50 69 62 78 62"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path motion-path-c"
              d="M64 50C70 50 69 75 78 75"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
          </svg>

          <div className="motion-rail absolute left-[11%] top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2.5 rounded-full border border-zinc-200 bg-white/86 p-2 shadow-[0_18px_46px_-30px_rgba(24,24,27,0.72)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-[0_18px_46px_-30px_rgba(0,0,0,1)]">
            {[Grid3X3, Heart, Timer, Music2].map((Icon, index) => (
              <span
                className={`flex size-7 items-center justify-center rounded-full text-zinc-500 transition-colors ${
                  index === 2
                    ? "bg-zinc-200 text-zinc-700 shadow-sm dark:bg-white/12 dark:text-zinc-100"
                    : "dark:text-zinc-500"
                }`}
                key={index}
              >
                <Icon className="size-3.5" />
              </span>
            ))}
            <span className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_12px_30px_-16px_rgba(59,130,246,0.9)]">
              <Plus className="size-4" />
            </span>
          </div>

          <div className="absolute left-[34%] top-[55%] z-30 rounded-md border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-900 shadow-lg dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100">
            UI8
          </div>

          <div className="motion-core absolute left-[58%] top-1/2 z-30 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.45rem] border border-white/90 bg-white shadow-[0_22px_52px_-32px_rgba(24,24,27,0.78),inset_0_1px_0_rgba(255,255,255,1)] dark:border-white/12 dark:bg-[#25262a] dark:shadow-[0_22px_52px_-34px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.1)]">
            <div className="motion-core-ring absolute inset-2 rounded-[1.35rem] bg-[conic-gradient(from_120deg,transparent_0_33%,#60a5fa_42%,#7c3aed_54%,#fb7185_68%,transparent_78%)] opacity-95" />
            <Link
              className="relative flex size-[4.5rem] items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 font-mono text-[10px] text-white shadow-inner"
              href={textFamily.href}
            >
              thinking...
              <span className="motion-caret ml-0.5 h-3 w-px bg-cyan-300" />
            </Link>
          </div>

          <div className="absolute right-[11%] top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2.5">
            {rightNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <Link
                  className="motion-node flex size-11 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_18px_45px_-32px_rgba(24,24,27,0.74)] transition-transform hover:-translate-y-0.5 dark:border-white/10 dark:bg-zinc-950/88 dark:shadow-[0_18px_45px_-30px_rgba(0,0,0,1)]"
                  href={node.href}
                  key={node.label}
                  style={{ animationDelay: `${index * -0.55}s` }}
                  title={node.label}
                >
                  <Icon className={`size-4 ${node.className}`} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-3 text-[11px] text-muted-foreground sm:grid-cols-2">
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground"
          href={textFamily.href}
        >
          <span className="font-orbitron text-xs text-foreground">
            {textFamily.name}
          </span>
          <span className="mt-1 block">{textFamily.meta}</span>
        </Link>
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground"
          href={marqueeFamily.href}
        >
          <span className="font-orbitron text-xs text-foreground">
            {marqueeFamily.name}
          </span>
          <span className="mt-1 block">{marqueeFamily.meta}</span>
        </Link>
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

function FlowLayer() {
  const dataPath =
    "M6 50 H82 C96 50 96 100 114 100 H150 C174 100 174 50 208 50 H294 C280 50 280 150 260 150 H208 C174 150 174 100 150 100 C126 100 126 150 92 150 H6";

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[15] hidden h-full w-full overflow-visible text-sky-500/24 dark:text-sky-300/26 lg:block"
      preserveAspectRatio="none"
      viewBox="0 0 300 200"
    >
      <g
        className="flow-network"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="0.42"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M6 50 H82 C96 50 96 100 114 100 H150" />
        <path d="M150 100 C174 100 174 50 208 50 H294" />
        <path d="M150 100 C174 100 174 150 208 150 H294" />
        <path d="M150 100 C126 100 126 150 92 150 H6" />
        <path d={dataPath} className="flow-route" />
      </g>
      <g className="flow-points" fill="currentColor">
        {[0, -1.4, -2.8].map((delay) => (
          <circle className="flow-dot" key={delay} r="1.35">
            <animateMotion
              begin={`${delay}s`}
              dur="7.2s"
              path={dataPath}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  );
}

function PreviewMatrix() {
  const [buttons, textMotion, layout, interactive, tooltipMarquee, scenes] =
    libraryFamilies;

  return (
    <div className="relative grid border-b md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[258px_258px]">
      <FlowLayer />
      <InteractionBuilderCell
        buttonsFamily={buttons}
        interactiveFamily={interactive}
      />
      <MotionHubCell textFamily={textMotion} marqueeFamily={tooltipMarquee} />
      <PreviewCell className="md:border-r lg:border-r-0" family={layout} index={2} />
      <PreviewCell className="lg:border-b-0" family={scenes} index={5} />
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

        @keyframes motion-core-ring {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.04); }
          to { transform: rotate(360deg) scale(1); }
        }

        @keyframes motion-caret {
          0%, 42% { opacity: 1; }
          43%, 100% { opacity: 0; }
        }

        @keyframes motion-node {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes motion-path {
          0%, 100% { opacity: 0.34; stroke-dashoffset: 0; }
          50% { opacity: 0.85; stroke-dashoffset: -10; }
        }

        @keyframes motion-core {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -51.5%) scale(1.015); }
        }

        @keyframes motion-island {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes flow-route {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -24; }
        }

        @keyframes flow-dot {
          0%, 100% { opacity: 0.18; }
          18%, 76% { opacity: 0.95; }
        }

        @keyframes generator-prompt {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes generator-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes generator-mini {
          0%, 100% { opacity: 0.74; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(-3px); }
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
        .motion-core-ring { animation: motion-core-ring 9s linear infinite; }
        .motion-caret { animation: motion-caret 1.05s steps(1) infinite; }
        .motion-node { animation: motion-node 4.5s ease-in-out infinite; }
        .motion-core { animation: motion-core 5.8s ease-in-out infinite; }
        .motion-island { animation: motion-island 7s ease-in-out infinite; }
        .motion-path {
          animation: motion-path 5.8s ease-in-out infinite;
          stroke-dasharray: 5 6;
          stroke-linecap: round;
        }
        .motion-path-b { animation-delay: -1.2s; }
        .motion-path-c { animation-delay: -2.4s; }
        .flow-network path { opacity: 0.34; }
        .flow-network .flow-route {
          animation: flow-route 7.2s linear infinite;
          opacity: 0.72;
          stroke-dasharray: 6 8;
        }
        .flow-dot {
          animation: flow-dot 7.2s ease-in-out infinite;
          filter: drop-shadow(0 0 6px currentColor);
        }
        .flow-points .flow-dot:nth-child(2) { animation-delay: -1.4s; }
        .flow-points .flow-dot:nth-child(3) { animation-delay: -2.8s; }
        .dark .flow-network path { opacity: 0.42; }
        .generator-prompt { animation: generator-prompt 6.8s ease-in-out infinite; }
        .generator-card { animation: generator-card 7.4s ease-in-out infinite; }
        .generator-mini { animation: generator-mini 5.4s ease-in-out infinite; }
        .generator-mini-b { animation-delay: -2.2s; }

        @media (prefers-reduced-motion: reduce) {
          .preview-shine::after,
          .preview-glow,
          .preview-marquee,
          .preview-pop,
          .preview-cursor,
          .preview-ray,
          .motion-core-ring,
          .motion-caret,
          .motion-node,
          .motion-core,
          .motion-island,
          .motion-path,
          .flow-network .flow-route,
          .flow-dot,
          .generator-prompt,
          .generator-card,
          .generator-mini {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
