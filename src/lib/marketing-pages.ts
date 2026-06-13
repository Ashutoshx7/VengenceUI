import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BookOpen,
  Boxes,
  CalendarDays,
  CheckCircle2,
  Code2,
  GitBranch,
  Inbox,
  Layers3,
  LifeBuoy,
  Mail,
  MessagesSquare,
  Newspaper,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UserRound,
  Zap,
} from "lucide-react";
import { GITHUB_REPO_URL } from "@/lib/github";
import { SITE_NAME } from "@/lib/site";

export type MarketingAction = {
  label: string;
  href: string;
  external?: boolean;
  icon?: LucideIcon;
};

export type MarketingStat = {
  value: string;
  label: string;
};

export type MarketingFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type MarketingDetail = {
  label: string;
  text: string;
};

export type MarketingPageData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: MarketingAction;
  secondaryAction?: MarketingAction;
  stats: MarketingStat[];
  featuresTitle: string;
  featuresDescription: string;
  features: MarketingFeature[];
  detailsTitle: string;
  detailsDescription: string;
  details: MarketingDetail[];
  timelineTitle: string;
  timeline: MarketingDetail[];
};

export const marketingPages = {
  blocks: {
    eyebrow: "Product",
    title: "Blocks for pages that need to ship with motion.",
    description:
      "Prebuilt sections for heroes, feature grids, CTAs, FAQs, contact flows, and other marketing surfaces. Use them as starting points, then swap copy and components to match your brand.",
    primaryAction: { label: "Browse templates", href: "/templates", icon: Layers3 },
    secondaryAction: { label: "Install with CLI", href: "/docs/cli", icon: TerminalSquare },
    stats: [
      { value: "80+", label: "registry entries" },
      { value: "9", label: "section families" },
      { value: "CLI", label: "copy flow" },
    ],
    featuresTitle: "What is included",
    featuresDescription:
      "The block registry is organized around the sections people actually reuse when building product pages.",
    features: [
      {
        title: "Hero and CTA sections",
        description: "Launch pages with strong first-screen layouts and clear conversion paths.",
        icon: Rocket,
      },
      {
        title: "Feature and content bands",
        description: "Explain products with dense, responsive sections that are easy to scan.",
        icon: Blocks,
      },
      {
        title: "Contact and FAQ flows",
        description: "Add practical support surfaces without leaving users on a dead page.",
        icon: MessagesSquare,
      },
    ],
    detailsTitle: "Block workflow",
    detailsDescription:
      "Blocks are meant to sit between raw primitives and full templates: enough structure to move fast, still flexible enough to make your own.",
    details: [
      { label: "Registry first", text: "Block source lives in the public registry so installs can stay predictable." },
      { label: "Responsive shell", text: "Layouts use fixed tracks, borders, and measured spacing for stable desktop and mobile screens." },
      { label: "Component-native", text: "Each block is composed from the same Vengeance UI primitives used across the docs." },
    ],
    timelineTitle: "Good starting points",
    timeline: [
      { label: "Hero sections", text: "Use a full first screen when a product needs a strong visual signal." },
      { label: "Feature sections", text: "Use compact feature bands when the audience is comparing capabilities." },
      { label: "CTA sections", text: "Use focused conversion blocks after proof, docs, or template previews." },
    ],
  },
  showcase: {
    eyebrow: "Product",
    title: "A quick tour of the interaction patterns.",
    description:
      "The showcase groups the components by how they feel in a real interface: motion buttons, hover previews, animated text, loaders, backgrounds, and layout systems.",
    primaryAction: { label: "Open components", href: "/components", icon: Boxes },
    secondaryAction: { label: "Read docs", href: "/docs", icon: BookOpen },
    stats: [
      { value: "50+", label: "components" },
      { value: "9", label: "categories" },
      { value: "Live", label: "previews" },
    ],
    featuresTitle: "Showcase focus",
    featuresDescription:
      "Each family is built around an interaction that can make a production page feel less flat.",
    features: [
      {
        title: "Cursor and hover effects",
        description: "Image trails, cursor cards, reveal lists, and animated links for richer browsing.",
        icon: Zap,
      },
      {
        title: "Animated copy",
        description: "Flip, fade, liquid, morphing, and numeric text treatments for product messaging.",
        icon: Sparkles,
      },
      {
        title: "Layouts with motion",
        description: "Bento grids, carousels, docks, navbars, and cards that hold up responsively.",
        icon: Layers3,
      },
    ],
    detailsTitle: "How to use it",
    detailsDescription:
      "Start from the showcase when you know the effect you want, then jump into the docs page for install commands and props.",
    details: [
      { label: "Preview", text: "Open a component to see the demo in the docs frame." },
      { label: "Install", text: "Use the CLI tab or manual install tab depending on your project setup." },
      { label: "Adapt", text: "Tune props, class names, and copy for the exact page you are building." },
    ],
    timelineTitle: "Recommended path",
    timeline: [
      { label: "Browse by category", text: "Find the interaction family that matches the section you are designing." },
      { label: "Inspect props", text: "Check the docs table so animation timing and behavior are explicit." },
      { label: "Ship lightly", text: "Use the smallest component that gives the page the motion it needs." },
    ],
  },
  changelog: {
    eyebrow: "Resources",
    title: "Changelog for the public component library.",
    description:
      "A compact record of what changed across the landing page, docs, registry, and component catalog.",
    primaryAction: { label: "View releases", href: "/releases", icon: Rocket },
    secondaryAction: { label: "Open GitHub", href: GITHUB_REPO_URL, external: true, icon: GitBranch },
    stats: [
      { value: "2026", label: "current cycle" },
      { value: "Docs", label: "tracked" },
      { value: "UI", label: "tracked" },
    ],
    featuresTitle: "Recent changes",
    featuresDescription:
      "The changelog keeps the site from feeling like a mystery box after a component or page moves.",
    features: [
      {
        title: "Landing navigation cleanup",
        description: "Footer destinations now resolve to real routes instead of empty placeholders.",
        icon: CheckCircle2,
      },
      {
        title: "Component index",
        description: "The component route now has a proper overview before users choose a specific component.",
        icon: Boxes,
      },
      {
        title: "Marketing pages",
        description: "Product, resource, company, and policy links now have enough content to stand on their own.",
        icon: Newspaper,
      },
    ],
    detailsTitle: "What gets tracked",
    detailsDescription:
      "This is intentionally practical: it records visible product changes and docs updates instead of every internal refactor.",
    details: [
      { label: "Components", text: "New demos, prop changes, install notes, and registry additions." },
      { label: "Pages", text: "Landing, templates, footer, policy, company, and resource page updates." },
      { label: "Docs", text: "CLI guidance, setup notes, and manual install improvements." },
    ],
    timelineTitle: "Timeline",
    timeline: [
      { label: "June 2026", text: "Added proper pages for footer routes and tightened the landing footer layout." },
      { label: "May 2026", text: "Expanded interactive components with newer carousel, keyboard, bento, and text effects." },
      { label: "April 2026", text: "Improved registry entries and component documentation sections." },
    ],
  },
  releases: {
    eyebrow: "Resources",
    title: "Release notes for stable drops.",
    description:
      "A release page for the parts of Vengeance UI that are ready to point people toward: component families, docs flows, and registry updates.",
    primaryAction: { label: "Open GitHub", href: GITHUB_REPO_URL, external: true, icon: GitBranch },
    secondaryAction: { label: "View changelog", href: "/changelog", icon: CalendarDays },
    stats: [
      { value: "Stable", label: "site routes" },
      { value: "Registry", label: "tracked" },
      { value: "Docs", label: "included" },
    ],
    featuresTitle: "Current release areas",
    featuresDescription:
      "Each release bucket points to a visible part of the library instead of a vague version label.",
    features: [
      {
        title: "Component catalog",
        description: "Public pages for every documented component and a new overview route.",
        icon: Boxes,
      },
      {
        title: "Template library",
        description: "Portfolio templates with screenshots, live URLs, and source links.",
        icon: Layers3,
      },
      {
        title: "Registry blocks",
        description: "JSON registry entries for page sections, primitives, and demos.",
        icon: Code2,
      },
    ],
    detailsTitle: "Release policy",
    detailsDescription:
      "The library favors small stable drops. A route should not be linked from the landing page unless it has enough context to be useful.",
    details: [
      { label: "Public routes", text: "Footer and navbar links should resolve before a release is considered ready." },
      { label: "Preview quality", text: "Demos should render without blank panels or missing assets." },
      { label: "Install path", text: "Docs should include either CLI or manual steps for reusable pieces." },
    ],
    timelineTitle: "Release stream",
    timeline: [
      { label: "Site polish", text: "Footer destinations, company pages, policy pages, and resource pages." },
      { label: "Component drops", text: "New motion, hover, layout, loader, and background components." },
      { label: "Template drops", text: "Portfolio templates with source and live previews." },
    ],
  },
  status: {
    eyebrow: "Resources",
    title: "Status for the public Vengeance UI site.",
    description:
      "A simple status surface for users checking whether the docs, component previews, registry files, and public pages are expected to work.",
    primaryAction: { label: "Open docs", href: "/docs", icon: BookOpen },
    secondaryAction: { label: "Report an issue", href: `${GITHUB_REPO_URL}/issues/new`, external: true, icon: LifeBuoy },
    stats: [
      { value: "OK", label: "docs" },
      { value: "OK", label: "registry" },
      { value: "OK", label: "site" },
    ],
    featuresTitle: "Current systems",
    featuresDescription:
      "This page is not connected to live monitoring yet, but it gives visitors a clear place to understand site health.",
    features: [
      {
        title: "Documentation",
        description: "Install pages, CLI guidance, component docs, and props tables are available.",
        icon: CheckCircle2,
      },
      {
        title: "Component previews",
        description: "Interactive demos are available through the component catalog routes.",
        icon: Sparkles,
      },
      {
        title: "Registry assets",
        description: "Public registry JSON files are available for components and reusable blocks.",
        icon: ShieldCheck,
      },
    ],
    detailsTitle: "Service notes",
    detailsDescription:
      "If a preview or install path breaks, GitHub issues are the fastest place to leave a reproducible report.",
    details: [
      { label: "Incident reports", text: "Include the route, viewport, theme, and browser when opening an issue." },
      { label: "Expected outages", text: "Major local redesign work should land with updated routes before the footer points to it." },
      { label: "Fallback", text: "When a live preview is unavailable, the docs page should still show install and usage code." },
    ],
    timelineTitle: "Operational checklist",
    timeline: [
      { label: "Public pages", text: "Landing footer links resolve to content pages." },
      { label: "Docs routes", text: "Documentation and component pages build under the App Router." },
      { label: "External routes", text: "GitHub and report links point to the project repository." },
    ],
  },
  about: {
    eyebrow: "Company",
    title: "Vengeance UI is built for expressive product interfaces.",
    description:
      "The project collects animated components, interaction patterns, and page sections for developers who want polished motion without starting every effect from scratch.",
    primaryAction: { label: "Explore components", href: "/components", icon: Boxes },
    secondaryAction: { label: "View GitHub", href: GITHUB_REPO_URL, external: true, icon: GitBranch },
    stats: [
      { value: "Open", label: "source" },
      { value: "Motion", label: "first" },
      { value: "Next", label: "ready" },
    ],
    featuresTitle: "What the project cares about",
    featuresDescription:
      "The library is tuned for interfaces that need personality, but still need predictable code and layouts.",
    features: [
      {
        title: "Motion with purpose",
        description: "Effects should help a page feel more alive without burying the message.",
        icon: Sparkles,
      },
      {
        title: "Practical docs",
        description: "Components include install paths, usage snippets, and prop details where they matter.",
        icon: BookOpen,
      },
      {
        title: "Reusable systems",
        description: "The same primitives support the landing page, docs, templates, and registry blocks.",
        icon: Boxes,
      },
    ],
    detailsTitle: "Project shape",
    detailsDescription:
      "Vengeance UI is small enough to stay opinionated and broad enough to cover real product page needs.",
    details: [
      { label: "Audience", text: "Frontend developers, indie builders, and teams designing interactive marketing pages." },
      { label: "Stack", text: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, and shader-driven effects." },
      { label: "Design tone", text: "Sharp, dark-friendly, technical, and built around clear motion states." },
    ],
    timelineTitle: "Principles",
    timeline: [
      { label: "No dead paths", text: "Public navigation should lead somewhere useful." },
      { label: "No mystery APIs", text: "Reusable pieces should expose practical props and examples." },
      { label: "No throwaway polish", text: "Visual details should survive responsive layouts." },
    ],
  },
  blog: {
    eyebrow: "Company",
    title: "Notes from building animated interfaces.",
    description:
      "A home for short product notes, implementation decisions, and design observations around Vengeance UI.",
    primaryAction: { label: "Read docs", href: "/docs", icon: BookOpen },
    secondaryAction: { label: "Follow on X", href: "https://x.com/Ashutosh_7x7", external: true, icon: MessagesSquare },
    stats: [
      { value: "Notes", label: "format" },
      { value: "UI", label: "topic" },
      { value: "Build", label: "focus" },
    ],
    featuresTitle: "Latest notes",
    featuresDescription:
      "The blog index now has real content instead of acting like a trapdoor in the footer.",
    features: [
      {
        title: "Designing a footer that does not lead to 404s",
        description: "A quick note on why every public navigation item needs either a page or a deliberate external target.",
        icon: Newspaper,
      },
      {
        title: "Choosing motion that earns its place",
        description: "A practical way to decide whether a hover effect, loader, or text animation belongs on a page.",
        icon: Sparkles,
      },
      {
        title: "Registry blocks versus full templates",
        description: "How reusable sections and complete templates serve different moments in the build process.",
        icon: Blocks,
      },
    ],
    detailsTitle: "Editorial lanes",
    detailsDescription:
      "Future posts can expand into individual article pages, but the index already explains what readers should expect.",
    details: [
      { label: "Build logs", text: "Notes about new components, docs polish, and template improvements." },
      { label: "Design notes", text: "Short thoughts on motion, hierarchy, density, and responsive behavior." },
      { label: "Release notes", text: "Human-readable summaries that complement the changelog." },
    ],
    timelineTitle: "Upcoming topics",
    timeline: [
      { label: "Motion budgets", text: "Keeping animated pages fast without making them feel lifeless." },
      { label: "Docs previews", text: "Making component examples more useful than screenshots." },
      { label: "Template anatomy", text: "Breaking down the choices inside a polished portfolio page." },
    ],
  },
  contact: {
    eyebrow: "Company",
    title: "Contact and support paths for the project.",
    description:
      "Use this page when you need to report a bug, suggest a component, ask about implementation, or follow the creator's updates.",
    primaryAction: { label: "Open an issue", href: `${GITHUB_REPO_URL}/issues/new`, external: true, icon: GitBranch },
    secondaryAction: { label: "Read docs first", href: "/docs", icon: BookOpen },
    stats: [
      { value: "GitHub", label: "bugs" },
      { value: "Docs", label: "setup" },
      { value: "X", label: "updates" },
    ],
    featuresTitle: "Best contact routes",
    featuresDescription:
      "Different questions need different context. These channels keep the signal clear.",
    features: [
      {
        title: "Bug reports",
        description: "Open a GitHub issue with the route, browser, viewport, theme, and reproduction steps.",
        icon: LifeBuoy,
      },
      {
        title: "Component ideas",
        description: "Share the interaction, expected API, and a visual reference if you have one.",
        icon: Inbox,
      },
      {
        title: "General updates",
        description: "Follow the public social channel for release notes, demos, and work-in-progress previews.",
        icon: MessagesSquare,
      },
    ],
    detailsTitle: "What to include",
    detailsDescription:
      "A crisp report is easier to fix. The fastest issues include what you expected, what happened, and where it happened.",
    details: [
      { label: "Route", text: "Example: /components/image-trail or /templates." },
      { label: "Environment", text: "Browser, OS, viewport width, and light or dark theme." },
      { label: "Evidence", text: "Screenshots, console errors, or the command that failed." },
    ],
    timelineTitle: "Channels",
    timeline: [
      { label: "GitHub Issues", text: "Best for bugs, missing docs, broken routes, and component requests." },
      { label: "Docs", text: "Best for setup, install, CLI usage, and component props." },
      { label: "X", text: "Best for quick updates and public progress notes." },
    ],
  },
  privacy: {
    eyebrow: "Company",
    title: "Privacy policy for Vengeance UI.",
    description:
      "A plain-language summary of how this public site treats visitor data. The project is a component library, not an account-based product.",
    primaryAction: { label: "Contact", href: "/contact", icon: Mail },
    secondaryAction: { label: "Back to docs", href: "/docs", icon: BookOpen },
    stats: [
      { value: "No", label: "accounts" },
      { value: "No", label: "payments" },
      { value: "Public", label: "repo" },
    ],
    featuresTitle: "Policy summary",
    featuresDescription:
      "This page exists so the footer policy link gives users a real answer instead of a 404.",
    features: [
      {
        title: "No user accounts",
        description: "Vengeance UI does not ask visitors to create an account to browse docs or components.",
        icon: UserRound,
      },
      {
        title: "No payment data",
        description: "The public site does not collect billing details or process purchases.",
        icon: ShieldCheck,
      },
      {
        title: "External platforms",
        description: "GitHub, Vercel, and social links may process data under their own policies.",
        icon: GitBranch,
      },
    ],
    detailsTitle: "Data practices",
    detailsDescription:
      "The site can still be served by hosting and analytics infrastructure, so this policy explains the practical boundaries.",
    details: [
      { label: "Site logs", text: "Hosting providers may keep standard request logs for security and reliability." },
      { label: "External links", text: "Leaving the site for GitHub, Vercel, or X means their policies apply." },
      { label: "Contact", text: "Information you choose to include in GitHub issues or messages is visible wherever you post it." },
    ],
    timelineTitle: "Visitor choices",
    timeline: [
      { label: "Browse anonymously", text: "You can read the public pages without signing in." },
      { label: "Use GitHub intentionally", text: "Only post contact details or private context if you are comfortable sharing it there." },
      { label: "Ask questions", text: "Use the contact page if anything about this policy needs clarification." },
    ],
  },
  terms: {
    eyebrow: "Company",
    title: "Terms of service for using the public site.",
    description:
      "A practical terms page for browsing Vengeance UI, using the examples, and linking out to the open source repository.",
    primaryAction: { label: "View license/source", href: GITHUB_REPO_URL, external: true, icon: GitBranch },
    secondaryAction: { label: "Privacy policy", href: "/privacy", icon: ShieldCheck },
    stats: [
      { value: "Public", label: "docs" },
      { value: "OSS", label: "source" },
      { value: "Use", label: "responsibly" },
    ],
    featuresTitle: "Terms summary",
    featuresDescription:
      "These terms keep expectations clear for visitors using docs, demos, and registry code.",
    features: [
      {
        title: "Use at your discretion",
        description: "Review code before shipping it in production and test it inside your own app.",
        icon: CheckCircle2,
      },
      {
        title: "Respect licenses",
        description: "Check the repository for the current license and dependency requirements.",
        icon: BookOpen,
      },
      {
        title: "Report issues clearly",
        description: "Bug reports should include enough detail for maintainers to reproduce the behavior.",
        icon: LifeBuoy,
      },
    ],
    detailsTitle: "Using Vengeance UI",
    detailsDescription:
      "The docs and demos are intended to help you build faster, but your final integration remains your responsibility.",
    details: [
      { label: "Availability", text: "The public site may change, move, or temporarily fail while the project evolves." },
      { label: "Examples", text: "Demos are examples, not a guarantee that every use case is production-ready unchanged." },
      { label: "Third parties", text: "External links and dependencies are governed by their own terms." },
    ],
    timelineTitle: "Common sense rules",
    timeline: [
      { label: "Do test", text: "Check accessibility, performance, and browser behavior in your own product." },
      { label: "Do attribute", text: "Follow the repository license and any dependency license requirements." },
      { label: "Do not abuse", text: "Do not use the site or examples to attack, spam, or mislead other services." },
    ],
  },
} satisfies Record<string, MarketingPageData>;

export type MarketingPageKey = keyof typeof marketingPages;

const marketingPagePaths: Record<MarketingPageKey, string> = {
  about: "/about",
  blocks: "/blocks",
  blog: "/blog",
  changelog: "/changelog",
  contact: "/contact",
  privacy: "/privacy",
  releases: "/releases",
  showcase: "/showcase",
  status: "/status",
  terms: "/terms",
};

export function marketingPageMetadata(key: MarketingPageKey): Metadata {
  const page = marketingPages[key];
  const title = page.title.split(".")[0];
  const path = marketingPagePaths[key];

  return {
    title,
    description: page.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      title: `${title} | ${SITE_NAME}`,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: page.description,
    },
  };
}
