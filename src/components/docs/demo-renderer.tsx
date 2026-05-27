"use client";

import dynamic from "next/dynamic";

const FALLBACK = () => (
  <div className="text-sm text-neutral-400 dark:text-zinc-400">Preview is unavailable for this component.</div>
);

const LOADING = () => (
  <div className="flex flex-col items-center gap-2 text-neutral-400 dark:text-zinc-500">
    <div className="w-6 h-6 border-2 border-neutral-300 dark:border-zinc-700 border-t-transparent rounded-full animate-spin" />
    <span className="text-xs font-medium">Loading preview…</span>
  </div>
);

/**
 * Pre-build all dynamic components at module scope (not inside render).
 * This ensures each component is only resolved once and cached by Next.js,
 * rather than creating a new dynamic() wrapper on every render cycle.
 */
const DEMO_COMPONENTS: Record<string, React.ComponentType> = {
  "bento-grid": dynamic(() => import("@/registry/bento-grid").then((m) => ({ default: m.default })), { ssr: false, loading: LOADING }),
  "my-animated-button": dynamic(() => import("@/registry/my-animated-button").then((m) => ({ default: m.default })), { ssr: false, loading: LOADING }),
  "candy-button": dynamic(() => import("@/components/docs/candy-button-demo").then((m) => ({ default: m.CandyButtonDemo })), { ssr: false, loading: LOADING }),
  "pop-button": dynamic(() => import("@/components/docs/pop-button-demo").then((m) => ({ default: m.PopButtonDemo })), { ssr: false, loading: LOADING }),
  "creepy-button": dynamic(() => import("@/components/docs/creepy-button-demo").then((m) => ({ default: m.CreepyButtonDemo })), { ssr: false, loading: LOADING }),
  "corner-button": dynamic(() => import("@/components/docs/corner-button-demo").then((m) => ({ default: m.CornerButtonDemo })), { ssr: false, loading: LOADING }),
  "generate-button": dynamic(() => import("@/components/docs/generate-button-demo").then((m) => ({ default: m.GenerateButtonDemo })), { ssr: false, loading: LOADING }),
  "radial-glow-button": dynamic(() => import("@/components/docs/radial-glow-button-demo").then((m) => ({ default: m.RadialGlowButtonDemo })), { ssr: false, loading: LOADING }),

  "animated-rays": dynamic(() => import("@/components/docs/animated-rays").then((m) => ({ default: m.AnimatedRaysDemo })), { ssr: false, loading: LOADING }),
  "animated-number": dynamic(() => import("@/components/docs/animated-number").then((m) => ({ default: m.AnimatedNumberDemo })), { ssr: false, loading: LOADING }),
  "flip-text": dynamic(() => import("@/components/docs/Fliptext-examples/flip-text-demo").then((m) => ({ default: m.default })), { ssr: false, loading: LOADING }),
  "flip-fade-text": dynamic(() => import("@/components/docs/flip-fade-text").then((m) => ({ default: m.FlipFadeTextDemo })), { ssr: false, loading: LOADING }),
  "morph-text": dynamic(() => import("@/components/docs/morph-text-demo").then((m) => ({ default: m.MorphTextDemo })), { ssr: false, loading: LOADING }),
  "liquid-text": dynamic(() => import("@/components/docs/liquid-text").then((m) => ({ default: m.LiquidTextDemo })), { ssr: false, loading: LOADING }),
  "liquid-metal": dynamic(() => import("@/components/docs/liquid-metal").then((m) => ({ default: m.LiquidMetalPreview })), { ssr: false, loading: LOADING }),

  "reveal-loader": dynamic(() => import("@/components/docs/reveal-loader-demo").then((m) => ({ default: m.RevealLoaderDemo })), { ssr: false, loading: LOADING }),
  "social-flip-button": dynamic(() => import("@/components/docs/social-flip-button").then((m) => ({ default: m.SocialFlipButtonDemo })), { ssr: false, loading: LOADING }),
  "line-hover-link": dynamic(() => import("@/components/docs/line-hover-link").then((m) => ({ default: m.LineHoverLinkDemo })), { ssr: false, loading: LOADING }),
  "interactive-book": dynamic(() => import("@/components/docs/interactive-book").then((m) => ({ default: m.InteractiveBookDemo })), { ssr: false, loading: LOADING }),
  "pixelated-image-trail": dynamic(() => import("@/components/docs/pixelated-image-trail").then((m) => ({ default: m.default })), { ssr: false, loading: LOADING }),
  "interactive-keyboard": dynamic(() => import("@/components/docs/interactive-keyboard-demo").then((m) => ({ default: m.InteractiveKeyboardDemo })), { ssr: false, loading: LOADING }),
  "elastic-stack": dynamic(() => import("@/components/docs/elastic-stack-demo").then((m) => ({ default: m.ElasticStackDemo })), { ssr: false, loading: LOADING }),

  "expandable-bento-grid": dynamic(() => import("@/components/docs/expandable-bento-grid").then((m) => ({ default: m.ExpandableBentoGridDemo })), { ssr: false, loading: LOADING }),
  "staggered-grid": dynamic(() => import("@/components/docs/staggered-grid").then((m) => ({ default: m.StaggeredGridDemo })), { ssr: false, loading: LOADING }),
  "perspective-grid": dynamic(() => import("@/components/docs/perspective-grid").then((m) => ({ default: m.PerspectiveGridDemo })), { ssr: false, loading: LOADING }),
  "glow-border-card": dynamic(() => import("@/components/docs/glow-border-card").then((m) => ({ default: m.GlowBorderCardDemo })), { ssr: false, loading: LOADING }),
  "testimonials-card": dynamic(() => import("@/components/docs/testimonials-card").then((m) => ({ default: m.TestimonialsCardDemo })), { ssr: false, loading: LOADING }),
  "folder-preview": dynamic(() => import("@/components/docs/folder-preview").then((m) => ({ default: m.FolderPreviewDemo })), { ssr: false, loading: LOADING }),
  "glass-dock": dynamic(() => import("@/components/docs/glass-dock").then((m) => ({ default: m.GlassDockDemo })), { ssr: false, loading: LOADING }),
  "spotlight-navbar": dynamic(() => import("@/components/docs/spotlight-navbar-demo").then((m) => ({ default: m.SpotlightNavbarDemo })), { ssr: false, loading: LOADING }),
  "masked-avatars": dynamic(() => import("@/components/docs/masked-avatars").then((m) => ({ default: m.MaskedAvatarsDemo })), { ssr: false, loading: LOADING }),
  "agent-bento-grid": dynamic(() => import("@/components/docs/agent-bento-grid-demo").then((m) => ({ default: m.AgentBentoGridDemo })), { ssr: false, loading: LOADING }),
  "kinetic-text-loader": dynamic(() => import("@/components/docs/kinetic-text-loader-demo").then((m) => ({ default: m.KineticTextLoaderDemo })), { ssr: false, loading: LOADING }),
  "shared-tooltip-avatars": dynamic(() => import("@/components/docs/shared-tooltip-avatars-demo").then((m) => ({ default: m.SharedTooltipAvatarsDemo })), { ssr: false, loading: LOADING }),

  "cursor-card": dynamic(() => import("@/components/docs/cursor-card-demo").then((m) => ({ default: m.CursorCardDemo })), { ssr: false, loading: LOADING }),
  "logo-slider": dynamic(() => import("@/components/docs/logo-slider").then((m) => ({ default: m.LogoSliderDemo })), { ssr: false, loading: LOADING }),
  "stacked-logos": dynamic(() => import("@/components/docs/stacked-logos").then((m) => ({ default: m.StackedLogosDemo })), { ssr: false, loading: LOADING }),
  "image-reveal-list": dynamic(() => import("@/components/docs/image-reveal-list-demo").then((m) => ({ default: m.ImageRevealListDemo })), { ssr: false, loading: LOADING }),
  "faq-accordion": dynamic(() => import("@/components/docs/faq-accordion-demo").then((m) => ({ default: m.FaqAccordionDemo })), { ssr: false, loading: LOADING }),

  "light-lines": dynamic(() => import("@/components/docs/light-lines").then((m) => ({ default: m.LightLinesDemo })), { ssr: false, loading: LOADING }),
  "liquid-ocean": dynamic(() => import("@/components/docs/liquid-ocean").then((m) => ({ default: m.LiquidOceanDemo })), { ssr: false, loading: LOADING }),
  "twisting-ribbon": dynamic(() => import("@/components/docs/twisting-ribbon-demo").then((m) => ({ default: m.TwistingRibbonDemo })), { ssr: false, loading: LOADING }),
  "aurora-hero": dynamic(() => import("@/components/docs/aurora-hero-demo").then((m) => ({ default: m.AuroraHeroDemo })), { ssr: false, loading: LOADING }),
};

export function DemoRenderer({ slug }: { slug: string }) {
  const Demo = DEMO_COMPONENTS[slug];

  if (!Demo) {
    return <FALLBACK />;
  }

  return <Demo />;
}
