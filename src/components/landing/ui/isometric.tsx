'use client';

import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion'; // Import SVGMotionProps
import { cn } from '@/lib/utils';

// Update the interface to use Framer Motion's specific SVG props
interface BrandLogoProps extends SVGMotionProps<SVGSVGElement> {
  size?: number | string;
  // className and others are already included in SVGMotionProps
}

export const BrandLogo = ({ 
  size = 48, 
  className, 
  strokeWidth = "0.5px", 
  ...props 
}: BrandLogoProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 92 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-primary cursor-pointer", className)}
      initial="rest"
      whileHover="hover"
      {...props} // Now TypeScript knows this is a motion component
    >
      <motion.path
        d="M89.2606 45.7199V104.94C89.2606 107.27 88.5406 108.85 87.0906 109.67L67.0906 119.67C68.5406 118.85 69.2606 117.27 69.2606 114.94V55.7199C69.2606 53.3899 68.5406 50.9799 67.0906 48.4899C65.6506 45.9999 63.9106 44.17 61.8806 43L22.9006 20.4899L10.2706 13.2C8.24057 12.03 6.51055 11.8599 5.06055 12.6799L25.0605 2.67994C26.5105 1.85994 28.2406 2.02996 30.2706 3.19996L81.8806 33C83.9106 34.17 85.6506 35.9999 87.0906 38.4899C88.5406 40.9799 89.2606 43.3899 89.2606 45.7199Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="#FFFFFF"
        style={{ originX: "80%", originY: "30%" }}
        variants={{
          rest: { opacity: 1, scale: 1 },
          hover: { 
            opacity: 0, 
            scale: 0.8, 
            transition: { duration: 0.25, ease: "easeIn" } 
          }
        }}
      />

      <motion.path
        d="M67.0904 48.4899C65.6504 45.9999 63.9104 44.17 61.8804 43L22.9004 20.4899L10.2704 13.2C8.24039 12.03 6.51036 11.8599 5.06036 12.6799C3.62036 13.4999 2.90039 15.08 2.90039 17.4V76.63C2.90039 78.96 3.62036 81.3699 5.06036 83.8599C6.51036 86.3499 8.24039 88.1799 10.2704 89.3499L61.8804 119.15C63.9104 120.32 65.6504 120.49 67.0904 119.67C68.5404 118.85 69.2604 117.27 69.2604 114.94V55.7199C69.2604 53.3899 68.5404 50.9799 67.0904 48.4899ZM53.4504 79.2199C52.7404 79.6199 51.8704 79.5199 50.8204 78.9199L22.9004 62.7999L21.3304 61.89C20.2904 61.29 19.4104 60.3799 18.7004 59.1599C18.0004 57.9399 17.6404 56.7299 17.6404 55.5299C17.6404 54.3299 18.0004 53.53 18.7004 53.13C19.4104 52.73 20.2904 52.8299 21.3304 53.4299L22.9004 54.3399L50.8204 70.46C51.8704 71.06 52.7404 71.97 53.4504 73.19C54.1604 74.41 54.5104 75.62 54.5104 76.82C54.5104 78.02 54.1604 78.8199 53.4504 79.2199Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="#FFFFFF"
        variants={{
          rest: { x: 0, y: 0 },
          hover: { 
            x: 18, 
            y: -8, 
            transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } 
          }
        }}
      />
    </motion.svg>
  );
};