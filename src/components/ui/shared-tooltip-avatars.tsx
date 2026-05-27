"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AvatarItem {
  id: string;
  name: string;
  image: string;
}

export interface SharedTooltipAvatarsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AvatarItem[];
}

export function SharedTooltipAvatars({ 
  items, 
  className, 
  ...props 
}: SharedTooltipAvatarsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ left: 0, top: 0 });
  const [activeName, setActiveName] = useState("");
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const avatarRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const avatar = avatarRefs.current[index];
    if (avatar) {
      const left = avatar.offsetLeft + avatar.offsetWidth / 2;
      const top = avatar.offsetTop;

      setTooltipPos({ left, top });
      setActiveName(items[index].name);
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 150);
  };

  return (
    <div 
      className={cn("relative flex items-center justify-center py-12", className)} 
      {...props}
    >
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, x: "-50%", y: "-80%", scale: 0.95, left: tooltipPos.left, top: tooltipPos.top - 12 }}
            animate={{ 
              opacity: 1, 
              x: "-50%", 
              y: "-100%", 
              scale: 1,
              left: tooltipPos.left,
              top: tooltipPos.top - 12
            }}
            exit={{ opacity: 0, x: "-50%", y: "-80%", scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute z-50 px-3.5 py-1.5 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl rounded-xl text-sm font-medium text-neutral-900 dark:text-neutral-100 whitespace-nowrap shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-neutral-200/50 dark:border-neutral-800/50 pointer-events-none"
            role="tooltip"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeName}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="inline-block"
              >
                {activeName || " "}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar Stack */}
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => { avatarRefs.current[index] = el; }}
          className="relative -ml-3 first:ml-0 transition-transform duration-300 ease-out hover:-translate-y-2 hover:z-10 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onFocus={() => handleMouseEnter(index)}
          onBlur={handleMouseLeave}
          tabIndex={0}
          role="listitem"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-[3px] border-white dark:border-[#09090b] shadow-sm hover:shadow-xl transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default SharedTooltipAvatars;
