import type { PropDef } from "@/components/docs/props-table";

export interface ComponentDocData {
  /** npm dependencies to install (e.g. "npm install framer-motion clsx tailwind-merge") */
  dependencies: string;
  /** Whether to include the utils step (cn function). Most components need this. */
  includeUtils?: boolean;
  /** Usage code snippet */
  usageCode: string;
  /** Props data for PropsTable */
  props: PropDef[];
  /** Additional props sections (e.g. nested configs like metalConfig) */
  additionalPropSections?: { title: string; data: PropDef[] }[];
}

/**
 * Documentation data for each component, keyed by slug.
 * This data powers the documentation sections below the preview:
 *   1. Install using CLI (auto-generated from slug)
 *   2. Install Manually (dependencies + utils + source code)
 *   3. Usage example
 *   4. Props table
 */
export const COMPONENT_DOCS: Record<string, ComponentDocData> = {
  "my-animated-button": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import AnimatedButton from "@/components/ui/animated-button"

export function AnimatedButtonDemo() {
  return (
    <AnimatedButton>
      Get Started
    </AnimatedButton>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "'Browse Components'", description: "The content to be displayed inside the button." },
      { prop: "className", type: "string", defaultValue: "''", description: "Additional CSS classes to apply to the button." },
      { prop: "as", type: "string", defaultValue: "'button'", description: "The HTML element or motion element to render as." },
      { prop: "whileTap", type: "TargetAndTransition", defaultValue: "{ scale: 0.97 }", description: "Framer Motion animation properties for the tap (click) state." },
      { prop: "transition", type: "Transition", defaultValue: "{ ...spring }", description: "Framer Motion transition configuration." },
    ],
  },

  "animated-rays": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import AnimatedRays from "@/components/ui/animated-rays"

export function AnimatedRaysDemo() {
  return (
    <AnimatedRays
      headline="Build Beautiful Interfaces"
      subtext="Create stunning animations with ease"
    />
  )
}`,
    props: [
      { prop: "headline", type: "string", defaultValue: "-", description: "The main heading text for the hero section." },
      { prop: "subtext", type: "string", defaultValue: "-", description: "Secondary text displayed below the headline." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the container." },
    ],
  },

  "animated-number": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { AnimatedNumber } from "@/components/ui/animated-number"

export function AnimatedNumberDemo() {
  return (
    <AnimatedNumber
      value={1234}
      duration={1.5}
    />
  )
}`,
    props: [
      { prop: "value", type: "number", defaultValue: "0", description: "The target number to animate to." },
      { prop: "duration", type: "number", defaultValue: "1", description: "Duration of the animation in seconds." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "formatter", type: "(value: number) => string", defaultValue: "-", description: "Custom formatting function for the displayed number." },
    ],
  },

  "flip-text": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { FlipText } from "@/components/ui/flip-text"

export default function Example() {
  return (
    <FlipText className="text-4xl font-bold">
      Your amazing text here
    </FlipText>
  )
}`,
    props: [
      { prop: "children", type: "string", defaultValue: "-", description: "The text content to animate. Must be a string." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes to apply to the wrapper element." },
      { prop: "duration", type: "number", defaultValue: "2.2", description: "Duration of the flip animation in seconds." },
      { prop: "delay", type: "number", defaultValue: "0", description: "Initial delay before animation starts in seconds." },
      { prop: "loop", type: "boolean", defaultValue: "true", description: "Whether the animation should loop infinitely or play once." },
      { prop: "separator", type: "string", defaultValue: "' '", description: "Custom separator for splitting text. Default is space." },
    ],
  },

  "flip-fade-text": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { FlipFadeText } from "@/components/ui/flip-fade-text"

export function FlipFadeTextDemo() {
  return (
    <FlipFadeText
      words={["Beautiful", "Dynamic", "Powerful"]}
      className="text-4xl font-bold"
    />
  )
}`,
    props: [
      { prop: "words", type: "string[]", defaultValue: "-", description: "Array of words to cycle through with flip-fade animation." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for styling." },
      { prop: "duration", type: "number", defaultValue: "0.5", description: "Duration of each transition in seconds." },
      { prop: "interval", type: "number", defaultValue: "3000", description: "Time in milliseconds between word transitions." },
    ],
  },

  "liquid-text": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { LiquidText } from "@/components/ui/liquid-text"

export function LiquidTextDemo() {
  return (
    <LiquidText text="VENGEANCE" />
  )
}`,
    props: [
      { prop: "text", type: "string", defaultValue: "'VENGEANCE'", description: "The text to render with the liquid displacement effect." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "fontSize", type: "number", defaultValue: "120", description: "Font size of the text." },
    ],
  },

  "reveal-loader": {
    dependencies: "npm install @gsap/react gsap clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import RevealLoader from "@/components/ui/reveal-loader"

export default function App() {
  return (
    <>
      <RevealLoader
        text="VENGEANCE"
        bgColors={["#0f172a", "#334155"]}
        staggerOrder="center-out"
        textFadeDelay={0.5}
      />
      <main>
        {/* Your app content */}
      </main>
    </>
  )
}`,
    props: [
      { prop: "text", type: "string", defaultValue: "'VENGEANCE'", description: "The text to display during the loading animation." },
      { prop: "textSize", type: "string", defaultValue: "'100px'", description: "CSS font size for the loader text." },
      { prop: "textColor", type: "string", defaultValue: "'white'", description: "CSS color for the loader text." },
      { prop: "bgColors", type: "string[]", defaultValue: "['#000000']", description: "Array of colors. Providing multiple creates a linear gradient." },
      { prop: "staggerOrder", type: "'left-to-right' | 'right-to-left' | 'center-out' | 'edges-in'", defaultValue: "'left-to-right'", description: "The order in which the background bars animate out." },
      { prop: "movementDirection", type: "'top-down' | 'bottom-up' | 'fade-out' | 'scale-vertical'", defaultValue: "'top-down'", description: "The animation style of the bars exiting." },
      { prop: "textFadeDelay", type: "number", defaultValue: "0.5", description: "Delay (in seconds) before the text fades out, relative to when bars start moving." },
      { prop: "onComplete", type: "() => void", defaultValue: "-", description: "Callback triggered when the entire animation finishes." },
    ],
  },

  "social-flip-button": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { SocialFlipButton } from "@/components/ui/social-flip-button"

export function SocialFlipButtonDemo() {
  return (
    <SocialFlipButton
      platform="twitter"
      href="https://twitter.com"
    />
  )
}`,
    props: [
      { prop: "platform", type: "string", defaultValue: "-", description: "The social platform name (e.g. 'twitter', 'github')." },
      { prop: "href", type: "string", defaultValue: "-", description: "Link URL for the social button." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
    ],
  },

  "line-hover-link": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { LineHoverLink } from "@/components/ui/line-hover-link"

export function LineHoverLinkDemo() {
  return (
    <LineHoverLink href="/about">
      About Us
    </LineHoverLink>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "The link text content." },
      { prop: "href", type: "string", defaultValue: "-", description: "The link URL." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "variant", type: "'slide-up' | 'fade' | 'underline'", defaultValue: "'slide-up'", description: "The animation style for the hover effect." },
    ],
  },

  "interactive-book": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { InteractiveBook } from "@/components/ui/interactive-book"

export function InteractiveBookDemo() {
  return (
    <InteractiveBook
      pages={[
        { title: "Page 1", content: "First page content" },
        { title: "Page 2", content: "Second page content" },
      ]}
    />
  )
}`,
    props: [
      { prop: "pages", type: "Page[]", defaultValue: "-", description: "Array of page objects with title and content." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "width", type: "number", defaultValue: "400", description: "Width of the book in pixels." },
      { prop: "height", type: "number", defaultValue: "500", description: "Height of the book in pixels." },
    ],
  },

  "pixelated-image-trail": {
    dependencies: "npm install framer-motion imagesloaded clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import PixelatedImageTrail from "@/components/ui/pixelated-image-trail"

export function PixelatedImageTrailDemo() {
  return (
    <PixelatedImageTrail
      images={["/image1.jpg", "/image2.jpg", "/image3.jpg"]}
    />
  )
}`,
    props: [
      { prop: "images", type: "string[]", defaultValue: "-", description: "Array of image URLs for the trail effect." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "pixelSize", type: "number", defaultValue: "10", description: "Size of each pixel block in the pixelation effect." },
    ],
  },

  "bento-grid": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import BentoGrid from "@/components/ui/bento-grid"

export function BentoGridDemo() {
  return (
    <BentoGrid>
      {/* Grid items */}
    </BentoGrid>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "Grid item components to render inside the bento layout." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the grid container." },
    ],
  },

  "agent-bento-grid": {
    dependencies: "npm install framer-motion @phosphor-icons/react clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { AgentBentoGrid } from "@/components/ui/agent-bento-grid"

export function AgentBentoGridDemo() {
  return (
    <AgentBentoGrid className="my-8" />
  )
}`,
    props: [
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the grid container." },
    ],
  },

  "expandable-bento-grid": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { ExpandableBentoGrid } from "@/components/ui/expandable-bento-grid"

export function ExpandableBentoGridDemo() {
  return (
    <ExpandableBentoGrid
      items={[
        { title: "Item 1", content: "Content 1" },
        { title: "Item 2", content: "Content 2" },
      ]}
    />
  )
}`,
    props: [
      { prop: "items", type: "BentoItem[]", defaultValue: "-", description: "Array of bento grid items to render." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
    ],
  },

  "staggered-grid": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { StaggeredGrid } from "@/components/ui/staggered-grid"

export function StaggeredGridDemo() {
  return (
    <StaggeredGrid
      items={[
        { title: "Card 1", description: "First card" },
        { title: "Card 2", description: "Second card" },
      ]}
    />
  )
}`,
    props: [
      { prop: "items", type: "GridItem[]", defaultValue: "-", description: "Array of items to display in the staggered grid." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "staggerDelay", type: "number", defaultValue: "0.1", description: "Delay between each item's animation in seconds." },
    ],
  },

  "perspective-grid": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { PerspectiveGrid } from "@/components/ui/perspective-grid"

export function PerspectiveGridDemo() {
  return (
    <PerspectiveGrid
      rows={20}
      cols={20}
    />
  )
}`,
    props: [
      { prop: "rows", type: "number", defaultValue: "20", description: "Number of rows in the grid." },
      { prop: "cols", type: "number", defaultValue: "20", description: "Number of columns in the grid." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
    ],
  },

  "glow-border-card": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { GlowBorderCard } from "@/components/ui/glow-border-card"

export function GlowBorderCardDemo() {
  return (
    <GlowBorderCard>
      <h3>Card Title</h3>
      <p>Card content goes here.</p>
    </GlowBorderCard>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "Content to render inside the card." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "glowColors", type: "string[]", defaultValue: "['#669900', '#99cc33', ...]", description: "Array of colors for the glow border animation." },
      { prop: "duration", type: "number", defaultValue: "4", description: "Duration of the glow rotation animation in seconds." },
    ],
  },

  "testimonials-card": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { TestimonialsCard } from "@/components/ui/testimonials-card"

export function TestimonialsCardDemo() {
  return (
    <TestimonialsCard
      testimonials={[
        { name: "John Doe", text: "Amazing product!", avatar: "/avatar.jpg" },
      ]}
    />
  )
}`,
    props: [
      { prop: "testimonials", type: "Testimonial[]", defaultValue: "-", description: "Array of testimonial objects to display." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "autoPlay", type: "boolean", defaultValue: "true", description: "Whether to auto-rotate through testimonials." },
    ],
  },

  "folder-preview": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { FolderPreview } from "@/components/ui/folder-preview"

export function FolderPreviewDemo() {
  return (
    <FolderPreview
      name="My Project"
      items={["index.tsx", "styles.css", "utils.ts"]}
    />
  )
}`,
    props: [
      { prop: "name", type: "string", defaultValue: "-", description: "The folder name to display." },
      { prop: "items", type: "string[]", defaultValue: "-", description: "Array of file names to show in the folder." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
    ],
  },

  "glass-dock": {
    dependencies: "npm install framer-motion react-use-measure clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { GlassDock } from "@/components/ui/glass-dock"

export function GlassDockDemo() {
  return (
    <GlassDock
      items={[
        { icon: "home", label: "Home", href: "/" },
        { icon: "settings", label: "Settings", href: "/settings" },
      ]}
    />
  )
}`,
    props: [
      { prop: "items", type: "DockItem[]", defaultValue: "-", description: "Array of dock items with icon, label, and href." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
    ],
  },

  "masked-avatars": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { MaskedAvatars } from "@/components/ui/masked-avatars"

export function MaskedAvatarsDemo() {
  return (
    <MaskedAvatars
      avatars={[
        { src: "/avatar1.jpg", alt: "User 1" },
        { src: "/avatar2.jpg", alt: "User 2" },
      ]}
    />
  )
}`,
    props: [
      { prop: "avatars", type: "Avatar[]", defaultValue: "-", description: "Array of avatar objects with src and alt." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "size", type: "number", defaultValue: "40", description: "Size of each avatar in pixels." },
      { prop: "overlap", type: "number", defaultValue: "-8", description: "Overlap between avatars in pixels (negative for overlap)." },
    ],
  },

  "logo-slider": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { LogoSlider } from "@/components/ui/logo-slider"

export function LogoSliderDemo() {
  return (
    <LogoSlider
      logos={[
        { src: "/logo1.svg", alt: "Company 1" },
        { src: "/logo2.svg", alt: "Company 2" },
      ]}
    />
  )
}`,
    props: [
      { prop: "logos", type: "Logo[]", defaultValue: "-", description: "Array of logo objects with src and alt." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "speed", type: "number", defaultValue: "30", description: "Speed of the marquee animation in seconds." },
      { prop: "direction", type: "'left' | 'right'", defaultValue: "'left'", description: "Direction of the marquee scroll." },
    ],
  },

  "stacked-logos": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { StackedLogos } from "@/components/ui/stacked-logos"

export function StackedLogosDemo() {
  return (
    <StackedLogos
      logos={[
        { src: "/logo1.svg", alt: "Logo 1" },
        { src: "/logo2.svg", alt: "Logo 2" },
      ]}
    />
  )
}`,
    props: [
      { prop: "logos", type: "Logo[]", defaultValue: "-", description: "Array of logo objects." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "duration", type: "number", defaultValue: "30", description: "Duration of the animation cycle in seconds." },
    ],
  },

  "liquid-metal": {
    dependencies: "npm install @paper-design/shaders-react clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { LiquidMetalButton } from "@/components/ui/liquid-metal"
import { ArrowRight } from "lucide-react"

export function LiquidMetalDemo() {
  return (
    <LiquidMetalButton
      icon={<ArrowRight className="w-5 h-5" />}
      metalConfig={{
        colorBack: "#3b82f6",
        colorTint: "#93c5fd",
      }}
    >
      Click Me
    </LiquidMetalButton>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "The button text/content." },
      { prop: "icon", type: "React.ReactNode", defaultValue: "-", description: "Optional icon displayed on the left side of the button." },
      { prop: "size", type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Size variant of the button." },
      { prop: "borderWidth", type: "number", defaultValue: "4", description: "Width of the liquid metal border in pixels." },
      { prop: "metalConfig", type: "LiquidMetalProps", defaultValue: "-", description: "Configuration object for the liquid metal shader effect." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the button container." },
      { prop: "disabled", type: "boolean", defaultValue: "false", description: "Whether the button is disabled." },
    ],
    additionalPropSections: [
      {
        title: "metalConfig (LiquidMetalProps)",
        data: [
          { prop: "colorBack", type: "string", defaultValue: "'#888888'", description: "Base background color of the liquid metal effect." },
          { prop: "colorTint", type: "string", defaultValue: "'#ffffff'", description: "Tint/highlight color for the chrome reflections." },
          { prop: "speed", type: "number", defaultValue: "0.4", description: "Animation speed of the fluid movement (0.1 - 2.0 recommended)." },
          { prop: "repetition", type: "number", defaultValue: "4", description: "Pattern complexity (1 - 10)." },
          { prop: "distortion", type: "number", defaultValue: "0.15", description: "Wave distortion amount (0 - 1)." },
          { prop: "scale", type: "number", defaultValue: "1", description: "Scale of the effect texture." },
        ],
      },
    ],
  },

  "light-lines": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { LightLines } from "@/components/ui/light-lines"

export function LightLinesDemo() {
  return (
    <LightLines
      className="w-full h-[400px]"
    />
  )
}`,
    props: [
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "lineCount", type: "number", defaultValue: "5", description: "Number of animated lines." },
      { prop: "speed", type: "number", defaultValue: "1", description: "Speed of the line animation." },
    ],
  },

  "liquid-ocean": {
    dependencies: "npm install @paper-design/shaders-react clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { LiquidOcean } from "@/components/ui/liquid-ocean"

export function LiquidOceanDemo() {
  return (
    <LiquidOcean
      className="w-full h-[400px]"
    />
  )
}`,
    props: [
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "speed", type: "number", defaultValue: "0.5", description: "Speed of the ocean wave animation." },
      { prop: "color1", type: "string", defaultValue: "'#0066ff'", description: "Primary ocean color." },
      { prop: "color2", type: "string", defaultValue: "'#00ccff'", description: "Secondary ocean color." },
    ],
  },

  "twisting-ribbon": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { TwistingRibbon } from "@/components/ui/twisting-ribbon"

export function TwistingRibbonDemo() {
  return (
    <div className="w-full h-[400px]">
      <TwistingRibbon
        segments={400}
        waveSpeed={0.018}
        waveAmplitude={1}
        twistCycles={6}
      />
    </div>
  )
}`,
    props: [
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the container." },
      { prop: "segments", type: "number", defaultValue: "400", description: "Number of geometric segments along the ribbon." },
      { prop: "waveSpeed", type: "number", defaultValue: "0.018", description: "Speed of the ribbon motion." },
      { prop: "waveAmplitude", type: "number", defaultValue: "1", description: "Scale multiplier for the wave height." },
      { prop: "twistCycles", type: "number", defaultValue: "6", description: "Number of full twists across the ribbon length." },
      { prop: "lightColors", type: "RibbonColors", defaultValue: "-", description: "Object containing hex colors (face, foldA, foldB, foldC) for light mode." },
      { prop: "darkColors", type: "RibbonColors", defaultValue: "-", description: "Object containing hex colors (face, foldA, foldB, foldC) for dark mode." },
    ],
  },

  "morph-text": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { MorphText } from "@/components/ui/morph-text"

// Default — cycles CREATE / DESIGN / DEVELOP
export function MyHero() {
  return (
    <MorphText subtext="The Art of Code" />
  )
}

// Custom words and interval
export function CustomMorph() {
  return (
    <MorphText
      words={["INNOVATE", "BUILD", "SHIP"]}
      interval={2500}
      subtext="Move fast. Break things."
      fontSize="clamp(2rem, 10vw, 8rem)"
    />
  )
}`,
    props: [
      { prop: "words", type: "string[]", defaultValue: '["CREATE", "DESIGN", "DEVELOP"]', description: "Array of words or phrases to cycle through." },
      { prop: "interval", type: "number", defaultValue: "3000", description: "Duration in ms each word is shown before transitioning." },
      { prop: "subtext", type: "string", defaultValue: "-", description: "Optional subtext rendered beneath the morphing word." },
      { prop: "fontSize", type: "string", defaultValue: '"clamp(3rem, 15vw, 10rem)"', description: "CSS font-size value for the morphing text." },
      { prop: "fontFamily", type: "string", defaultValue: '"Space Grotesk", sans-serif', description: "Font family applied to both the morph text and subtext." },
      { prop: "className", type: "string", defaultValue: "-", description: "Extra classes on the root wrapper." },
      { prop: "textClassName", type: "string", defaultValue: "-", description: "Extra classes on the morphing text container." },
      { prop: "subtextClassName", type: "string", defaultValue: "-", description: "Extra classes on the subtext element." },
    ],
  },

  "corner-button": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { CornerButton } from "@/components/ui/corner-button"

// Default usage
export function MySection() {
  return <CornerButton>Start designing</CornerButton>
}

// Custom accent colour, no icon
export function CustomSection() {
  return (
    <CornerButton accentColor="#00e5ff" showIcon={false}>
      Get started
    </CornerButton>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "\"Start designing\"", description: "Button label content." },
      { prop: "icon", type: "React.ReactNode", defaultValue: "PencilIcon", description: "Custom icon rendered to the right of the label. Overrides showIcon." },
      { prop: "showIcon", type: "boolean", defaultValue: "true", description: "Show the default pencil icon. Set to false to hide it entirely." },
      { prop: "accentColor", type: "string", defaultValue: "\"#e5ff00\"", description: "Accent colour used for the button background and corner glow." },
      { prop: "wrapperClassName", type: "string", defaultValue: "-", description: "Extra classes applied to the outer wrapper div." },
      { prop: "className", type: "string", defaultValue: "-", description: "Extra classes applied to the button element." },
    ],
  },

  "aurora-hero": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { AuroraHero } from "@/components/ui/aurora-hero"

export function AuroraHeroDemo() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <AuroraHero title="Vengeance UI" />
    </div>
  )
}`,
    props: [
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the container." },
      { prop: "title", type: "string", defaultValue: "'An awesome title'", description: "The text to display with the fluted glass effect." },
    ],
  },

  "creepy-button": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { CreepyButton } from "@/components/ui/creepy-button"

export function CreepyButtonDemo() {
  return (
    <CreepyButton>
      Hover Me
    </CreepyButton>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "The button content." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
    ],
  },

  "spotlight-navbar": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { SpotlightNavbar } from "@/components/ui/spotlight-navbar"

export function SpotlightNavbarDemo() {
  return (
    <SpotlightNavbar
      items={[
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Pricing", href: "#" }
      ]}
    />
  )
}`,
    props: [
      { prop: "items", type: "NavItem[]", defaultValue: "-", description: "Array of navigation items." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "defaultActiveIndex", type: "number", defaultValue: "0", description: "Initial active item index." },
    ],
  },

  "faq-accordion": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { FaqAccordion } from "@/components/ui/faq-accordion"

export function FaqAccordionDemo() {
  return (
    <FaqAccordion />
  )
}`,
    props: [
      { prop: "items", type: "FaqItem[]", defaultValue: "DEFAULT_ITEMS", description: "Array of FAQ objects with question and answer." },
      { prop: "title", type: "string", defaultValue: "'Vengeance UI FAQs'", description: "The title displayed above the accordion." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the container." },
    ],
  },

  "interactive-keyboard": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { InteractiveKeyboard } from "@/components/ui/interactive-keyboard"

export function InteractiveKeyboardDemo() {
  return (
    <InteractiveKeyboard 
      onKeyClick={(key) => console.log(key)}
    />
  )
}`,
    props: [
      { prop: "onKeyClick", type: "(key: string) => void", defaultValue: "-", description: "Callback fired when any key is clicked. Returns the key's label." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the keyboard wrapper." },
    ],
  },

  "generate-button": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { GenerateButton } from "@/components/ui/generate-button"

export function GenerateButtonDemo() {
  return (
    <GenerateButton hue={210} />
  )
}`,
    props: [
      { prop: "hue", type: "number", defaultValue: "210", description: "The hue value (0-360) for the button's highlight color. 210 is blue." },
      { prop: "isGenerating", type: "boolean", defaultValue: "false", description: "If true, forces the button into its 'Generating' state. By default, it activates on focus or click." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the button." },
    ],
  },

  "radial-glow-button": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { RadialGlowButton } from "@/components/ui/radial-glow-button"

export function RadialGlowButtonDemo() {
  return (
    <RadialGlowButton>
      Get Extension
    </RadialGlowButton>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "'Get Extension'", description: "The content of the button." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the button." },
    ],
  },

  "elastic-stack": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { ElasticStack } from "@/components/ui/elastic-stack"

export function ElasticStackDemo() {
  const items = [
    { id: "1", name: "Felix", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" },
    { id: "2", name: "Aneka", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka" },
    { id: "3", name: "Oliver", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Oliver" },
    { id: "4", name: "Zoe", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Zoe" },
    { id: "5", name: "Leo", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Leo" },
    { id: "6", name: "Mia", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mia" },
    { id: "7", name: "Noah", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Noah" },
    { id: "8", name: "Ava", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ava" },
  ];

  return (
    <ElasticStack 
      items={items} 
      itemSize={70}
      overlap={35}
      pushForce={15}
    />
  )
}`,
    props: [
      { prop: "items", type: "ElasticStackItem[]", defaultValue: "-", description: "Array of items with id, image, and optional name." },
      { prop: "itemSize", type: "number", defaultValue: "70", description: "The base width and height of each item in pixels." },
      { prop: "overlap", type: "number", defaultValue: "30", description: "The negative margin used to overlap items in pixels." },
      { prop: "pushForce", type: "number", defaultValue: "15", description: "The multiplier defining how far sibling items are pushed on hover." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the container." },
    ],
  },

  "candy-button": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { CandyButton } from "@/components/ui/candy-button"

export function CandyButtonDemo() {
  return (
    <CandyButton>
      Candy Button
    </CandyButton>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "'Candy Button'", description: "The content of the button." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the button." },
    ],
  },

  "pop-button": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { PopButton } from "@/components/ui/pop-button"

export function PopButtonDemo() {
  return (
    <PopButton>
      Learn More
    </PopButton>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "'Learn More'", description: "The content of the button." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the button container." },
    ],
  },

  "cursor-card": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { CursorCard } from "@/components/ui/cursor-card"

export function CursorCardDemo() {
  return (
    <p>
      Hover over <CursorCard image="/demo.jpg" description="This is a cool location!">this link</CursorCard> to see the preview.
    </p>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "The text or element that triggers the hover effect." },
      { prop: "image", type: "string", defaultValue: "-", description: "The URL of the image to display in the hover card." },
      { prop: "description", type: "string", defaultValue: "-", description: "The description text to display in the hover card." },
      { prop: "href", type: "string", defaultValue: "'#'", description: "The destination URL for the link." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the link element." },
    ],
  },

  "kinetic-text-loader": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { KineticTextLoader } from "@/components/ui/kinetic-text-loader"

export function LoaderDemo() {
  return (
    <KineticTextLoader />
  )
}`,
    props: [
      { prop: "text", type: "string", defaultValue: "'Loading'", description: "The text to display. Note: internal animations are optimized for the word 'Loading'." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the loader container." },
    ],
  },

  "shared-tooltip-avatars": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { SharedTooltipAvatars } from "@/components/ui/shared-tooltip-avatars"

export function Demo() {
  return (
    <SharedTooltipAvatars 
      items={[
        { id: "1", name: "Alice", image: "/alice.jpg" },
        { id: "2", name: "Bob", image: "/bob.jpg" }
      ]} 
    />
  )
}`,
    props: [
      { prop: "items", type: "AvatarItem[]", defaultValue: "[]", description: "Array of avatar items with id, name, and image." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the component." },
    ],
  },
};
