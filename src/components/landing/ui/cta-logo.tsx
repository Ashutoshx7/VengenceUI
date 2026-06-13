'use client';

import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CTALogoProps extends SVGMotionProps<SVGSVGElement> {
  size?: number | string;
  fillClassName?: string; // Specifically for the inner colored paths
  strokeWidth?: number | string;
}

export function CTALogo({ 
  size = 48, 
  className, 
  fillClassName, 
  strokeWidth = "1", 
  ...props 
}: CTALogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 93 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      // The outer className controls the stroke by default
      className={cn("text-black", className)}
      {...props}
    >
      {/* Colored Shapes 
          We use fillClassName here. If not provided, it defaults to a soft red/pink 
      */}
      <g className={cn("text-zinc-500", fillClassName)}>
        <path 
          d="M58.0228 54.7272L55.82 67.6407L87.354 105.4L58.0228 54.7272Z" 
          fill="currentColor" 
        />
        <path 
          d="M44.2266 0.5L36.4591 49.4339L40.9805 48.4661L55.82 28.4075L44.2266 0.5Z" 
          fill="currentColor" 
        />
        <path 
          d="M87.354 105.4L59.5904 37.6131L46.5453 51.6789L55.82 53.4554L50.0233 60.5879L0.751465 55.3996L44.2266 80.5L55.82 67.6407L58.0228 54.7272L87.354 105.4Z" 
          fill="currentColor" 
        />
        <path 
          d="M44.2266 0.5L0.751465 55.3996L36.4591 49.4339L44.2266 0.5Z" 
          fill="currentColor" 
        />
      </g>

      {/* Outline Paths */}
      <path 
        d="M40.9805 48.4661L44.9805 48.4661L59.82 28.4075L48.2266 0.500009L44.2266 0.5M40.9805 48.4661L55.82 28.4075L44.2266 0.5M40.9805 48.4661L36.4591 49.4339M57.7515 69.9534L48.2266 80.5L44.2266 80.5M0.751465 55.3996L44.2266 0.5M0.751465 55.3996L36.4591 49.4339M0.751465 55.3996L50.0233 60.5879L55.82 53.4554L46.5453 51.6789L59.5904 37.6131M0.751465 55.3996L44.2266 80.5M44.2266 0.5L36.4591 49.4339M87.354 105.4L59.5904 37.6131M87.354 105.4L58.0228 54.7272L55.82 67.6407M87.354 105.4L55.82 67.6407M87.354 105.4L91.354 105.4L63.5904 37.6131L59.5904 37.6131M44.2266 80.5L55.82 67.6407" 
        stroke="currentColor" 
        strokeWidth={strokeWidth}
      />
    </motion.svg>
  );
}