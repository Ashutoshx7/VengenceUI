"use client";

import dynamic from "next/dynamic";

const FALLBACK = () => (
  <div className="text-sm text-neutral-400 dark:text-zinc-400">Preview is unavailable for this component.</div>
);

const DEMO_LOADERS: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "bento-grid": () => import("@/registry/bento-grid").then((m) => ({ default: m.default })),
  "my-animated-button": () => import("@/registry/my-animated-button").then((m) => ({ default: m.default })),

  "animated-hero": () => import("@/components/docs/animated-hero").then((m) => ({ default: m.AnimatedHeroDemo })),
  "animated-number": () => import("@/components/docs/animated-number").then((m) => ({ default: m.AnimatedNumberDemo })),
  "flip-text": () => import("@/components/docs/Fliptext-examples/flip-text-demo").then((m) => ({ default: m.default })),
  "flip-fade-text": () => import("@/components/docs/flip-fade-text").then((m) => ({ default: m.FlipFadeTextDemo })),
  "liquid-text": () => import("@/components/docs/liquid-text").then((m) => ({ default: m.LiquidTextDemo })),
  "liquid-metal": () => import("@/components/docs/liquid-metal").then((m) => ({ default: m.LiquidMetalPreview })),

  "reveal-loader": () => import("@/components/docs/reveal-loader-demo").then((m) => ({ default: m.RevealLoaderDemo })),
  "social-flip-button": () => import("@/components/docs/social-flip-button").then((m) => ({ default: m.SocialFlipButtonDemo })),
  "line-hover-link": () => import("@/components/docs/line-hover-link").then((m) => ({ default: m.LineHoverLinkDemo })),
  "interactive-book": () => import("@/components/docs/interactive-book").then((m) => ({ default: m.InteractiveBookDemo })),
  "pixelated-image-trail": () => import("@/components/docs/pixelated-image-trail").then((m) => ({ default: m.default })),

  "expandable-bento-grid": () => import("@/components/docs/expandable-bento-grid").then((m) => ({ default: m.ExpandableBentoGridDemo })),
  "staggered-grid": () => import("@/components/docs/staggered-grid").then((m) => ({ default: m.StaggeredGridDemo })),
  "perspective-grid": () => import("@/components/docs/perspective-grid").then((m) => ({ default: m.PerspectiveGridDemo })),
  "glow-border-card": () => import("@/components/docs/glow-border-card").then((m) => ({ default: m.GlowBorderCardDemo })),
  "testimonials-card": () => import("@/components/docs/testimonials-card").then((m) => ({ default: m.TestimonialsCardDemo })),
  "folder-preview": () => import("@/components/docs/folder-preview").then((m) => ({ default: m.FolderPreviewDemo })),
  "glass-dock": () => import("@/components/docs/glass-dock").then((m) => ({ default: m.GlassDockDemo })),
  "masked-avatars": () => import("@/components/docs/masked-avatars").then((m) => ({ default: m.MaskedAvatarsDemo })),

  "logo-slider": () => import("@/components/docs/logo-slider").then((m) => ({ default: m.LogoSliderDemo })),
  "stacked-logos": () => import("@/components/docs/stacked-logos").then((m) => ({ default: m.StackedLogosDemo })),

  "light-lines": () => import("@/components/docs/light-lines").then((m) => ({ default: m.LightLinesDemo })),
  "liquid-ocean": () => import("@/components/docs/liquid-ocean").then((m) => ({ default: m.LiquidOceanDemo })),
};

export function DemoRenderer({ slug }: { slug: string }) {
  const loader = DEMO_LOADERS[slug];

  if (!loader) {
    return <FALLBACK />;
  }

  const Demo = dynamic(loader, {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center gap-2 text-neutral-400 dark:text-zinc-500">
        <div className="w-6 h-6 border-2 border-neutral-300 dark:border-zinc-700 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-medium">Loading preview…</span>
      </div>
    ),
  });

  return <Demo />;
}
