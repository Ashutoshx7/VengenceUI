'use client';

import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CTABoxProps extends SVGMotionProps<SVGSVGElement> {
  size?: number | string;
  bgClassName?: string; // For that specific gray background fill
}

export function CTABox({ 
  size = 48, 
  className, 
  bgClassName, 
  ...props 
}: CTABoxProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 101 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className controls the stroke color (defaults to black)
      className={cn("text-black", className)}
      {...props}
    >
      <path
        d="M40.0948 53.8501L39.7116 64.9281M36.2635 51.5581L35.8804 62.6361M2.49351 32.076L44.9635 56.5241C47.8955 58.2119 52.6491 58.2119 55.581 56.5241L76.816 44.3L98.051 32.076C100.983 30.3882 100.983 27.6517 98.051 25.964L55.581 1.51584C52.6491 -0.171948 47.8955 -0.171947 44.9635 1.51584L2.49351 25.964C-0.438431 27.6517 -0.43843 30.3882 2.49351 32.076ZM3.23152 30.7417L45.0473 54.8132C47.9793 56.501 52.7329 56.501 55.6648 54.8132L97.1489 30.9327C99.1646 29.7723 99.1646 27.891 97.1489 26.7307L55.0012 2.46814C52.4358 0.991326 48.2764 0.991326 45.7109 2.46814L3.23152 26.9217C1.39905 27.9765 1.39905 29.6868 3.23152 30.7417ZM100.206 40.48C100.206 41.6735 99.3649 42.7539 98.0063 43.536L55.5362 67.9842C52.6042 69.672 47.8506 69.672 44.9186 67.9842L2.44849 43.536C1.09026 42.754 0.25 41.6733 0.25 40.48V29.02C0.25 30.1388 0.988354 31.1585 2.20005 31.926L2.44923 32.076L44.9186 56.5241C47.8506 58.2119 52.6042 58.2119 55.5362 56.5241L98.0063 32.076C99.3649 31.2939 100.206 30.2134 100.206 29.02V40.48Z"
        stroke="currentColor"
        strokeWidth="0.5"
        // bgClassName will control the fill color (the "gray" part)
        className={cn("fill-neutral-100", bgClassName)} 
      />
    </motion.svg>
  );
}