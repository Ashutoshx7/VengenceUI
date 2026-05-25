import { LayoutGrid, MousePointerClick, Type, Sparkles, Layers, MousePointer2, Image, Library, Navigation } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ComponentItem {
  name: string;
  slug: string;
  description: string;
  componentName: string;
  isNew?: boolean;
}

export interface ComponentCategory {
  name: string;
  icon: LucideIcon;
  items: ComponentItem[];
}

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    name: "Buttons",
    icon: MousePointer2,
    items: [
      { name: "Animated Button", slug: "my-animated-button", description: "Animated CTA button with shine effect", componentName: "animated-button" },
      { name: "Social Flip Button", slug: "social-flip-button", description: "Social icon flip interaction", componentName: "social-flip-button", isNew: true },
      { name: "Liquid Metal", slug: "liquid-metal", description: "Metallic fluid shader effect", componentName: "liquid-metal", isNew: true },
      { name: "Creepy Button", slug: "creepy-button", description: "Button with tracking eyes", componentName: "creepy-button", isNew: true },
    ],
  },
  {
    name: "Text & Motion",
    icon: Type,
    items: [
      { name: "Animated Number", slug: "animated-number", description: "Smooth numeric transitions", componentName: "animated-number", isNew: true },
      { name: "Flip Text", slug: "flip-text", description: "Character flip text animation", componentName: "flip-text", isNew: true },
      { name: "Flip Fade Text", slug: "flip-fade-text", description: "Word flip and fade cycle", componentName: "flip-fade-text", isNew: true },
      { name: "Liquid Text", slug: "liquid-text", description: "Fluid displacement text effect", componentName: "liquid-text", isNew: true },
    ],
  },
  {
    name: "Interactive",
    icon: MousePointerClick,
    items: [
      { name: "Interactive Book", slug: "interactive-book", description: "3D page-flip style book", componentName: "interactive-book", isNew: true },
      { name: "Pixelated Image Trail", slug: "pixelated-image-trail", description: "Cursor trail image reveal", componentName: "pixelated-image-trail", isNew: true },
    ],
  },
  {
    name: "Layout & Cards",
    icon: LayoutGrid,
    items: [
      { name: "Expandable Bento Grid", slug: "expandable-bento-grid", description: "Interactive multi-panel bento", componentName: "expandable-bento-grid", isNew: true },
      { name: "Staggered Grid", slug: "staggered-grid", description: "Offset card grid composition", componentName: "staggered-grid", isNew: true },
      { name: "Glow Border Card", slug: "glow-border-card", description: "Card with animated glow border", componentName: "glow-border-card", isNew: true },
      { name: "Testimonials Card", slug: "testimonials-card", description: "Animated testimonial stack", componentName: "testimonials-card", isNew: true },
    ],
  },
  {
    name: "Tooltip & Marquee",
    icon: Layers,
    items: [
      { name: "Logo Slider", slug: "logo-slider", description: "Infinite logo marquee", componentName: "logo-slider", isNew: true },
      { name: "Stacked Logos", slug: "stacked-logos", description: "Overlapping brand logos", componentName: "stacked-logos", isNew: true },
      { name: "Masked Avatars", slug: "masked-avatars", description: "Stacked masked avatar list", componentName: "masked-avatars", isNew: true },
    ],
  },
  {
    name: "Navbar & Docs",
    icon: Navigation,
    items: [
      { name: "Glass Dock", slug: "glass-dock", description: "Mac-style floating dock", componentName: "glass-dock", isNew: true },
      { name: "Spotlight Navbar", slug: "spotlight-navbar", description: "Navbar with animated spotlight effect", componentName: "spotlight-navbar", isNew: true },
    ],
  },
  {
    name: "Collections",
    icon: Library,
    items: [
      { name: "Line Hover Link", slug: "line-hover-link", description: "Animated hover underline styles", componentName: "line-hover-link", isNew: true },
      { name: "Folder Preview", slug: "folder-preview", description: "Folder stack visual preview", componentName: "folder-preview", isNew: true },
    ],
  },
  {
    name: "Backgrounds",
    icon: Image,
    items: [
      { name: "Animated Hero", slug: "animated-hero", description: "Hero with animated heading", componentName: "animated-hero", isNew: true },
      { name: "Perspective Grid", slug: "perspective-grid", description: "3D perspective matrix background", componentName: "perspective-grid", isNew: true },
      { name: "Light Lines", slug: "light-lines", description: "Animated flowing line background", componentName: "light-lines", isNew: true },
      { name: "Liquid Ocean", slug: "liquid-ocean", description: "Animated ocean wave field", componentName: "liquid-ocean", isNew: true },
    ],
  },
];

export const COMPONENT_BY_SLUG = new Map(
  COMPONENT_CATEGORIES.flatMap((category) => category.items.map((item) => [item.slug, item] as const))
);
