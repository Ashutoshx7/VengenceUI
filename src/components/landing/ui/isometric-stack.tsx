import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface IsometricStackProps {
  /** The ReactNode to render inside the top rectangle (e.g., Icon + Text) */
  children?: ReactNode;
  /** Tailwind classes for the outer SVG container */
  className?: string;
  /** Tailwind classes for the shadow/back face fill */
  backFillClass?: string;
  /** Tailwind classes for the shadow/back face outline */
  backStrokeClass?: string;
  /** Tailwind classes for the top face rectangle */
  frontRectClass?: string;
  /** Tailwind classes for the connecting side lines */
  linesClass?: string;
  /** Tailwind classes for the wrapper inside the foreignObject */
  contentWrapperClass?: string;
}

export const IsometricStack = ({
  children,
  className = "w-12 h-auto cursor-pointer",
  backFillClass = "fill-black",
  backStrokeClass = "stroke-white",
  frontRectClass = "fill-[#2A2A2A] stroke-white",
  linesClass = "stroke-white",
  contentWrapperClass = "text-white text-[8px]",
}: IsometricStackProps) => {
  // Snappy spring config for the physical button press
  const springConfig = { type: "spring" as const, stiffness: 450, damping: 25 };

  return (
    <motion.svg
      viewBox="0 0 40 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="rest"
      whileHover="pressed"
      whileTap="pressed"
    >
      {/* 3D Extrusion / Sides Group (Fades out to hide sharp corners on press) */}
      <motion.g
        variants={{
          rest: { opacity: 1 },
          pressed: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }} // Quick fade out
      >
        {/* Back Face / Hull */}
        <path
          d="M38.6162 5.29118C38.8616 5.80954 39 6.38856 39 7.00016V30.0002C39 32.2093 37.2091 34.0001 35 34.0001H7C6.21257 34.0001 5.47933 33.771 4.86035 33.3781C2.68828 31.9994 1.5 29 1.5 29L3 29.8595V7.00016C3 4.79102 4.79086 3.00016 7 3.00016H34.6631L34.5 1.5C34.5 1.5 37.7407 3.44195 38.6162 5.29118Z"
          className={`transition-colors duration-300 ${backFillClass} ${backStrokeClass}`}
        />
        
        {/* Connecting Lines */}
        <path
          d="M35.7144 25.5003L38.9286 28M35.7144 23.2188L39 26"
          className={`transition-colors duration-300 ${linesClass}`}
        />
      </motion.g>

      {/* Front Face & Content Group (Moves down and right) */}
      <motion.g
        variants={{
          rest: { x: 0, y: 0 },
          pressed: { x: 3.5, y: 3.5 }, // Exact offset to overlap the back path's resting position
        }}
        transition={springConfig}
      >
        <rect
          x="0.5"
          y="0.5"
          width="35"
          height="30"
          rx="3.5"
          className={`transition-colors duration-300 ${frontRectClass}`}
        />

        <foreignObject x="0.5" y="0.5" width="35" height="30">
          <div
            className={`flex items-center justify-center w-full h-full px-1 overflow-hidden ${contentWrapperClass}`}
          >
            <div className="flex flex-col items-center justify-center gap-0.5 w-full truncate line-clamp-1 select-none text-center">
              {children}
            </div>
          </div>
        </foreignObject>
      </motion.g>
    </motion.svg>
  );
};