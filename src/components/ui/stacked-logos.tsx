"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* =============================================================================
   StackedLogos Component
   
   Multiple logo sets that animate in/out while stacked on top of each other.
   Uses CSS grid with separator lines for Vercel-style grid pattern.
   Both gradient AND border glow follow mouse position.
============================================================================= */

export interface StackedLogosProps {
  /** Array of logo groups - each group is an array of React nodes */
  logoGroups: React.ReactNode[][];
  /** Animation duration in seconds. Default: 30 */
  duration?: number;
  /** Stagger factor for animation timing between groups. Default: 0 */
  stagger?: number;
  /** Width of each logo container. Default: "200px" */
  logoWidth?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * StackedLogos Component
 *
 * Displays multiple logo groups that animate in/out while stacked.
 * Great for showcasing many partners/clients in a compact space.
 */
export const StackedLogos = ({
  logoGroups,
  duration = 30,
  stagger = 0,
  logoWidth = "200px",
  className,
}: StackedLogosProps) => {
  const itemCount = logoGroups[0]?.length || 0;
  const columns = logoGroups.length;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  // Track mouse position for glow effect
  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || !gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    },
    [],
  );

  // Calculate border positions for the mask
  const borderWidth = parseInt(logoWidth) || 200;
  const cellHeight = 128; // py-16 = 64px * 2

  return (
    <div
      ref={containerRef}
      className={cn("stacked-logos relative w-auto", className)}
      style={
        {
          "--duration": duration,
          "--items": itemCount,
          "--lists": columns,
          "--stagger": stagger,
          "--logo-width": logoWidth,
          "--cell-height": `${cellHeight}px`,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
    >
      {/* Grid Container */}
      <div
        ref={gridRef}
        className="grid relative mx-auto w-fit"
        style={{
          gridTemplateColumns: `repeat(${columns}, ${logoWidth})`,
        }}
      >
        {/* Mouse-following glow overlay for background */}
        <div
          className="stacked-logos__glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 z-10"
          style={{
            background:
              "radial-gradient(500px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(251,191,36,0.1), transparent 70%)",
          }}
        />

        {/* Mouse-following glow for borders - single overlay with gradient */}
        <div
          className="stacked-logos__border-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 z-20"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(251,191,36,1), transparent 40%)",
            maskImage: `
                            repeating-linear-gradient(to right, transparent, transparent calc(${logoWidth} - 1px), black calc(${logoWidth} - 1px), black ${logoWidth}),
                            linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent calc(100% - 1px), black calc(100% - 1px), black 100%)
                        `,
            WebkitMaskImage: `
                            repeating-linear-gradient(to right, transparent, transparent calc(${logoWidth} - 1px), black calc(${logoWidth} - 1px), black ${logoWidth}),
                            linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent calc(100% - 1px), black calc(100% - 1px), black 100%)
                        `,
            maskComposite: "add",
            WebkitMaskComposite: "source-over",
          }}
        />

        {/* Left edge glow */}
        <div
          className="stacked-logos__border-glow pointer-events-none absolute top-0 bottom-0 left-0 w-px opacity-0 transition-opacity duration-300 z-20"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(251,191,36,1), transparent 40%)",
          }}
        />

        {/* Logo Groups */}
        {logoGroups.map((logos, groupIndex) => (
          <div
            key={groupIndex}
            className="stacked-logos__cell relative grid"
            style={
              {
                "--index": groupIndex,
                gridTemplate: "1fr / 1fr",
              } as React.CSSProperties
            }
          >
            {/* Base border lines - gray */}
            <div className="absolute top-0 bottom-0 right-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="absolute left-0 right-0 bottom-0 h-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="absolute left-0 right-0 top-0 h-px bg-zinc-200 dark:bg-zinc-800" />
            {groupIndex === 0 && (
              <div className="absolute top-0 bottom-0 left-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            )}

            {/* Stacked logos */}
            {logos.map((logo, logoIndex) => (
              <div
                key={logoIndex}
                className="stacked-logos__item col-start-1 row-start-1 grid place-items-center py-16 px-8"
                data-logo
                style={{ "--i": logoIndex } as React.CSSProperties}
              >
                <div className="stacked-logos__logo w-full h-8 flex items-center justify-center [&>svg]:h-full [&>svg]:w-auto [&>svg]:fill-zinc-700 dark:[&>svg]:fill-zinc-300 [&>img]:h-full [&>img]:w-auto [&>img]:object-contain [&>img]:grayscale [&>img]:brightness-50 dark:[&>img]:brightness-125">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

StackedLogos.displayName = "StackedLogos";

export default StackedLogos;
