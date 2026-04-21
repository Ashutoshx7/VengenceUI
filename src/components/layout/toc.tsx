"use client";

import { useEffect, useState } from "react";
import { AlignLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
  { id: "introduction", title: "Introduction", depth: 2 },
  { id: "terminology", title: "Terminology", depth: 3 },
  { id: "installation", title: "Automatic Installation", depth: 2 },
  { id: "enjoy", title: "Enjoy!", depth: 3 },
  { id: "faq", title: "FAQ", depth: 2 },
  { id: "vite", title: "For Vite", depth: 3 },
  { id: "nextjs", title: "For Next.js", depth: 3 },
  { id: "learn-more", title: "Learn More", depth: 2 },
  { id: "content", title: "Writing Content", depth: 3 },
  { id: "special-needs", title: "Special Needs", depth: 3 },
];

const a = 8;
const getLineOffset = (depth: number) => (depth <= 2 ? a : 8 + a);
const getItemOffset = (depth: number) => (depth <= 2 ? 12 + a : 24 + a);

function TOCItem({ item, index, active }: { item: any; index: number; active: boolean }) {
  const offset = getLineOffset(item.depth);
  const upperOffset = index > 0 ? getLineOffset(items[index - 1].depth) : offset;
  const lowerOffset = index + 1 < items.length ? getLineOffset(items[index + 1].depth) : offset;

  return (
    <li
      className={cn(
        "relative text-[14px] font-medium transition-colors h-8 flex items-center",
        active ? "text-zinc-200" : "text-zinc-500 hover:text-zinc-300"
      )}
      style={{ paddingLeft: getItemOffset(item.depth) }}
    >
      {/* Background SVG Curve */}
      {offset !== upperOffset && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`${Math.min(offset, upperOffset)} 0 ${Math.abs(upperOffset - offset)} 12`}
          className="absolute -top-1.5 -z-10"
          style={{
            width: Math.abs(upperOffset - offset) + 1,
            height: 12,
            left: Math.min(offset, upperOffset),
          }}
        >
          <path
            d={`M ${upperOffset} 0 C ${upperOffset} 8 ${offset} 4 ${offset} 12`}
            strokeWidth="1"
            fill="none"
            className="stroke-zinc-800/60"
          />
        </svg>
      )}
      {/* Background Vertical Line */}
      <div
        className={cn(
          "absolute inset-y-0 w-px bg-zinc-800/60 -z-10",
          offset !== upperOffset && "top-1.5",
          offset !== lowerOffset && "bottom-1.5"
        )}
        style={{ left: offset }}
      />
      {item.title}
    </li>
  );
}

export function TableOfContents() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const index = Math.min(
        items.length - 1,
        Math.max(0, Math.floor(scrollPos / 80))
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let d = "";
  const positions: [number, number][] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const x = getLineOffset(item.depth) + 0.5;
    const top = i * 32 + 6;
    const bottom = i * 32 + 26;

    if (i === 0) {
      d += `M${x} ${top} L${x} ${bottom}`;
    } else {
      const upperBottom = positions[i - 1][1];
      const upperX = getLineOffset(items[i - 1].depth) + 0.5;
      d += ` C ${upperX} ${top - 4} ${x} ${upperBottom + 4} ${x} ${top} L${x} ${bottom}`;
    }
    positions.push([top, bottom]);
  }

  const trackTop = positions[activeIndex]?.[0] || 0;
  const trackBottom = positions[activeIndex]?.[1] || 0;
  const dotX = getLineOffset(items[activeIndex].depth) + 0.5;
  const dotY = (trackTop + trackBottom) / 2;

  return (
    <aside className="hidden xl:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-6 pl-4 font-sans">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-zinc-500 mb-6 px-1">
          <AlignLeft className="h-4 w-4" />
          <span className="text-[12px] font-semibold uppercase tracking-wider">On this page</span>
        </div>

        <div className="relative ml-2">
          {/* Overlay SVG Canvas for Active Line & Dot */}
          <svg
            className="absolute left-0 top-0 w-[30px] pointer-events-none"
            style={{ zIndex: 10, height: items.length * 32 }}
          >
            {/* Animated Active Segment using clip-path */}
            <motion.path
              d={d}
              fill="none"
              stroke="#e4e4e7"
              strokeWidth="1.25"
              animate={{
                clipPath: `polygon(0px ${trackTop}px, 100% ${trackTop}px, 100% ${trackBottom}px, 0px ${trackBottom}px)`
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />

            {/* Animated Glowing Dot */}
            <motion.circle
              r="2"
              fill="#e4e4e7"
              initial={false}
              animate={{ cx: dotX, cy: dotY }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
          </svg>

          {/* List Items built identically to Fumadocs */}
          <ul className="relative z-1 flex flex-col w-full">
            {items.map((item, idx) => (
              <TOCItem
                key={item.id}
                item={item}
                index={idx}
                active={activeIndex === idx}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
