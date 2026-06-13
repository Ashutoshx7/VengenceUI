"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const lineHoverStyles = `
.link-hover {
  cursor: pointer;
  position: relative;
  display: inline-flex;
  width: fit-content;
  white-space: nowrap;
  color: currentColor;
  text-decoration: none;
  outline: none;
}

.link-hover::before,
.link-hover::after {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: 1px;
  background: currentColor;
  pointer-events: none;
}

.link-hover::before {
  content: "";
}

.link-hover:focus-visible {
  border-radius: 0.25rem;
  outline: 2px solid color-mix(in srgb, currentColor 45%, transparent);
  outline-offset: 0.25rem;
}

.link-hover--slide::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 100% 50%;
  transition: transform 0.3s ease;
}

.link-hover--slide:hover::before,
.link-hover--slide:focus-visible::before {
  transform: scale3d(1, 1, 1);
  transform-origin: 0% 50%;
}

.link-hover--double::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 100% 50%;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.link-hover--double:hover::before,
.link-hover--double:focus-visible::before {
  transform: scale3d(1, 1, 1);
  transform-origin: 0% 50%;
  transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
}

.link-hover--double::after {
  content: "";
  top: calc(100% + 4px);
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.link-hover--double:hover::after,
.link-hover--double:focus-visible::after {
  transform: scale3d(1, 1, 1);
  transform-origin: 100% 50%;
  transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
}

.link-hover--grow::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 100% 50%;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}

.link-hover--grow:hover::before,
.link-hover--grow:focus-visible::before {
  transform: scale3d(1, 2, 1);
  transform-origin: 0% 50%;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
}

.link-hover--grow::after {
  content: "";
  top: calc(100% + 4px);
  transform: scale3d(0, 1, 1);
  transform-origin: 100% 50%;
  transition: transform 0.4s 0.1s cubic-bezier(0.2, 1, 0.8, 1);
}

.link-hover--grow:hover::after,
.link-hover--grow:focus-visible::after {
  transform: scale3d(1, 1, 1);
  transform-origin: 0% 50%;
}

.link-hover--strike {
  padding-inline: 0.625rem;
}

.link-hover--strike::before {
  top: 50%;
  height: 2px;
  transform: scale3d(0, 1, 1);
  transform-origin: 100% 50%;
  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
}

.link-hover--strike:hover::before,
.link-hover--strike:focus-visible::before {
  transform: scale3d(1, 1, 1);
  transform-origin: 0% 50%;
}

.link-hover--strike span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
}

.link-hover--strike:hover span,
.link-hover--strike:focus-visible span {
  transform: scale3d(1.08, 1.08, 1);
}

.link-hover--fade::before,
.link-hover--fade::after {
  opacity: 0;
  transform: translate3d(0, 3px, 0);
  transform-origin: 50% 0%;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1), opacity 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}

.link-hover--fade::after {
  content: "";
  left: 15%;
  top: calc(100% + 4px);
  width: 70%;
}

.link-hover--fade:hover::before,
.link-hover--fade:hover::after,
.link-hover--fade:focus-visible::before,
.link-hover--fade:focus-visible::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.link-hover--fade::before,
.link-hover--fade:hover::after,
.link-hover--fade:focus-visible::after {
  transition-delay: 0.1s;
}

.link-hover--pulse::before {
  top: 100%;
  height: 10px;
  opacity: 0;
}

.link-hover--pulse:hover::before,
.link-hover--pulse:focus-visible::before {
  opacity: 1;
  animation: line-hover-line-up 0.3s ease forwards;
}

.link-hover--pulse::after {
  content: "";
  opacity: 0;
  transition: opacity 0.3s;
}

.link-hover--pulse:hover::after,
.link-hover--pulse:focus-visible::after {
  opacity: 1;
  transition-delay: 0.3s;
}

.link-hover--swap::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
  transition: transform 0.3s ease;
}

.link-hover--swap:hover::before,
.link-hover--swap:focus-visible::before {
  transform: scale3d(1, 1, 1);
}

.link-hover--swap::after {
  content: "";
  top: calc(100% + 4px);
  transform-origin: 100% 50%;
  transition: transform 0.3s ease;
}

.link-hover--swap:hover::after,
.link-hover--swap:focus-visible::after {
  transform: scale3d(0, 1, 1);
}

.link-hover--sweep {
  padding-inline: 0.25rem;
}

.link-hover--sweep::before {
  top: 0;
  height: 100%;
  background: color-mix(in srgb, currentColor 12%, transparent);
  opacity: 0;
}

.link-hover--sweep:hover::before,
.link-hover--sweep:focus-visible::before {
  opacity: 1;
  animation: line-hover-cover-up 0.3s ease forwards;
}

.link-hover--sweep::after {
  content: "";
  transition: opacity 0.3s ease;
}

.link-hover--sweep:hover::after,
.link-hover--sweep:focus-visible::after {
  opacity: 0;
}

.link-hover--bounce::before {
  height: 7px;
  border-radius: 999px;
  transform: scale3d(1, 1, 1);
  transition: transform 0.2s, opacity 0.2s;
  transition-timing-function: cubic-bezier(0.2, 0.57, 0.67, 1.53);
}

.link-hover--bounce:hover::before,
.link-hover--bounce:focus-visible::before {
  opacity: 1;
  transform: scale3d(1.18, 0.1, 1);
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
}

.link-hover--bounce span {
  display: inline-block;
  transform: translate3d(0, -4px, 0);
  transition: transform 0.2s 0.05s cubic-bezier(0.2, 0.57, 0.67, 1.53);
}

.link-hover--bounce:hover span,
.link-hover--bounce:focus-visible span {
  transform: translate3d(0, 0, 0);
  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
}

.link-hover__graphic {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: currentColor;
  stroke-width: 1px;
  pointer-events: none;
}

.link-hover__graphic--stroke path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}

.link-hover:hover .link-hover__graphic--stroke path,
.link-hover:focus-visible .link-hover__graphic--stroke path {
  stroke-dashoffset: 0;
}

.link-hover--arc::before,
.link-hover--scribble::before {
  display: none;
}

.link-hover__graphic--arc {
  left: -23%;
  top: 73%;
}

.link-hover__graphic--arc path {
  transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
}

.link-hover:hover .link-hover__graphic--arc path,
.link-hover:focus-visible .link-hover__graphic--arc path {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
}

.link-hover__graphic--scribble {
  top: 100%;
}

.link-hover__graphic--scribble path {
  transition: stroke-dashoffset 0.6s cubic-bezier(0.7, 0, 0.3, 1);
}

.link-hover:hover .link-hover__graphic--scribble path,
.link-hover:focus-visible .link-hover__graphic--scribble path {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
}

@keyframes line-hover-line-up {
  0% {
    transform: scale3d(1, 0.045, 1);
    transform-origin: 50% 100%;
  }
  50% {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 100%;
  }
  51% {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 0%;
  }
  100% {
    transform: scale3d(1, 0.045, 1);
    transform-origin: 50% 0%;
  }
}

@keyframes line-hover-cover-up {
  0% {
    transform: scale3d(1, 0.045, 1);
    transform-origin: 50% 100%;
  }
  50% {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 100%;
  }
  51% {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 0%;
  }
  100% {
    transform: scale3d(1, 0.045, 1);
    transform-origin: 50% 0%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .link-hover,
  .link-hover *,
  .link-hover::before,
  .link-hover::after {
    animation: none !important;
    transition-duration: 0.01ms !important;
  }
}
`;

/**
 * Line Hover Link Variants
 * 
 * slide    - Line slides in from right to left
 * double   - Two lines animate with different timings
 * grow     - Line grows thicker on hover
 * strike   - Strikethrough effect with text scale
 * fade     - Lines fade up with stagger delay
 * pulse    - Line pulses up and down
 * swap     - Two lines go opposite directions
 * sweep    - Full background cover sweep
 * bounce   - Bouncy squish animation
 * arc      - SVG arc stroke draws in
 * scribble - SVG scribble stroke draws in
 */
export type LineHoverVariant =
    | "slide"
    | "double"
    | "grow"
    | "strike"
    | "fade"
    | "pulse"
    | "swap"
    | "sweep"
    | "bounce"
    | "arc"
    | "scribble";

export interface LineHoverLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The animation variant */
    variant?: LineHoverVariant;
    /** Link content */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}

/**
 * SVG Arc Graphic - draws an arc stroke on hover
 */
const ArcGraphic = () => (
    <svg
        className="link-hover__graphic link-hover__graphic--stroke link-hover__graphic--arc"
        width="100%"
        height="18"
        viewBox="0 0 59 18"
    >
        <path
            d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
            pathLength="1"
        />
    </svg>
);

/**
 * SVG Scribble Graphic - draws a scribble stroke on hover
 */
const ScribbleGraphic = () => (
    <svg
        className="link-hover__graphic link-hover__graphic--stroke link-hover__graphic--scribble"
        width="100%"
        height="9"
        viewBox="0 0 101 9"
    >
        <path
            d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
            pathLength="1"
        />
    </svg>
);

/**
 * LineHoverLink Component
 * 
 * A link component with beautiful underline hover animations.
 * Supports 11 different animation variants.
 * 
 * @example
 * ```tsx
 * <LineHoverLink variant="slide" href="/about">
 *   Learn more
 * </LineHoverLink>
 * ```
 */
export const LineHoverLink = React.forwardRef<
    HTMLAnchorElement,
    LineHoverLinkProps
>(({ variant = "slide", children, className, ...props }, ref) => {
    // Variants that need span wrapper for text animation
    const needsSpan = ["strike", "bounce", "arc", "scribble"].includes(variant);

    // Variants that need SVG graphics
    const svgVariant =
        variant === "arc" ? "arc" : variant === "scribble" ? "scribble" : null;

    return (
        <>
            <style>{lineHoverStyles}</style>
            <a
                ref={ref}
                className={cn("link-hover", `link-hover--${variant}`, className)}
                {...props}
            >
                {needsSpan ? <span>{children}</span> : children}
                {svgVariant === "arc" && <ArcGraphic />}
                {svgVariant === "scribble" && <ScribbleGraphic />}
            </a>
        </>
    );
});

LineHoverLink.displayName = "LineHoverLink";

export default LineHoverLink;
