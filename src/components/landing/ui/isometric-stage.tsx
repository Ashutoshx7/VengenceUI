'use client'

import React from 'react';
import { motion } from "framer-motion";

const IsometricLayer = ({
  strokeColor = "#606060",
  surfaceColor = "#09090B", 
  accentColor = "#e7000b",
  shadowColor = "#9f0712",
  size = "w-80",
  className = ""
}) => {
  
  const stackTransition = (delay = 0) => ({
    type: "spring" as const,
    stiffness: 100, // Reduced for a smoother, slower feel
    damping: 25,    
    mass: 2,       
    delay: delay,
  });

  const layerAnimation = (delay = 0) => ({
    initial: { 
      opacity: 0, 
      y: -80, // Now has plenty of room to fly in
      scale: 0.8,
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
    },
    transition: stackTransition(delay),
  });

  return (
    <div className={`relative ${size} ${className}`}>
      <svg
        /* Increased height from 390 to 500 for animation headroom */
        viewBox="0 0 650 500" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        /* Added overflow-visible to ensure no clipping during bounce */
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="grad-base-365" x1="324.811" y1="175.393" x2="324.811" y2="390" gradientUnits="userSpaceOnUse">
            <stop stopColor={shadowColor} />
            <stop offset="0.495192" stopColor={accentColor} />
            <stop offset="1" stopColor={shadowColor} />
          </linearGradient>

          <linearGradient id="grad-inner-365" x1="324.855" y1="141.918" x2="324.855" y2="307" gradientUnits="userSpaceOnUse">
            <stop stopColor={shadowColor} />
            <stop offset="0.5" stopColor={accentColor} />
            <stop offset="1" stopColor={shadowColor} />
          </linearGradient>
        </defs>

        {/* Wrapping both layers in a master group translated by y=40 
            to center the graphic within the new larger viewBox height.
        */}
        <g transform="translate(0, 40)">
          
          {/* --- BIG/BASE LAYER GROUP --- */}
          <motion.g {...layerAnimation(0)}>
            <rect
              width="369.213" height="369.213" rx="39"
              transform="matrix(0.88025 0.474511 -0.88025 0.474511 325 0)"
              fill={surfaceColor}
              stroke={strokeColor}
            />
            <path d="M630.773 225.067C630.772 231.909 625.627 238.103 617.31 242.587L357.31 382.743C339.361 392.419 310.259 392.419 292.31 382.743V333.175C310.259 342.851 339.361 342.851 357.31 333.175L617.31 193.018C625.627 188.534 630.637 182.234 630.637 175.393L630.773 225.067Z" fill="url(#grad-base-365)"/>
            <path d="M18.9867 175.393C18.9867 182.234 23.9942 188.534 32.3117 193.018V193.02L292.309 333.175V382.744L32.3092 242.587V242.585C23.9932 238.101 18.8496 231.908 18.8496 225.067L18.9867 175.393Z" fill="url(#grad-base-365)"/>
          </motion.g>

          {/* --- INNER/TOP LAYER GROUP --- */}
          <motion.g {...layerAnimation(0.3)}>
            <rect
              width="284.01" height="284.01" rx="30"
              transform="matrix(0.88025 0.474511 -0.88025 0.474511 325 7)"
              fill={surfaceColor}
              stroke={strokeColor}
            />
            <path d="M560.21 180.129C560.21 185.392 556.252 190.157 549.854 193.606L349.854 301.418C336.047 308.861 313.661 308.861 299.854 301.418V263.289C313.661 270.732 336.047 270.732 349.854 263.289L549.854 155.476C556.252 152.027 560.105 147.181 560.105 141.918L560.21 180.129Z" fill="url(#grad-inner-365)"/>
            <path d="M89.6055 141.918C89.6055 147.181 93.4574 152.027 99.8555 155.476V155.477L299.854 263.289V301.419L99.8535 193.606V193.604C93.4566 190.156 89.5 185.391 89.5 180.129L89.6055 141.918Z" fill="url(#grad-inner-365)"/>
          </motion.g>
        </g>
      </svg>
    </div>
  );
};

export default IsometricLayer;