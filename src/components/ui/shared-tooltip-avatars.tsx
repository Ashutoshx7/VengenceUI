"use client";

import React, { useState, useRef } from "react";
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
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [activeName, setActiveName] = useState("");
  const [isTextChanging, setIsTextChanging] = useState(false);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const avatarRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const avatar = avatarRefs.current[index];
    if (avatar) {
      // Use offsetLeft/offsetTop to ensure stability regardless of transform animations
      const left = avatar.offsetLeft + avatar.offsetWidth / 2;
      const top = avatar.offsetTop;

      setTooltipPos({ left, top });
      setIsTooltipVisible(true);

      // Handle the text transition
      if (hoveredIndex !== null && hoveredIndex !== index) {
        setIsTextChanging(true);
        if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);
        textTimeoutRef.current = setTimeout(() => {
          setActiveName(items[index].name);
          setIsTextChanging(false);
        }, 150);
      } else {
        setActiveName(items[index].name);
      }

      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsTooltipVisible(false);
      setHoveredIndex(null);
    }, 100);
  };

  return (
    <div 
      className={cn("relative flex items-center justify-center py-12", className)} 
      {...props}
    >
      {/* Shared Tooltip */}
      <div
        className={cn(
          "absolute pointer-events-none z-50 px-4 py-2 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl text-sm font-semibold text-neutral-900 dark:text-neutral-100 whitespace-nowrap shadow-xl border border-black/5 dark:border-white/10",
          isTooltipVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
        style={{
          left: tooltipPos.left,
          top: tooltipPos.top - 12, // Offset above the avatar
          transform: "translateX(-50%) translateY(-100%)",
          transition: "left 0.35s cubic-bezier(0.4, 0, 0.2, 1), top 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease, transform 0.25s ease"
        }}
        role="tooltip"
        aria-hidden={!isTooltipVisible}
      >
        <span 
          className={cn(
            "inline-block transition-all duration-150 ease-out",
            isTextChanging ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
          )}
        >
          {activeName || " "}
        </span>
        
        {/* Red gradient indicator line at the bottom of the tooltip */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-90" />
      </div>

      {/* Avatar Stack */}
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => { avatarRefs.current[index] = el; }}
          className="relative -ml-4 first:ml-0 transition-transform duration-300 ease-out hover:-translate-y-1 hover:z-10 cursor-pointer"
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
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-[3px] border-white dark:border-neutral-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export default SharedTooltipAvatars;
