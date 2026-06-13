"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface PerspectiveGridProps {
    /** Additional CSS classes for the grid container */
    className?: string;
    /** Number of tiles per row/column (default: 20) */
    gridSize?: number;
    /** Whether to show the gradient overlay (default: true) */
    showOverlay?: boolean;
    /** Fade radius percentage for the gradient overlay (default: 80) */
    fadeRadius?: number;
}


export const PerspectiveGrid = React.memo(({
    className,
    gridSize = 20,
    showOverlay = true,
    fadeRadius = 80,
}: PerspectiveGridProps) => {
    // Use a CSS-only grid instead of rendering gridSize*gridSize individual DOM nodes.
    // A repeating-linear-gradient draws the tile borders with zero DOM cost.
    const gridStyle = useMemo(() => {
        const cellSize = `calc(100% / ${gridSize})`;
        return {
            perspective: "2000px",
            transformStyle: "preserve-3d" as const,
            contain: "paint" as const,
        };
    }, [gridSize]);

    const innerStyle = useMemo(() => ({
        left: "50%",
        top: "50%",
        transform:
            "translate(-50%, -50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(2)",
        transformStyle: "preserve-3d" as const,
        // Draw tile borders via CSS background-image instead of DOM elements
        backgroundImage: `
            linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px)
        `,
        backgroundSize: `calc(100% / ${gridSize}) calc(100% / ${gridSize})`,
        willChange: "transform" as const,
    }), [gridSize]);

    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden bg-background",
                "[--fade-stop:var(--background)]",
                "[--grid-line-color:rgba(0,0,0,0.1)] dark:[--grid-line-color:rgba(255,255,255,0.05)]",
                className
            )}
            style={gridStyle}
        >
            <div
                className="absolute w-7xl aspect-square origin-center"
                style={innerStyle}
            />

            {/* Radial Gradient Mask (Overlay) */}
            {showOverlay && (
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(circle, transparent 25%, var(--fade-stop) ${fadeRadius}%)`,
                    }}
                />
            )}
        </div>
    );
});

PerspectiveGrid.displayName = "PerspectiveGrid";

export default PerspectiveGrid;
