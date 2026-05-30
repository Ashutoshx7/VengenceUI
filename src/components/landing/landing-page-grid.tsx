import "@/app/landing-grid.css";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  Code2,
  Command,
  FileText,
  Flag,
  Grid3X3,
  Heart,
  ImageIcon,
  Layers2,
  MessageCircle,
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
    name: "Button Kit",
    meta: "Hover, glow, press",
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
    name: "Motion Type",
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
    name: "Bento Layouts",
    meta: "Grid, bento, stack",
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
    name: "Input Effects",
    meta: "Cursor, trail, keys",
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
    name: "Tooltip Rails",
    meta: "Tooltip + marquee",
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
    name: "Scene Fields",
    meta: "Rays, grids, lines",
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

function InteractionBuilderCell({
  buttonsFamily,
  interactiveFamily,
}: {
  buttonsFamily: LibraryFamily;
  interactiveFamily: LibraryFamily;
}) {
  const checks = ["CLI install", "Preview state", "Dark ready"];

  return (
    <div className="group relative z-20 flex min-h-[492px] flex-col border-b bg-card/30 p-4 transition-colors hover:bg-muted/10 dark:bg-background/45 md:border-r lg:row-span-2 lg:min-h-0 lg:border-r">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md border bg-background/70 text-muted-foreground">
            <MousePointer2 className="size-3.5" />
          </span>
          <div>
            <p className="font-orbitron text-sm font-medium tracking-normal text-foreground">
              Button Forge
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Buttons + input trails
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          01/03
        </span>
      </div>

      <div className="motion-panel relative mt-4 flex min-h-[356px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-muted/55 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] dark:border-white/[0.07] dark:bg-[#06070a] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.9),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.04))] dark:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.075),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.006))] dark:block" />
        <span className="absolute inset-x-[-22%] top-1/2 h-px bg-zinc-400/35 dark:bg-white/[0.055]" />

        <div className="motion-island relative h-[91%] max-h-[340px] w-[94%] max-w-[480px] overflow-hidden rounded-[2.35rem] border border-white/75 bg-[#f4f4f4] shadow-[0_24px_72px_-42px_rgba(24,24,27,0.62),inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/[0.08] dark:bg-[#0f1013] dark:shadow-[0_24px_72px_-48px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.045)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.028)_1px,transparent_1px)] bg-[size:58px_58px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)]" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-zinc-300/45 dark:bg-white/[0.045]" />
          <div className="absolute inset-x-0 top-[30%] h-px bg-zinc-300/35 dark:bg-white/[0.045]" />
          <div className="absolute left-[-8%] top-[42%] h-32 w-20 rounded-r-2xl border border-zinc-300/45 bg-white/30 dark:border-white/[0.055] dark:bg-white/[0.014]" />
          <div className="absolute right-[-8%] top-[36%] h-28 w-20 rounded-l-2xl border border-zinc-300/45 bg-white/30 dark:border-white/[0.055] dark:bg-white/[0.014]" />
          <div className="absolute left-1/2 top-[35%] h-24 w-60 -translate-x-1/2 rounded-t-[1.45rem] border border-zinc-300/45 bg-white/28 dark:border-white/[0.055] dark:bg-white/[0.014]" />
          <div className="absolute bottom-[-10%] left-1/2 h-24 w-32 -translate-x-1/2 rounded-t-[1.7rem] border border-zinc-300/55 bg-white/28 dark:border-white/[0.055] dark:bg-white/[0.014]" />

          <div className="generator-prompt absolute inset-x-[12%] top-[8%] z-30 flex h-10 items-center gap-1.5 rounded-full border border-white/95 bg-white/95 py-1 pl-4 pr-1.5 shadow-[0_16px_30px_-22px_rgba(24,24,27,0.72),0_2px_0_rgba(24,24,27,0.08)] dark:border-white/[0.08] dark:bg-[#07080b]/90 dark:shadow-[0_16px_36px_-30px_rgba(0,0,0,1)]">
            <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap font-mono text-[7.5px] text-zinc-800 dark:text-zinc-300 sm:text-[8.5px]">
              Vengeance hover button set
            </span>
            <span className="motion-caret h-3 w-px bg-cyan-400/80" />
            <Link
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background shadow-[0_10px_24px_-14px_rgba(24,24,27,0.55)] dark:shadow-[0_10px_24px_-14px_rgba(255,255,255,0.32)]"
              href={buttonsFamily.href}
              title="Generate"
            >
              <Sparkles className="size-3.5" />
            </Link>
          </div>

          <div className="generator-browser absolute bottom-[14%] left-[53%] top-[35%] z-10 w-[69%] -translate-x-1/2 rounded-[1.45rem] border border-white/85 bg-white/64 shadow-[0_22px_52px_-38px_rgba(24,24,27,0.72),inset_0_1px_0_rgba(255,255,255,0.84)] backdrop-blur-sm dark:border-white/[0.07] dark:bg-black/28 dark:shadow-[0_22px_52px_-40px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.035)]">
            <div className="absolute left-5 top-4 flex gap-1.5">
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-white/15" />
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-white/15" />
              <span className="size-2 rounded-full bg-zinc-300 dark:bg-white/15" />
            </div>
            <Search className="absolute right-5 top-4 size-4 text-zinc-500 dark:text-zinc-500" />
            <div className="absolute right-5 top-[39%] grid gap-2">
              <span className="generator-mini block h-9 w-[5.1rem] rounded-lg border border-white/80 bg-white/88 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.025]" />
              <span className="generator-mini generator-mini-b block h-9 w-[5.1rem] rounded-lg border border-white/80 bg-white/88 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.025]" />
            </div>
          </div>

          <Link
            className="generator-card absolute bottom-[10%] left-[29%] z-30 flex h-[52%] w-[39%] flex-col rounded-[1.35rem] border border-white/90 bg-white/90 p-4 shadow-[0_24px_54px_-36px_rgba(24,24,27,0.78),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-[#07080b]/82 dark:shadow-[0_24px_54px_-38px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.045)]"
            href={interactiveFamily.href}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_80%_0%,rgba(96,165,250,0.42),transparent_24%),radial-gradient(circle_at_0%_30%,rgba(251,113,133,0.32),transparent_26%),radial-gradient(circle_at_0%_80%,rgba(251,146,60,0.28),transparent_24%)] opacity-60 dark:opacity-28" />
            <span className="relative ml-auto flex size-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 dark:border-white/[0.08] dark:bg-white/[0.045]">
              <span className="size-4 rounded-full border-4 border-zinc-300 border-t-zinc-500 dark:border-white/[0.1] dark:border-t-white/35" />
            </span>
            <span className="relative mt-1 max-w-[7rem] text-[13px] font-semibold leading-[0.95] text-zinc-950 dark:text-zinc-50 sm:text-sm">
              Component brief
            </span>
            <div className="relative mt-3 space-y-1.5">
              {checks.map((check) => (
                <span className="flex items-center gap-2" key={check}>
                  <Check className="size-3.5 text-emerald-500 dark:text-emerald-300/70" />
                  <span className="h-1.5 w-16 rounded-full bg-zinc-300/75 dark:bg-white/[0.09]" />
                </span>
              ))}
            </div>
            <span className="relative mt-auto inline-flex h-8 items-center justify-center rounded-full border border-zinc-300 bg-zinc-200/80 font-mono text-[10px] text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors hover:bg-zinc-300/80 dark:border-white/[0.08] dark:bg-white/[0.07] dark:text-zinc-200 dark:hover:bg-white/[0.1]">
              Open kit
            </span>
          </Link>
        </div>
      </div>

      <div className="mt-4 grid gap-3 text-[11px] text-muted-foreground sm:grid-cols-2">
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground dark:bg-white/[0.015]"
          href={buttonsFamily.href}
        >
          <span className="font-orbitron text-xs text-foreground">
            {buttonsFamily.name}
          </span>
          <span className="mt-1 block">{buttonsFamily.meta}</span>
        </Link>
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground dark:bg-white/[0.015]"
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
      className: "text-sky-500 dark:text-cyan-200/75",
    },
    {
      icon: Sparkles,
      label: "Morph",
      href: textFamily.items[2].href,
      className: "text-violet-500 dark:text-violet-200/70",
    },
    {
      icon: Layers2,
      label: "Tip",
      href: marqueeFamily.items[1].href,
      className: "text-orange-500 dark:text-amber-200/70",
    },
    {
      icon: Zap,
      label: "Cursor",
      href: marqueeFamily.items[2].href,
      className: "text-cyan-500 dark:text-cyan-200/70",
    },
    {
      icon: Music2,
      label: "Slider",
      href: marqueeFamily.items[0].href,
      className: "text-emerald-500 dark:text-emerald-200/70",
    },
  ];

  return (
    <div className="group relative z-20 flex min-h-[492px] flex-col border-b bg-card/30 p-4 transition-colors hover:bg-muted/10 dark:bg-background/45 lg:row-span-2 lg:min-h-0 lg:border-x">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md border bg-background/70 text-muted-foreground">
            <Layers2 className="size-3.5" />
          </span>
          <div>
            <p className="font-orbitron text-sm font-medium tracking-normal text-foreground">
              Motion Kernel
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Type + tooltip signals
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          02/03
        </span>
      </div>

      <div className="motion-panel relative mt-4 flex min-h-[352px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-muted/55 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] dark:border-white/[0.07] dark:bg-[#06070a] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.72),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.02))] dark:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.065),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.006))] dark:block" />
        <span className="absolute inset-x-[-22%] top-1/2 h-px bg-zinc-400/35 dark:bg-white/[0.055]" />

        <div className="motion-island relative h-[91%] max-h-[336px] w-[92%] max-w-[430px] overflow-hidden rounded-[2.75rem] border border-white/80 bg-[#f3f3f3] shadow-[0_24px_72px_-42px_rgba(24,24,27,0.56),inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/[0.08] dark:bg-[#0f1013] dark:shadow-[0_24px_72px_-48px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.045)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.03)_1px,transparent_1px)] bg-[size:58px_58px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)]" />
          <div className="absolute inset-y-0 left-[20%] w-px bg-zinc-300/55 dark:bg-white/[0.05]" />
          <div className="absolute inset-y-0 left-[36%] w-px bg-zinc-300/45 dark:bg-white/[0.04]" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-300/62 dark:bg-white/[0.05]" />
          <div className="absolute left-1/2 top-[-10%] h-20 w-28 -translate-x-1/2 rounded-b-[1.7rem] border border-zinc-300/50 bg-white/24 dark:border-white/[0.055] dark:bg-white/[0.014]" />
          <div className="absolute bottom-[-10%] left-1/2 h-20 w-28 -translate-x-1/2 rounded-t-[1.7rem] border border-zinc-300/50 bg-white/24 dark:border-white/[0.055] dark:bg-white/[0.014]" />
          <div className="absolute left-1/2 top-[16%] h-28 w-32 -translate-x-1/2 rounded-[1.55rem] border border-zinc-300/50 bg-white/24 shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] dark:border-white/[0.055] dark:bg-white/[0.014]">
            <span className="absolute left-8 top-1/2 h-1.5 w-10 -translate-y-1/2 rounded-full bg-zinc-300/85 dark:bg-white/[0.08]" />
            <span className="absolute left-8 top-[59%] h-1 w-20 rounded-full bg-zinc-200/80 dark:bg-white/[0.045]" />
          </div>
          <div className="absolute bottom-[13%] left-1/2 h-28 w-32 -translate-x-1/2 rounded-[1.55rem] border border-zinc-300/50 bg-white/24 shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] dark:border-white/[0.055] dark:bg-white/[0.014]">
            <span className="absolute left-8 top-[58%] h-1.5 w-10 rounded-full bg-zinc-300/85 dark:bg-white/[0.08]" />
            <span className="absolute left-8 top-[67%] h-1 w-20 rounded-full bg-zinc-200/80 dark:bg-white/[0.045]" />
          </div>

          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-zinc-300/80 dark:text-white/[0.11]"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              className="motion-path"
              d="M0 50H40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path motion-path-b"
              d="M60 50C69 50 68 23 80 23"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path motion-path-c"
              d="M60 50C69 50 68 37 80 37"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path"
              d="M60 50H100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path motion-path-b"
              d="M60 50C69 50 68 63 80 63"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="motion-path motion-path-c"
              d="M60 50C69 50 68 77 80 77"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
          </svg>

          <div className="motion-rail absolute left-[6%] top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-3 rounded-full border border-zinc-200 bg-white/90 p-2.5 shadow-[0_18px_46px_-30px_rgba(24,24,27,0.68)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-[#050608]/88 dark:shadow-[0_18px_46px_-32px_rgba(0,0,0,1)]">
            {[Grid3X3, Heart, Timer, Music2].map((Icon, index) => (
              <span
                className={`flex size-8 items-center justify-center rounded-full text-zinc-500 transition-colors dark:text-zinc-400 ${
                  index === 2
                    ? "bg-zinc-200 text-zinc-700 shadow-sm dark:bg-white/[0.08] dark:text-zinc-200"
                    : ""
                }`}
                key={index}
              >
                <Icon className="size-3.5" />
              </span>
            ))}
            <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-background shadow-[0_12px_30px_-16px_rgba(24,24,27,0.7)] dark:shadow-[0_12px_30px_-16px_rgba(255,255,255,0.38)]">
              <Plus className="size-4" />
            </span>
          </div>

          <MousePointer2 className="absolute left-[15%] top-[51%] z-40 size-6 fill-zinc-950 text-zinc-950 dark:fill-zinc-100 dark:text-zinc-100" />

          <div className="absolute left-[22%] top-[55%] z-40 rounded-md border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-900 shadow-lg dark:border-white/[0.08] dark:bg-[#050608] dark:text-zinc-200">
            VUI
          </div>

          <div className="motion-core absolute left-1/2 top-1/2 z-30 flex size-28 items-center justify-center rounded-[1.75rem] border border-white/90 bg-white shadow-[0_24px_60px_-34px_rgba(24,24,27,0.72),inset_0_1px_0_rgba(255,255,255,0.96)] dark:border-white/[0.075] dark:bg-[#141519] dark:shadow-[0_24px_60px_-38px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="absolute left-1/2 top-1/2 size-[6.35rem] -translate-x-1/2 -translate-y-1/2 rounded-full">
              <div className="motion-core-ring size-full rounded-full bg-[conic-gradient(from_145deg,transparent_0_24%,#93c5fd_36%,#a5b4fc_50%,#f9a8d4_64%,#fde68a_72%,transparent_86%)] opacity-82 dark:opacity-60" />
            </div>
            <Link
              className="relative flex size-[5.4rem] items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 font-mono text-[10px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_26px_-18px_rgba(0,0,0,0.75)]"
              href={textFamily.href}
            >
              indexing...
              <span className="motion-caret ml-0.5 h-3 w-px bg-cyan-300" />
            </Link>
          </div>

          <div className="absolute right-[18%] top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3">
            {rightNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <Link
                  className="motion-node flex size-12 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_18px_45px_-32px_rgba(24,24,27,0.68)] transition-transform hover:-translate-y-0.5 dark:border-white/[0.08] dark:bg-[#050608]/88 dark:shadow-[0_18px_45px_-32px_rgba(0,0,0,1)]"
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
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground dark:bg-white/[0.015]"
          href={textFamily.href}
        >
          <span className="font-orbitron text-xs text-foreground">
            {textFamily.name}
          </span>
          <span className="mt-1 block">{textFamily.meta}</span>
        </Link>
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground dark:bg-white/[0.015]"
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

function SystemActionPill({
  icon: Icon,
  label,
  href,
  className,
  iconClassName,
  delay = "0s",
}: {
  icon: LucideIcon;
  label: string;
  href: string;
  className: string;
  iconClassName: string;
  delay?: string;
}) {
  return (
    <Link
      className={`system-action absolute z-30 flex h-10 items-center gap-2 rounded-lg border border-white/85 bg-white/88 px-2.5 pr-4 font-mono text-[9px] text-zinc-800 shadow-[0_14px_36px_-28px_rgba(24,24,27,0.72),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-sm transition-transform hover:-translate-y-0.5 dark:border-white/[0.075] dark:bg-[#06070a]/88 dark:text-zinc-300 dark:shadow-[0_14px_36px_-30px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.045)] ${className}`}
      href={href}
      style={{ animationDelay: delay }}
    >
      <span
        className={`relative flex size-7 shrink-0 items-center justify-center rounded-md border bg-white shadow-sm dark:bg-white/[0.035] ${iconClassName}`}
      >
        <Icon className="size-3.5" />
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </Link>
  );
}

function SystemComposerCell({
  layoutFamily,
  scenesFamily,
}: {
  layoutFamily: LibraryFamily;
  scenesFamily: LibraryFamily;
}) {
  return (
    <div className="group relative z-20 flex min-h-[492px] flex-col border-b bg-card/30 p-4 transition-colors hover:bg-muted/10 dark:bg-background/45 lg:row-span-2 lg:min-h-0">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md border bg-background/70 text-muted-foreground">
            <Grid3X3 className="size-3.5" />
          </span>
          <div>
            <p className="font-orbitron text-sm font-medium tracking-normal text-foreground">
              Registry Composer
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Layouts + install paths
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          03/03
        </span>
      </div>

      <div className="motion-panel relative mt-4 flex min-h-[352px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-muted/55 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] dark:border-white/[0.07] dark:bg-[#06070a] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.9),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.03))] dark:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.075),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.024),rgba(255,255,255,0.006))] dark:block" />

        <div className="system-island relative h-[91%] max-h-[336px] w-[92%] max-w-[430px] overflow-hidden rounded-[2.75rem] border border-white/80 bg-[#f4f4f4] shadow-[0_24px_72px_-42px_rgba(24,24,27,0.56),inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/[0.08] dark:bg-[#0f1013] dark:shadow-[0_24px_72px_-48px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.045)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.028)_1px,transparent_1px)] bg-[size:62px_62px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)]" />
          <span className="absolute inset-y-0 left-1/2 w-px border-l border-dashed border-zinc-300/62 dark:border-white/[0.07]" />
          <span className="absolute inset-x-0 top-[34%] border-t border-dashed border-zinc-300/58 dark:border-white/[0.07]" />
          <span className="absolute inset-x-0 top-[55%] border-t border-dashed border-zinc-300/48 dark:border-white/[0.055]" />
          <div className="absolute left-1/2 top-[13%] h-16 w-28 -translate-x-1/2 rounded-b-[1.6rem] border border-zinc-300/50 bg-white/26 dark:border-white/[0.055] dark:bg-white/[0.014]" />
          <div className="absolute bottom-[-8%] left-1/2 h-20 w-28 -translate-x-1/2 rounded-t-[1.7rem] border border-zinc-300/50 bg-white/24 dark:border-white/[0.055] dark:bg-white/[0.014]" />
          <div className="absolute left-[-8%] top-[33%] h-28 w-24 rounded-r-[1.4rem] border border-zinc-300/48 bg-white/22 dark:border-white/[0.055] dark:bg-white/[0.014]" />
          <div className="absolute right-[-8%] top-[33%] h-28 w-24 rounded-l-[1.4rem] border border-zinc-300/48 bg-white/22 dark:border-white/[0.055] dark:bg-white/[0.014]" />

          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-zinc-300/80 dark:text-white/[0.11]"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              className="system-path"
              d="M0 33H30C38 33 36 50 47 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="system-path system-path-b"
              d="M0 55H30C38 55 36 50 47 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="system-path system-path-c"
              d="M0 68H30C39 68 36 50 47 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="system-path"
              d="M53 50C64 50 62 33 100 33"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="system-path system-path-b"
              d="M53 50C64 50 62 55 100 55"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <path
              className="system-path system-path-c"
              d="M53 50C64 50 62 68 100 68"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
          </svg>

          <SystemActionPill
            className="left-[-3%] top-[25%]"
            delay="-0.4s"
            href={scenesFamily.href}
            icon={MessageCircle}
            iconClassName="border-zinc-200 text-zinc-500 dark:border-white/[0.08] dark:text-zinc-300"
            label="Choose layer"
          />
          <SystemActionPill
            className="left-[8%] top-[43%]"
            delay="-1.1s"
            href={layoutFamily.href}
            icon={ImageIcon}
            iconClassName="border-sky-200 text-sky-500 dark:border-cyan-300/15 dark:text-cyan-300/75"
            label="Compose card"
          />
          <SystemActionPill
            className="left-[-4%] top-[62%]"
            delay="-1.8s"
            href="/docs/cli"
            icon={Code2}
            iconClassName="border-zinc-200 text-zinc-500 dark:border-white/[0.08] dark:text-zinc-300"
            label="Copy CLI"
          />

          <SystemActionPill
            className="right-[-4%] top-[25%]"
            delay="-0.8s"
            href={layoutFamily.href}
            icon={Flag}
            iconClassName="border-zinc-200 text-zinc-500 dark:border-white/[0.08] dark:text-zinc-300"
            label="Map layout"
          />
          <SystemActionPill
            className="right-[9%] top-[43%]"
            delay="-1.5s"
            href={scenesFamily.items[0].href}
            icon={FileText}
            iconClassName="border-zinc-200 text-zinc-500 dark:border-white/[0.08] dark:text-zinc-300"
            label="Preview scene"
          />
          <SystemActionPill
            className="right-[-3%] top-[62%]"
            delay="-2.2s"
            href={layoutFamily.items[0].href}
            icon={BarChart3}
            iconClassName="border-sky-200 text-sky-500 dark:border-cyan-300/15 dark:text-cyan-300/75"
            label="Ship ready"
          />

          <Link
            className="system-card absolute left-1/2 top-1/2 z-40 flex h-[60%] w-[30%] min-w-[118px] max-w-[142px] flex-col rounded-[1.55rem] border border-white/90 bg-white/92 p-3 shadow-[0_28px_64px_-42px_rgba(24,24,27,0.8),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-[#07080b]/82 dark:shadow-[0_28px_64px_-44px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.045)]"
            href={layoutFamily.href}
          >
            <span className="system-gradient relative block h-[45%] overflow-hidden rounded-[1.15rem] border border-white/80 bg-[radial-gradient(circle_at_18%_18%,#818cf8,transparent_36%),radial-gradient(circle_at_86%_16%,#fed7aa,transparent_42%),linear-gradient(135deg,#7dd3fc,#f9a8d4_52%,#fcd34d)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] dark:border-white/[0.07] dark:opacity-65" />
            <span className="mt-4 block h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-white/[0.09]" />
            <span className="mt-2 block h-1.5 w-full rounded-full bg-zinc-200 dark:bg-white/[0.055]" />
            <span className="mt-1.5 block h-1.5 w-[88%] rounded-full bg-zinc-200 dark:bg-white/[0.055]" />
            <span className="mt-auto inline-flex h-8 items-center justify-center rounded-full bg-foreground font-mono text-[10px] text-background shadow-[0_14px_30px_-20px_rgba(24,24,27,0.68)] transition-colors hover:bg-foreground/90 dark:shadow-[0_14px_30px_-20px_rgba(255,255,255,0.28)]">
              Install
            </span>
          </Link>
        </div>
      </div>

      <div className="mt-3 grid gap-3 text-[11px] text-muted-foreground sm:grid-cols-2">
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground dark:bg-white/[0.015]"
          href={layoutFamily.href}
        >
          <span className="font-orbitron text-xs text-foreground">
            {layoutFamily.name}
          </span>
          <span className="mt-1 block">{layoutFamily.meta}</span>
        </Link>
        <Link
          className="rounded-md border bg-background/45 px-3 py-2 transition-colors hover:border-foreground/20 hover:text-foreground dark:bg-white/[0.015]"
          href={scenesFamily.href}
        >
          <span className="font-orbitron text-xs text-foreground">
            {scenesFamily.name}
          </span>
          <span className="mt-1 block">{scenesFamily.meta}</span>
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
          Library map
        </p>
        <h2 className="mt-4 max-w-2xl font-orbitron text-3xl font-semibold leading-tight tracking-normal text-foreground md:text-4xl">
          Build with Vengeance UI.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
          Three focused paths for component discovery: forge the interaction,
          tune the motion, then ship it through the registry.
        </p>
      </div>

      <div className="space-y-3">
        <div className="grid gap-2 rounded-lg border bg-card/30 p-2 dark:border-white/[0.07] dark:bg-white/[0.012] sm:grid-cols-[auto_1fr_auto] sm:items-center">
          <span className="flex size-8 items-center justify-center rounded-md border bg-background/70 text-muted-foreground dark:border-white/[0.07] dark:bg-white/[0.018]">
            <Command className="size-3.5" />
          </span>
          <code className="min-w-0 truncate px-1 font-mono text-xs text-muted-foreground">
            npx shadcn@latest add @vengeanceui/[component]
          </code>
          <Link
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border bg-background px-3 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground dark:border-white/[0.07] dark:bg-white/[0.018]"
            href="/docs/cli"
          >
            CLI
            <ArrowUpRight className="size-3" />
          </Link>
        </div>
        <div className="grid grid-cols-3 overflow-hidden rounded-lg border bg-background/30 dark:border-white/[0.07] dark:bg-white/[0.012]">
          {stats.map((stat) => (
            <div className="border-r px-3 py-2.5 last:border-r-0 dark:border-white/[0.07]" key={stat.label}>
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
      className="pointer-events-none absolute inset-0 z-[15] hidden h-full w-full overflow-visible text-sky-500/20 dark:text-cyan-300/16 lg:block"
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
    <div className="relative grid border-b md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[270px_270px]">
      <FlowLayer />
      <InteractionBuilderCell
        buttonsFamily={buttons}
        interactiveFamily={interactive}
      />
      <MotionHubCell textFamily={textMotion} marqueeFamily={tooltipMarquee} />
      <SystemComposerCell layoutFamily={layout} scenesFamily={scenes} />
    </div>
  );
}

function QuickPicks() {
  return (
    <div className="grid gap-3 px-4 py-3.5 md:grid-cols-[auto_1fr] md:items-center md:px-8">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-normal text-muted-foreground">
        <Terminal className="size-3.5" />
        Registry picks
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
    <div className="relative overflow-hidden bg-background text-foreground dark:bg-[#050608]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.14] dark:opacity-[0.075]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background to-transparent" />

      <div className="relative">
        <IntroBand />
        <PreviewMatrix />
        <QuickPicks />
      </div>
    </div>
  );
}
