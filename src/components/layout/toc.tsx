"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AlignLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TOCItemDef {
  id: string;
  title: string;
  depth: number;
}

const DEFAULT_ITEMS: TOCItemDef[] = [
  { id: "overview", title: "Overview", depth: 2 },
  { id: "preview", title: "Preview", depth: 3 },
  { id: "installation", title: "Installation", depth: 2 },
  { id: "usage", title: "Usage", depth: 2 },
  { id: "props", title: "Props", depth: 2 },
];

const railOffset = 8;
const getLineOffset = (depth: number) => (depth <= 2 ? railOffset : railOffset * 2);
const getItemOffset = (depth: number) => (depth <= 2 ? 20 : 32);

function TOCItem({
  item,
  index,
  active,
  items,
}: {
  item: TOCItemDef;
  index: number;
  active: boolean;
  items: TOCItemDef[];
}) {
  const offset = getLineOffset(item.depth);
  const upperOffset = index > 0 ? getLineOffset(items[index - 1].depth) : offset;
  const lowerOffset = index + 1 < items.length ? getLineOffset(items[index + 1].depth) : offset;

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <li
      className={cn(
        "relative flex h-10 cursor-pointer items-center text-[13px] font-medium leading-none transition-colors",
        active
          ? "text-neutral-900 dark:text-zinc-100"
          : "text-neutral-400 hover:text-neutral-700 dark:text-zinc-600 dark:hover:text-zinc-300"
      )}
      style={{ paddingLeft: getItemOffset(item.depth) }}
      onClick={handleClick}
    >
      {offset !== upperOffset && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`${Math.min(offset, upperOffset)} 0 ${Math.abs(upperOffset - offset)} 16`}
          className="absolute -top-2 -z-10"
          style={{
            width: Math.abs(upperOffset - offset) + 1,
            height: 16,
            left: Math.min(offset, upperOffset),
          }}
        >
          <path
            d={`M ${upperOffset} 0 C ${upperOffset} 10 ${offset} 6 ${offset} 16`}
            strokeWidth="1"
            fill="none"
            className="stroke-neutral-200/80 dark:stroke-zinc-800/50"
          />
        </svg>
      )}

      <div
        className={cn(
          "absolute inset-y-0 -z-10 w-px bg-neutral-200/80 dark:bg-zinc-800/50",
          offset !== upperOffset && "top-2",
          offset !== lowerOffset && "bottom-2"
        )}
        style={{ left: offset }}
      />

      <span className="truncate">{item.title}</span>
    </li>
  );
}

export function TableOfContents() {
  const items = DEFAULT_ITEMS;
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastIndexRef = useRef(0);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
      if (lastIndexRef.current !== items.length - 1) {
        lastIndexRef.current = items.length - 1;
        setActiveIndex(items.length - 1);
      }
      return;
    }

    let currentIndex = 0;

    for (let i = items.length - 1; i >= 0; i--) {
      const element = document.getElementById(items[i].id);

      if (element && element.getBoundingClientRect().top <= 120) {
        currentIndex = i;
        break;
      }
    }

    if (lastIndexRef.current !== currentIndex) {
      lastIndexRef.current = currentIndex;
      setActiveIndex(currentIndex);
    }
  }, [items]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  let d = "";
  const positions: [number, number][] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const x = getLineOffset(item.depth) + 0.5;
    const top = i * 40 + 8;
    const bottom = i * 40 + 32;

    if (i === 0) {
      d += `M${x} ${top} L${x} ${bottom}`;
    } else {
      const upperBottom = positions[i - 1][1];
      const upperX = getLineOffset(items[i - 1].depth) + 0.5;
      d += ` C ${upperX} ${top - 5} ${x} ${upperBottom + 5} ${x} ${top} L${x} ${bottom}`;
    }

    positions.push([top, bottom]);
  }

  const trackTop = positions[activeIndex]?.[0] || 0;
  const trackBottom = positions[activeIndex]?.[1] || 0;
  const dotX = getLineOffset(items[activeIndex].depth) + 0.5;
  const dotY = (trackTop + trackBottom) / 2;

  const transitionConfig = { type: "tween" as const, ease: "easeOut" as const, duration: 0.18 };

  return (
    <aside className="hidden xl:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-6 pl-4 font-sans">
      <div className="space-y-5">
        <div className="flex items-center gap-2 px-1 text-neutral-400 dark:text-zinc-500">
          <AlignLeft className="h-3.5 w-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em]">On this page</span>
        </div>

        <div className="relative ml-2">
          <svg
            className="absolute left-0 top-0 w-[30px] pointer-events-none text-neutral-900 dark:text-zinc-100"
            style={{ zIndex: 10, height: items.length * 40 }}
          >
            <motion.path
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              animate={{
                clipPath: `polygon(0px ${trackTop}px, 100% ${trackTop}px, 100% ${trackBottom}px, 0px ${trackBottom}px)`,
              }}
              transition={transitionConfig}
            />

            <motion.circle
              r="1.75"
              fill="currentColor"
              initial={false}
              animate={{ cx: dotX, cy: dotY }}
              transition={transitionConfig}
            />
          </svg>

          <ul className="relative z-1 flex w-full flex-col">
            {items.map((item, idx) => (
              <TOCItem
                key={item.id}
                item={item}
                index={idx}
                active={activeIndex === idx}
                items={items}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
