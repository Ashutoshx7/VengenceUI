import type { PropDef } from "@/components/docs/props-table";

export interface ComponentDocData {
  /** npm dependencies to install (e.g. "npm install framer-motion clsx tailwind-merge") */
  dependencies: string;
  /** Whether to include the utils step (cn function). Most components need this. */
  includeUtils?: boolean;
  /** Component-specific manual setup notes shown in the manual install tab. */
  manualNotes?: string[];
  /** Usage code snippet */
  usageCode: string;
  /** Props data for PropsTable */
  props: PropDef[];
  /** Additional props sections (e.g. nested configs like metalConfig) */
  additionalPropSections?: { title: string; data: PropDef[] }[];
  /** Optional credit section for the component author */
  credits?: {
    author: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
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

  "ascii-glitch-ripple": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple"

export function AsciiGlitchRippleDemo() {
  return (
    <AsciiGlitchRipple
      as="a"
      href="#"
      dur={1000}
      spread={1.2}
      className="text-lg font-mono hover:text-white"
    >
      Roadside Picnic — Arkady & Boris Strugatsky
    </AsciiGlitchRipple>
  )
}`,
    props: [
      { prop: "children", type: "string", defaultValue: "-", description: "The text content to display and scramble." },
      { prop: "as", type: "React.ElementType", defaultValue: "'a'", description: "The HTML element or component to render as (e.g. 'a', 'span', 'button')." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes to apply to the component." },
      { prop: "dur", type: "number", defaultValue: "1000", description: "Duration of the scramble animation wave in milliseconds." },
      { prop: "chars", type: "string", defaultValue: "'.,·-─~+:;=*π\"\"┐┌┘┴┬╗╔╝╚╬╠╣╩╦║░▒▓█▄▀▌▐■!?&#$@0123456789*'", description: "Character set used for the glitch scrambling effect." },
      { prop: "preserveSpaces", type: "boolean", defaultValue: "true", description: "Whether to keep original spaces unscrambled." },
      { prop: "spread", type: "number", defaultValue: "1.0", description: "Spread factor controlling the speed and width of the ripple wave." },
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
    dependencies: "No extra dependencies required",
    includeUtils: true,
    usageCode: `import { LineHoverLink } from "@/components/ui/line-hover-link"

export function LineHoverLinkDemo() {
  return (
    <LineHoverLink
      href="/components/line-hover-link"
      variant="scribble"
      className="text-lg font-medium"
    >
      Explore components
    </LineHoverLink>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "The link text content." },
      { prop: "href", type: "string", defaultValue: "-", description: "The link URL." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "variant", type: "'slide' | 'double' | 'grow' | 'strike' | 'fade' | 'pulse' | 'swap' | 'sweep' | 'bounce' | 'arc' | 'scribble'", defaultValue: "'slide'", description: "The underline, stroke, or sweep animation style." },
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
  
  "image-collage": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { ImageCollage } from "@/components/ui/image-collage"

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop', x: 20, y: -25, rotate: 12 },
  { src: 'https://images.unsplash.com/photo-1620002130389-9db8a5e3782d?q=80&w=2000&auto=format&fit=crop', x: 0, y: 15, rotate: -15 },
]

export function ImageCollageDemo() {
  return (
    <ImageCollage images={IMAGES} />
  )
}`,
    props: [
      { prop: "images", type: "CollageImage[]", defaultValue: "-", description: "Array of images with specific coordinates and rotation." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional classes for the outer wrapper." },
      { prop: "containerClassName", type: "string", defaultValue: "-", description: "Additional classes for the image container." },
      { prop: "imageClassName", type: "string", defaultValue: "-", description: "Additional classes for the individual images." },
    ],
    additionalPropSections: [
      {
        title: "CollageImage",
        data: [
          { prop: "src", type: "string", defaultValue: "-", description: "Image URL." },
          { prop: "x", type: "number", defaultValue: "-", description: "X offset in scattered state." },
          { prop: "y", type: "number", defaultValue: "-", description: "Y offset in scattered state." },
          { prop: "rotate", type: "number", defaultValue: "-", description: "Rotation in degrees." },
          { prop: "alt", type: "string", defaultValue: "-", description: "Optional alt text." },
        ],
      },
    ],
  },

  "image-trail": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "Wrap the content you want to track with ImageTrail and give the wrapper a height or let it fill its parent.",
      "The built-in Unsplash images work immediately after installation. Pass local public paths or remote URLs through images to customize them.",
      "Use threshold and minDelay together to control trail density. Lower values create more images.",
      "Use imageClassName to size and style the trailing images without editing the component source.",
    ],
    usageCode: `import { ImageTrail } from "@/components/ui/image-trail"

export function ImageTrailDemo() {
  return (
    <ImageTrail
      threshold={74}
      minDelay={45}
      duration={1100}
      maxItems={9}
      rotationRange={34}
      imageClassName="w-32 rounded-md md:w-40"
      className="flex h-[500px] items-center justify-center bg-[#ececec]"
    >
      <h2 className="pointer-events-none text-5xl font-black">
        Image trail effect
      </h2>
    </ImageTrail>
  )
}`,
    props: [
      { prop: "images", type: "Array<string | ImageTrailImage>", defaultValue: "DEFAULT_IMAGES", description: "Images cycled through as the cursor moves." },
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "Content rendered beneath the image trail overlay." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional classes for the tracking wrapper." },
      { prop: "threshold", type: "number", defaultValue: "80", description: "Minimum pointer distance in pixels before another image appears." },
      { prop: "minDelay", type: "number", defaultValue: "50", description: "Minimum delay in milliseconds between spawned trail images." },
      { prop: "duration", type: "number", defaultValue: "1000", description: "Time in milliseconds before a trail image is removed." },
      { prop: "maxItems", type: "number", defaultValue: "8", description: "Maximum number of active trail images kept in the DOM." },
      { prop: "rotationRange", type: "number", defaultValue: "40", description: "Random rotation range in degrees." },
      { prop: "imageClassName", type: "string", defaultValue: "-", description: "Additional classes for each trailing image." },
      { prop: "overlayClassName", type: "string", defaultValue: "-", description: "Additional classes for the absolute overlay layer." },
      { prop: "transition", type: "Transition", defaultValue: "spring", description: "Framer Motion transition used for image enter animation." },
      { prop: "exitTransition", type: "Transition", defaultValue: "{ duration: 0.4 }", description: "Framer Motion transition used when images exit." },
      { prop: "disabled", type: "boolean", defaultValue: "false", description: "Disables spawning new trail images." },
    ],
  },

  "cylinder-carousel": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { CylinderCarousel } from "@/components/ui/cylinder-carousel"

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1540968221243-29f5d70540bf?w=280", alt: "jellyfish" },
  { src: "https://images.unsplash.com/photo-1596135187959-562c650d98bc?w=280", alt: "jellyfish" },
  { src: "https://images.unsplash.com/photo-1628944682084-831f35256163?w=280", alt: "jellyfish" },
]

export function CylinderCarouselDemo() {
  return (
    <div className="w-full bg-[#fff3ed]">
      <CylinderCarousel images={IMAGES} />
    </div>
  )
}`,
    props: [
      { prop: "images", type: "CarouselImage[]", defaultValue: "-", description: "Array of images to display in the 3D cylinder." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional classes for the outer wrapper." },
      { prop: "containerClassName", type: "string", defaultValue: "-", description: "Additional classes for the rotating container." },
      { prop: "cardClassName", type: "string", defaultValue: "-", description: "Additional classes for the individual image cards." },
      { prop: "animationDuration", type: "number", defaultValue: "32", description: "Duration of a full rotation in seconds." },
      { prop: "cardWidth", type: "number", defaultValue: "250", description: "Width of each card in pixels. Affects cylinder radius calculation." },
    ],
    additionalPropSections: [
      {
        title: "CarouselImage",
        data: [
          { prop: "src", type: "string", defaultValue: "-", description: "Image URL." },
          { prop: "alt", type: "string", defaultValue: "-", description: "Optional alt text." },
        ],
      },
    ],
  },

  "perspective-carousel": {
    dependencies: "npm install framer-motion lucide-react clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "Pass an items array with src and title values. The title is shown beneath the active image and is also used for accessible labels.",
      "The carousel fills its parent, so give the wrapper a stable height.",
      "Set activeIndex and onActiveIndexChange when you need controlled state. Use defaultActiveIndex for a self-contained carousel.",
      "The controls adapt to dark mode automatically. Style the main surface through className.",
    ],
    usageCode: `import { PerspectiveCarousel } from "@/components/ui/perspective-carousel"

const items = [
  { src: "/images/city.jpg", title: "urban exploration" },
  { src: "/images/night.jpg", title: "night scene" },
  { src: "/images/flowers.jpg", title: "yellow wildflowers" },
  { src: "/images/fuji.jpg", title: "street with mount fuji" },
]

export function PerspectiveCarouselDemo() {
  return (
    <PerspectiveCarousel
      items={items}
      defaultActiveIndex={2}
      slideWidth={210}
      className="h-[560px] bg-[#ececec] text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
    />
  )
}`,
    props: [
      { prop: "items", type: "PerspectiveCarouselItem[]", defaultValue: "-", description: "Slides with src, title, and optional alt values." },
      { prop: "activeIndex", type: "number", defaultValue: "-", description: "Controlled active slide index." },
      { prop: "defaultActiveIndex", type: "number", defaultValue: "0", description: "Initial slide index for uncontrolled usage." },
      { prop: "onActiveIndexChange", type: "(index: number) => void", defaultValue: "-", description: "Called whenever a slide is selected." },
      { prop: "loop", type: "boolean", defaultValue: "false", description: "Wraps previous and next navigation at the ends." },
      { prop: "slideWidth", type: "number", defaultValue: "200", description: "Width of each image card in pixels." },
      { prop: "rotationStep", type: "number", defaultValue: "60", description: "Y-axis rotation difference between adjacent slides." },
      { prop: "inactiveScale", type: "number", defaultValue: "0.85", description: "Scale applied to inactive slides." },
      { prop: "transition", type: "Transition", defaultValue: "spring", description: "Framer Motion transition used for carousel movement." },
      { prop: "showControls", type: "boolean", defaultValue: "true", description: "Shows the bottom navigation control bar." },
      { prop: "showDots", type: "boolean", defaultValue: "true", description: "Shows slide position dots inside the controls." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional classes for the carousel root." },
      { prop: "viewportClassName", type: "string", defaultValue: "-", description: "Additional classes for the clipped viewport." },
      { prop: "slideClassName", type: "string", defaultValue: "-", description: "Additional classes for each animated slide." },
      { prop: "imageClassName", type: "string", defaultValue: "-", description: "Additional classes for each image." },
      { prop: "labelClassName", type: "string", defaultValue: "-", description: "Additional classes for the active slide title." },
      { prop: "controlsClassName", type: "string", defaultValue: "-", description: "Additional classes for the navigation controls." },
    ],
  },

  "diagonal-carousel": {
    dependencies: "npm install framer-motion lucide-react clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "Pass an items array with src and title values. Each title is also used as the default image alt text.",
      "The carousel fills its parent, so give the wrapper a stable height.",
      "Tune slideSize, rotationStep, verticalStep, and inactiveScale to control the diagonal stack geometry.",
      "Set activeIndex and onActiveIndexChange when you need controlled state. Use defaultActiveIndex for a self-contained carousel.",
      "The controls adapt to dark mode automatically. Style the main surface through className.",
    ],
    usageCode: `import { DiagonalCarousel } from "@/components/ui/diagonal-carousel"

const items = [
  { src: "/images/city.jpg", title: "urban exploration" },
  { src: "/images/night.jpg", title: "night scene" },
  { src: "/images/flowers.jpg", title: "yellow wildflowers" },
  { src: "/images/fuji.jpg", title: "street with mount fuji" },
]

export function DiagonalCarouselDemo() {
  return (
    <DiagonalCarousel
      items={items}
      defaultActiveIndex={2}
      slideSize={250}
      className="h-[560px] bg-[#ececec] text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
    />
  )
}`,
    props: [
      { prop: "items", type: "DiagonalCarouselItem[]", defaultValue: "-", description: "Slides with src, title, and optional alt values." },
      { prop: "activeIndex", type: "number", defaultValue: "-", description: "Controlled active slide index." },
      { prop: "defaultActiveIndex", type: "number", defaultValue: "0", description: "Initial slide index for uncontrolled usage." },
      { prop: "onActiveIndexChange", type: "(index: number) => void", defaultValue: "-", description: "Called whenever a slide is selected." },
      { prop: "loop", type: "boolean", defaultValue: "false", description: "Wraps previous and next navigation at the ends." },
      { prop: "slideSize", type: "number", defaultValue: "260", description: "Width and height of each image card in pixels." },
      { prop: "rotationStep", type: "number", defaultValue: "30", description: "Rotation difference in degrees between adjacent slides." },
      { prop: "verticalStep", type: "number", defaultValue: "120", description: "Vertical offset in pixels between adjacent slides." },
      { prop: "inactiveScale", type: "number", defaultValue: "0.6", description: "Scale applied to inactive slides." },
      { prop: "transition", type: "Transition", defaultValue: "spring", description: "Framer Motion transition used for carousel movement." },
      { prop: "showControls", type: "boolean", defaultValue: "true", description: "Shows the bottom navigation control bar." },
      { prop: "showDots", type: "boolean", defaultValue: "true", description: "Shows slide position dots inside the controls." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional classes for the carousel root." },
      { prop: "viewportClassName", type: "string", defaultValue: "-", description: "Additional classes for the clipped viewport." },
      { prop: "slideClassName", type: "string", defaultValue: "-", description: "Additional classes for each animated slide." },
      { prop: "imageClassName", type: "string", defaultValue: "-", description: "Additional classes for each image." },
      { prop: "labelClassName", type: "string", defaultValue: "-", description: "Additional classes for the active slide title." },
      { prop: "controlsClassName", type: "string", defaultValue: "-", description: "Additional classes for the navigation controls." },
    ],
  },

  "pixelated-image-trail": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "Render the component inside a relative black container with a fixed height and overflow hidden to match the preview.",
      "Pass your own image URLs, or place the demo images under public/trail-images before using the default image list.",
      "Use slices to control the horizontal sliced reveal. Fewer slices feel faster and more subtle.",
      "Lower spawnThreshold values create a denser trail that follows the cursor more closely.",
      "The trail is scoped to the preview container, so it will not bleed across the whole page.",
    ],
    usageCode: `import PixelatedImageTrail from "@/components/ui/pixelated-image-trail"

export function PixelatedImageTrailDemo() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-xl bg-black">
      <PixelatedImageTrail
        images={[
          "/trail-images/image1.jpg",
          "/trail-images/image4.jpg",
          "/trail-images/image5.jpg",
        ]}
        imageSize={220}
        slices={5}
        smoothing={0.32}
        spawnThreshold={32}
        config={{
          imageLifespan: 1500,
          inDuration: 280,
          outDuration: 620,
          staggerIn: 12,
          staggerOut: 9,
          slideDuration: 1300,
        }}
      />
    </div>
  )
}`,
    props: [
      { prop: "images", type: "string[]", defaultValue: "-", description: "Array of image URLs for the trail effect." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "config", type: "Partial<TrailConfig>", defaultValue: "-", description: "Override timing and easing values for the reveal, slide, and exit animations." },
      { prop: "slices", type: "number", defaultValue: "5", description: "Number of horizontal mask slices used for the reveal." },
      { prop: "spawnThreshold", type: "number", defaultValue: "32", description: "Pointer distance in pixels before a new trail image appears. Lower values create a denser trail." },
      { prop: "smoothing", type: "number", defaultValue: "0.32", description: "Interpolation factor used to smooth pointer movement. Values closer to 1 follow faster." },
      { prop: "imageSize", type: "number", defaultValue: "220", description: "Rendered trail image size in pixels." },
    ],
    additionalPropSections: [
      {
        title: "TrailConfig",
        data: [
          { prop: "imageLifespan", type: "number", defaultValue: "1500", description: "Delay in milliseconds before a spawned image begins exiting." },
          { prop: "inDuration", type: "number", defaultValue: "280", description: "Duration in milliseconds for each slice reveal." },
          { prop: "outDuration", type: "number", defaultValue: "620", description: "Duration in milliseconds for fade and scale out." },
          { prop: "staggerIn", type: "number", defaultValue: "12", description: "Delay in milliseconds between slice reveal steps." },
          { prop: "staggerOut", type: "number", defaultValue: "9", description: "Delay in milliseconds between slice hide steps." },
          { prop: "slideDuration", type: "number", defaultValue: "1300", description: "Duration in milliseconds for the image drift after spawning." },
          { prop: "slideEasing", type: "string", defaultValue: "cubic-bezier(0.16, 1, 0.3, 1)", description: "CSS easing for image drift." },
          { prop: "easing", type: "string", defaultValue: "cubic-bezier(0.16, 1, 0.3, 1)", description: "CSS easing for reveal and exit transitions." },
        ],
      },
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

  "image-scatter": {
    dependencies: "npm install gsap",
    includeUtils: true,
    usageCode: `import { ImageScatter } from "@/components/ui/image-scatter"

export function ImageScatterDemo() {
  const data = [
    { heading: "Section 1", images: ["/1.jpg", "/2.jpg"] },
    { heading: "Section 2", images: ["/3.jpg", "/4.jpg"] }
  ];
  return <ImageScatter data={data} />
}`,
    props: [
      { prop: "data", type: "ScatterSet[]", defaultValue: "-", description: "Array of sections containing a heading and an array of image URLs." },
      { prop: "cardWidth", type: "number", defaultValue: "250", description: "Width of each scattered image card in pixels." },
      { prop: "cardHeight", type: "number", defaultValue: "300", description: "Height of each scattered image card in pixels." },
      { prop: "animationDuration", type: "number", defaultValue: "0.75", description: "Duration of the scattering animation." },
      { prop: "animationOverlap", type: "number", defaultValue: "0.5", description: "Overlap timing for entering animations." },
      { prop: "headingFadeDuration", type: "number", defaultValue: "0.5", description: "Duration for the heading crossfade." },
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
      variant="devi"
      label="Shared Files"
      size="lg"
      images={[
        "/folder-preview/user1.svg",
        "/folder-preview/user2.svg",
        "/folder-preview/user3.svg",
        "/folder-preview/user4.svg",
      ]}
    />
  )
}`,
    props: [
      { prop: "variant", type: "'devi' | 'rudras' | 'ardra' | 'shakti' | 'kubera' | 'hari' | 'ravi' | 'durga' | 'nandi'", defaultValue: "'devi'", description: "The folder animation and visual style." },
      { prop: "images", type: "string[]", defaultValue: "default avatars", description: "Images used by the image-preview folder variants." },
      { prop: "files", type: "{ name: string; type?: 'txt' | 'gif' | 'mp3' | 'default' }[]", defaultValue: "default files", description: "Files used by the file-list folder variants." },
      { prop: "label", type: "string", defaultValue: "-", description: "Optional label shown below the folder." },
      { prop: "size", type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Folder size." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
      { prop: "onClick", type: "() => void", defaultValue: "-", description: "Optional click handler for the folder wrapper." },
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

  "magnetic-spotlight-marquee": {
    dependencies: "npm install gsap clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "The component uses GSAP for high-performance marquee scrolling and pointer-tracking physics.",
      "Requires parent container to be relatively or absolutely positioned.",
      "Since it relies on 'mix-blend-difference', the text colors are automatically inverted based on the background color.",
    ],
    usageCode: `import { MagneticSpotlightMarquee } from "@/components/ui/magnetic-spotlight-marquee"

export function SpotlightMarqueeDemo() {
  return (
    <MagneticSpotlightMarquee />
  )
}`,
    props: [
      { prop: "images", type: "string[]", defaultValue: "DEFAULT_IMAGES", description: "Array of image URLs to use in the infinite marquee track." },
      { prop: "title", type: "string[]", defaultValue: "['VengeanceUI']", description: "Array representing lines of the main title. Each element is rendered on its own line." },
      { prop: "subtitle", type: "string[]", defaultValue: "['BUILD FASTER', 'SHIP BETTER']", description: "Array representing lines of the subtitle." },
      { prop: "paragraphs", type: "string[][]", defaultValue: "-", description: "Array of paragraph blocks. Each paragraph block is an array of strings representing individual text lines for the 'wake effect'." },
      { prop: "navEmail", type: "string", defaultValue: "'hello@vengeance.ui'", description: "The email address displayed in the top navigation bar." },
      { prop: "navLinks", type: "string", defaultValue: "'Documentation, Components, GitHub'", description: "Links displayed in the top navigation bar." },
      { prop: "footerText", type: "string", defaultValue: "-", description: "Text displayed at the bottom of the component." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
    ],
  },
  
  "ripple-displacement-slider": {
    dependencies: "npm install three @types/three gsap clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "This component requires Three.js for WebGL displacement effects and GSAP for timing.",
      "The component auto-loops every 5 seconds. Provide your own images via the 'slides' prop.",
      "The component detects window width and reduces animation duration slightly on mobile for a snappier feel.",
    ],
    usageCode: `import { RippleDisplacementSlider } from "@/components/ui/ripple-displacement-slider"

export function RippleDisplacementSliderDemo() {
  return (
    <div className="h-[600px] w-full">
      <RippleDisplacementSlider />
    </div>
  )
}`,
    props: [
      { prop: "slides", type: "RippleSlide[]", defaultValue: "DEFAULT_SLIDES", description: "Array of slides containing titles, descriptions, and background images." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes applied to the container." },
    ],
    additionalPropSections: [
      {
        title: "RippleSlide",
        data: [
          { prop: "title", type: "string", defaultValue: "-", description: "Main heading text for the slide." },
          { prop: "description", type: "string", defaultValue: "-", description: "Secondary descriptive text." },
          { prop: "image", type: "string", defaultValue: "-", description: "URL to the image used as the background texture." },
        ]
      }
    ]
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

  "image-reveal-list": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { ImageRevealList, type ImageRevealListItem } from "@/components/ui/image-reveal-list"

const items: ImageRevealListItem[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    subtitle: "F. Scott Fitzgerald",
    image: "/covers/gatsby.jpg",
    number: "01",
    href: "/books/gatsby",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    subtitle: "Harper Lee",
    image: "/covers/mockingbird.jpg",
    number: "02",
    href: "/books/mockingbird",
  },
]

export function ImageRevealListDemo() {
  return <ImageRevealList items={items} />
}`,
    props: [
      { prop: "items", type: "ImageRevealListItem[]", defaultValue: "-", description: "List rows to render with their hover preview image." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the wrapper." },
    ],
    additionalPropSections: [
      {
        title: "ImageRevealListItem",
        data: [
          { prop: "id", type: "string", defaultValue: "-", description: "Stable key for the item." },
          { prop: "title", type: "string", defaultValue: "-", description: "Primary label shown in the row and used as the preview image alt text." },
          { prop: "subtitle", type: "string", defaultValue: "-", description: "Optional secondary label aligned to the end of the row." },
          { prop: "image", type: "string", defaultValue: "-", description: "Image URL shown when the row is hovered." },
          { prop: "number", type: "string", defaultValue: "-", description: "Small leading index or label shown before the title." },
          { prop: "href", type: "string", defaultValue: "'#'", description: "Optional link target for the row." },
        ],
      },
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

  "fluid-morph-bg": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { FluidMorphBg } from "@/components/ui/fluid-morph-bg"

export function FluidMorphBgDemo() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <FluidMorphBg className="absolute inset-0" />
      <h2 className="relative z-10 text-white text-5xl font-serif">Fluid Life</h2>
    </div>
  )
}`,
    props: [
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the container." },
      { prop: "duration", type: "number", defaultValue: "4", description: "The duration of the morphing animation in seconds." },
      { prop: "colors", type: "string[]", defaultValue: "['#4f4fea', '#0c27cf', ...]", description: "The base color palette to use for the morphing shapes." },
      { prop: "backgroundColor", type: "string", defaultValue: "'#282886'", description: "Background color for the scene container." },
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

  "notch-navbar": {
    dependencies: "npm install lucide-react framer-motion next-themes clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { NotchNavbar } from "@/components/ui/notch-navbar"

export function NotchNavbarDemo() {
  return (
    <NotchNavbar />
  )
}`,
    props: [
      { prop: "logo", type: "React.ReactNode", defaultValue: "-", description: "Custom logo to render in the center." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes." },
    ],
  },

  "gooey-search": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "The gooey blob effect is created by an inline SVG <filter> (feGaussianBlur + feColorMatrix). The component injects it automatically with a unique id per instance, so you can render multiple search bars on one page without conflicts.",
      "Colors are driven by the --foreground and --background CSS variables (standard shadcn tokens), so the component adapts to light and dark themes out of the box.",
      "Safari and Chrome-on-iOS don't render the SVG goo filter reliably, so the component auto-detects them and falls back to a clean, non-gooey layout.",
    ],
    usageCode: `import { GooeySearch } from "@/components/ui/gooey-search"

const FRAMEWORKS = ["React", "Vue", "Svelte", "Next.js", "Solid", "Astro"]

export function GooeySearchDemo() {
  return (
    <GooeySearch
      items={FRAMEWORKS}
      placeholder="Search frameworks..."
      buttonLabel="Search"
      maxResults={4}
      onSelect={(item) => console.log("Selected:", item)}
    />
  )
}`,
    props: [
      { prop: "items", type: "string[]", defaultValue: "[]", description: "Strings to search through locally (case-insensitive substring match). Ignored when onSearch is provided." },
      { prop: "onSearch", type: "(query: string) => Promise<string[]> | string[]", defaultValue: "-", description: "Custom search function for external/async data sources. Overrides the local items filter when supplied." },
      { prop: "onSelect", type: "(item: string) => void", defaultValue: "-", description: "Called when a result item is clicked or activated with Enter." },
      { prop: "placeholder", type: "string", defaultValue: "'Type to search...'", description: "Placeholder text shown inside the expanded search input." },
      { prop: "buttonLabel", type: "string", defaultValue: "'Search'", description: "Label shown on the collapsed pill button before it expands." },
      { prop: "debounceMs", type: "number", defaultValue: "500", description: "Delay in milliseconds before the search runs after the last keystroke." },
      { prop: "maxResults", type: "number", defaultValue: "5", description: "Maximum number of result pills to render." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the outermost wrapper." },
    ],
  },

  "animated-tooltip": {
    dependencies: "npm install framer-motion clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "Each tooltip picks a shape + animation via the `variant` prop: cora, smaug, dori, gram, indis, malva, or sadoc.",
      "Colors use the --foreground and --background CSS variables (standard shadcn tokens), so the bubble and text adapt to light and dark themes automatically.",
      "The tooltip opens on hover and keyboard focus, and is positioned above the trigger. Give it room above in tight layouts.",
    ],
    usageCode: `import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

export function AnimatedTooltipDemo() {
  return (
    <p className="text-lg">
      Not all those who{" "}
      <AnimatedTooltip variant="cora" content="Be yourself; everyone else is already taken.">
        wander
      </AnimatedTooltip>{" "}
      are lost.
    </p>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "The trigger label shown inline (usually a word or short phrase)." },
      { prop: "content", type: "React.ReactNode", defaultValue: "-", description: "The tooltip body revealed on hover or focus." },
      { prop: "variant", type: '"cora" | "smaug" | "dori" | "gram" | "indis" | "malva" | "sadoc"', defaultValue: "'cora'", description: "Which shape and animation style to use." },
      { prop: "accentColor", type: "string", defaultValue: "'#6fbb95'", description: "Trigger text color while the tooltip is open." },
      { prop: "shapeColor", type: "string", defaultValue: "'var(--foreground)'", description: "Fill color of the tooltip bubble." },
      { prop: "textColor", type: "string", defaultValue: "'var(--background)'", description: "Color of the tooltip text." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the inline wrapper." },
    ],
  },

  "wave-grid-background": {
    dependencies: "npm install three clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "Built on raw Three.js (no React Three Fiber needed). It fills its parent, so wrap it in a positioned container with an explicit height.",
      "The ripples follow the cursor over the canvas; when the pointer is idle it emits gentle random ripples (toggle with `autoAnimate`).",
      "The wave motion and peak coloring run in a custom GLSL vertex/fragment shader injected via onBeforeCompile, with a vignette + RGB-shift post-processing pass.",
      "Everything is disposed on unmount (renderer, geometries, materials, textures, listeners), so it is safe to mount and unmount.",
    ],
    usageCode: `import { WaveGridBackground } from "@/components/ui/wave-grid-background"

export function WaveGridBackgroundDemo() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-xl">
      <WaveGridBackground colorBase="#ffffff" colorHigh="#0055ff">
        <div className="flex h-full w-full items-center justify-center">
          <h2 className="text-6xl font-bold text-white drop-shadow-lg">
            Wave Grid
          </h2>
        </div>
      </WaveGridBackground>
    </div>
  )
}`,
    props: [
      { prop: "children", type: "React.ReactNode", defaultValue: "-", description: "Content rendered on top of the animated background." },
      { prop: "gridSize", type: "number", defaultValue: "40", description: "Grid resolution (N×N cubes)." },
      { prop: "colorBase", type: "string", defaultValue: "'#ffffff'", description: "Base cube color and scene tint." },
      { prop: "colorHigh", type: "string", defaultValue: "'#0055ff'", description: "Color of the wave peaks." },
      { prop: "waveAmplitude", type: "number", defaultValue: "0.4", description: "Peak displacement multiplier." },
      { prop: "waveSpeed", type: "number", defaultValue: "6.0", description: "Wavefront expansion speed (world units/sec)." },
      { prop: "waveFrequency", type: "number", defaultValue: "1.2", description: "Spatial oscillation frequency." },
      { prop: "waveWidth", type: "number", defaultValue: "3.0", description: "Gaussian half-width of the wave ring." },
      { prop: "waveMaxHeight", type: "number", defaultValue: "0.4", description: "Hard clamp on displacement height." },
      { prop: "waveJitter", type: "number", defaultValue: "0.2", description: "Per-cube positional jitter." },
      { prop: "autoAnimate", type: "boolean", defaultValue: "true", description: "Emit gentle random ripples while the cursor is idle." },
      { prop: "vignette", type: "boolean", defaultValue: "true", description: "Apply the vignette + RGB-shift post-processing pass." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional classes for the wrapper element." },
    ],
  },

  "interactive-particles": {
    dependencies: "npm install three gsap clsx tailwind-merge",
    includeUtils: true,
    manualNotes: [
      "Provide a starting image via `src`, and/or let visitors supply their own with the built-in upload control (`allowUpload`, on by default). The uploaded image immediately regenerates the particle pattern.",
      "Bright pixels become particles and dark ones are discarded (tune the cutoff with `threshold`); high-contrast images (light shapes on black) look best.",
      "Uploaded images are downscaled to `maxDimension` (default 480px) before sampling, so any size stays performant — one kept pixel becomes one particle.",
      "External `src` images must be same-origin or CORS-enabled (the component reads pixels via a canvas). Uploaded files are read locally as object URLs, so no CORS applies.",
      "Built on raw Three.js + GSAP (no React Three Fiber). It fills its parent, so give the wrapper an explicit height. Everything — including the WebGL context — is disposed on unmount.",
    ],
    usageCode: `import { InteractiveParticles } from "@/components/ui/interactive-particles"

export function InteractiveParticlesDemo() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-xl bg-black">
      {/* allowUpload adds an "Upload image" button; drop in any image
          and the particle pattern regenerates from it. */}
      <InteractiveParticles src="/particles.png" background="#000000" allowUpload />
    </div>
  )
}`,
    props: [
      { prop: "src", type: "string", defaultValue: "-", description: "Initial image URL to sample particles from. Optional when uploads are allowed." },
      { prop: "allowUpload", type: "boolean", defaultValue: "true", description: "Show an 'Upload image' control so users can supply their own image." },
      { prop: "uploadLabel", type: "string", defaultValue: "'Upload image'", description: "Label for the upload control." },
      { prop: "onUpload", type: "(file: File) => void", defaultValue: "-", description: "Fired with the uploaded File whenever the user picks an image." },
      { prop: "maxDimension", type: "number", defaultValue: "480", description: "Longest edge the source is downscaled to before sampling (caps particle count)." },
      { prop: "background", type: "string", defaultValue: "'#000000'", description: "Wrapper background color." },
      { prop: "color", type: "string", defaultValue: "'#ffffff'", description: "Particle tint. Keeps the image's greyscale tones by default." },
      { prop: "size", type: "number", defaultValue: "1.2", description: "Steady-state particle size multiplier." },
      { prop: "randomness", type: "number", defaultValue: "1.8", description: "Steady-state random spread of the particles." },
      { prop: "depth", type: "number", defaultValue: "3", description: "Steady-state depth (z displacement)." },
      { prop: "touchRadius", type: "number", defaultValue: "0.15", description: "Cursor touch radius (0–1)." },
      { prop: "threshold", type: "number", defaultValue: "34", description: "Brightness cutoff (0–255) below which pixels are discarded." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional classes for the wrapper element." },
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
    dependencies: "npm install framer-motion clsx tailwind-merge",
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

  "beam-tunnel": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { BeamTunnel } from "@/components/ui/beam-tunnel"

export function Demo() {
  return (
    <div className="relative w-full h-[400px]">
      <BeamTunnel className="absolute inset-0" />
    </div>
  )
}`,
    props: [
      { prop: "beamCount", type: "number", defaultValue: "3", description: "Number of beams per wall (top, bottom, left, right)." },
      { prop: "beamColors", type: "string[]", defaultValue: "['linear-gradient(...)']", description: "Array of CSS gradients to randomly apply to beams." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the tunnel container." },
    ],
  },


  "typing-keyboard": {
    dependencies: "npm install clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { TypingKeyboard } from "@/components/ui/typing-keyboard"

export function Demo() {
  return (
    <TypingKeyboard
      autoTypeText="Hello from Vengeance UI!"
      typingSpeed={[50, 130]}
      scale={0.75}
    />
  )
}`,
    props: [
      { prop: "autoTypeText", type: "string", defaultValue: "\"Hello...\"", description: "Text the keyboard auto-types in a loop." },
      { prop: "typingSpeed", type: "[number, number]", defaultValue: "[40, 120]", description: "Min/max delay in ms between characters." },
      { prop: "accentColor", type: "string", defaultValue: "\"#3b82f6\"", description: "Accent color for modifier keys and screen." },
      { prop: "secondaryAccent", type: "string", defaultValue: "\"#a855f7\"", description: "Secondary accent for the enter key." },
      { prop: "scale", type: "number", defaultValue: "0.8", description: "Scale factor." },
    ],
  },
  
  "scroll-dissolve-reveal": {
    dependencies: "npm install @react-three/fiber @react-three/drei three framer-motion clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { ScrollDissolveReveal } from "@/components/ui/scroll-dissolve-reveal"

export function ScrollDissolveRevealDemo() {
  return (
    <ScrollDissolveReveal
      imageFront="/front.jpg"
      imageBack="/back.jpg"
    />
  )
}`,
    props: [
      { prop: "imageFront", type: "string", defaultValue: "-", description: "The image to display initially and dissolve away." },
      { prop: "imageBack", type: "string", defaultValue: "-", description: "The image to reveal underneath the dissolve effect." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes for the sticky container." },
      { prop: "containerClassName", type: "string", defaultValue: "-", description: "Additional CSS classes for the outer scroll container." },
    ],
  },

  "solar-system": {
    dependencies: "npm install framer-motion lucide-react clsx tailwind-merge",
    includeUtils: true,
    usageCode: `import { SolarSystem } from "@/components/ui/solar-system"

export function SolarSystemDemo() {
  return (
    <SolarSystem
      title="Interactive Orbit Component"
      description="Showcase your integrations or technology ecosystem with our highly interactive 3D solar system component."
    />
  )
}`,
    props: [
      { prop: "centerLogo", type: "string | React.ReactNode", defaultValue: "OrbitIcon", description: "Logo element rendered in the center core. If not provided, renders a spinning Orbit icon." },
      { prop: "centerLogoAlt", type: "string", defaultValue: "\"Core Engine\"", description: "Alternate text description for screen readers." },
      { prop: "title", type: "string", defaultValue: "\"Compatible with your stack\"", description: "Headline text displayed in the header information section." },
      { prop: "description", type: "string", defaultValue: "\"Connect from any framework...\"", description: "Sub-headline text displayed in the header information section." },
      { prop: "orbits", type: "OrbitConfig[]", defaultValue: "DEFAULT_ORBITS", description: "Array of orbit configurations mapping items, radius classes, and speeds." },
      { prop: "className", type: "string", defaultValue: "-", description: "Additional CSS classes to override the outer container." },
    ],
    additionalPropSections: [
      {
        title: "OrbitConfig Interface",
        data: [
          { prop: "id", type: "string", defaultValue: "-", description: "Unique identifier for the orbit ring (e.g. 'inner', 'mid')." },
          { prop: "name", type: "string", defaultValue: "-", description: "Display name for the ring in filter options." },
          { prop: "radiusClass", type: "string", defaultValue: "-", description: "CSS variable representing orbit size (e.g. 'var(--radius-inner)')." },
          { prop: "radiusPx", type: "number", defaultValue: "-", description: "Absolute radius in pixels for positioning calculations." },
          { prop: "speed", type: "number", defaultValue: "-", description: "Standard rotation duration in seconds for one full loop." },
          { prop: "items", type: "SolarSystemItem[]", defaultValue: "-", description: "Collection of technology node items orbiting on this ring." },
        ]
      },
      {
        title: "SolarSystemItem Interface",
        data: [
          { prop: "id", type: "string", defaultValue: "-", description: "Unique identifier for the technology node." },
          { prop: "label", type: "string", defaultValue: "-", description: "Display label for the node." },
          { prop: "type", type: "string", defaultValue: "-", description: "Classification category label (e.g. 'Frontend Library')." },
          { prop: "badge", type: "string", defaultValue: "-", description: "Highlight badge text (e.g. 'Official SDK')." },
          { prop: "desc", type: "string", defaultValue: "-", description: "Detailed summary description of the technology." },
          { prop: "color", type: "string", defaultValue: "-", description: "Hex value of theme highlight color (e.g. '#61DAFB' for React)." },
          { prop: "svg", type: "React.ReactNode", defaultValue: "-", description: "Inline SVG element/icon to render inside the node." },
          { prop: "code", type: "string", defaultValue: "-", description: "Sample code snippet to display in the editor sidebar." },
        ]
      }
    ],
    credits: {
      author: "Siddh2024",
      github: "https://github.com/Siddh2024",
      linkedin: "https://www.linkedin.com/in/siddh-sharma-b0164430b/"
    }
  },
};
