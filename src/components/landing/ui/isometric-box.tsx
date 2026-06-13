"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface IsometricBoxProps {
  children?: ReactNode;
  className?: string;
  boxClassName?: string;      // Tailwind class for the stroke (e.g., "text-foreground")
  topFaceClassName?: string;  // Tailwind class for the fill (e.g., "fill-background")
  gridClassName?: string;     // Tailwind class for the grid (e.g., "text-muted-foreground")
  gridOpacity?: number;
}

export const IsometricBox = ({
  children,
  className = "",
  boxClassName = "text-neutral-400 dark:text-neutral-600", 
  topFaceClassName = "fill-neutral-100 dark:fill-neutral-800", 
  gridClassName = "text-neutral-400 dark:text-neutral-600",
  gridOpacity = 0.1,
}: IsometricBoxProps) => {
  
  const bottomWallPath = "M134.447 55C134.447 56.5621 133.35 57.9763 131.577 59L76.1514 91C72.325 93.2091 66.1213 93.2091 62.2949 91L6.86914 59C5.09658 57.9764 4 56.5618 4 55V40C4 41.4644 4.96359 42.7991 6.54492 43.8037L6.87012 44L62.2949 76C66.1213 78.2091 72.325 78.2091 76.1514 76L131.577 44C133.35 42.9763 134.447 41.5621 134.447 40V55Z";

  return (
    <motion.div 
      className={`relative w-[139px] h-[93px] group ${className}`}
      initial="initial"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      variants={{
        initial: { y: 0 },
        hover: { y: -10 } 
      }}
    >
      {/* 1. THE CONTENT LAYER */}
      <div 
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{
          transform: 'rotateX(60deg) rotateZ(45deg) translateZ(5px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="flex items-center justify-center">
          {children}
        </div>
      </div>

      {/* 2. THE SVG LAYER */}
      <svg
        width="139"
        height="93"
        viewBox="0 0 139 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-10 overflow-visible"
      >
        {/* Top Face Outline + Fill */}
        <path
          d="M63.3294 5.24609C66.6775 3.3131 72.1057 3.3131 75.4538 5.24609L130.459 37.0032C133.089 38.522 133.089 40.9844 130.459 42.5032L76.3198 73.7603C72.4935 75.9694 66.2897 75.9694 62.4634 73.7603L7.89154 42.2532C5.50007 40.8725 5.50007 38.6339 7.89154 37.2532L63.3294 5.24609Z"
          strokeWidth="1"
          className={cn(boxClassName, topFaceClassName)} // Applied Tailwind classes here
          stroke="currentColor" 
          // Note: Tailwind "fill-background" works because it maps to the SVG fill attribute
        />
        
        {/* Internal Grid Lines */}
        <path 
          d="M75.9273 5.51893L10.0593 43.5479M82.5128 9.32107L16.6448 47.35M89.0983 13.1232L23.2302 51.1521M95.6838 16.9253L29.8157 54.9543M102.269 20.7275L36.4012 58.7564M108.855 24.5296L42.9867 62.5585M115.44 28.3317L49.5722 66.3607M122.026 32.1339L56.1577 70.1628M128.611 35.936L62.7432 73.9649M62.755 5.51969L128.61 43.541M56.1682 9.32258L122.023 47.3439M49.5814 13.1255L115.436 51.1468M42.9946 16.9284L108.85 54.9497M36.4078 20.7313L102.263 58.7526M29.821 24.5342L95.6759 62.5555M23.2342 28.337L89.0891 66.3584M16.6474 32.1399L82.5023 70.1613M10.0606 35.9428L75.9155 73.9642" 
          stroke="currentColor"
          strokeOpacity={gridOpacity} 
          strokeWidth="0.5"
          className={gridClassName}
        />

        {/* BOTTOM WALLS */}
        <path
          d={bottomWallPath}
          stroke="currentColor"
          strokeWidth="1"
          fill="transparent"
          className={boxClassName}
        />

        {/* BOTTOM WALLS - Animated Hover Gradient */}
        <motion.path
          d={bottomWallPath}
          fill="url(#bottom-wall-gradient)"
          stroke="none"
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
        />

        <defs>
          <linearGradient id="bottom-wall-gradient" x1="69.2236" y1="40" x2="69.2236" y2="92.6569" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" className="text-primary" stopOpacity="0.5" />
            <stop offset="0.53" stopColor="currentColor" className="text-primary" />
            <stop offset="1" stopColor="currentColor" className="text-primary" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};