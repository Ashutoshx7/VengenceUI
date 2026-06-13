"use client";

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface TOCItemDef {
  id: string;
  title: string;
  depth: number;
}

interface ComputedSVG {
  width: number;
  height: number;
  d: string;
  positions: [top: number, bottom: number, x: number][];
}

interface ThumbState {
  startIndex: number;
  endIndex: number;
  isUp: boolean;
}

const DEFAULT_ITEMS: TOCItemDef[] = [
  { id: "overview", title: "Overview", depth: 2 },
  { id: "preview", title: "Preview", depth: 3 },
  { id: "installation", title: "Installation", depth: 2 },
  { id: "usage", title: "Usage", depth: 3 },
  { id: "props", title: "Props", depth: 2 },
];

const railOffset = 8;
const rowHeight = 40;
const rowInset = 8;
const getLineOffset = (depth: number) => (depth <= 2 ? railOffset : railOffset * 2);
const getItemOffset = (depth: number) => (depth <= 2 ? 20 : 32);
const getMotionDuration = (distance: number) => Math.min(900, Math.max(420, distance * 7));
const getCssNumber = (element: HTMLElement, property: string) => {
  const value = parseFloat(element.style.getPropertyValue(property));
  return Number.isFinite(value) ? value : null;
};

function buildTocPath(items: TOCItemDef[]): ComputedSVG {
  let width = 0;
  let d = "";
  const positions: [top: number, bottom: number, x: number][] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const x = getLineOffset(item.depth) + 0.5;
    const top = i * rowHeight + rowInset;
    const bottom = (i + 1) * rowHeight - rowInset;

    width = Math.max(x + 8, width);

    if (i === 0) {
      d += ` M${x} ${top} L${x} ${bottom}`;
    } else {
      const [, upperBottom, upperX] = positions[i - 1];
      d += ` C ${upperX} ${top - 4} ${x} ${upperBottom + 4} ${x} ${top} L${x} ${bottom}`;
    }

    positions.push([top, bottom, x]);
  }

  return {
    d,
    height: items.length * rowHeight,
    positions,
    width,
  };
}

function TOCItem({
  item,
  active,
}: {
  item: TOCItemDef;
  active: boolean;
}) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <li className="relative z-0 h-10">
      <a
        href={`#${item.id}`}
        className={cn(
          "flex h-full cursor-pointer items-center truncate text-[13px] font-medium leading-none transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          active
            ? "text-primary"
            : "text-muted-foreground/70 hover:text-foreground"
        )}
        style={{ paddingInlineStart: getItemOffset(item.depth) }}
        onClick={handleClick}
      >
        {item.title}
      </a>
    </li>
  );
}

function ActiveTocPath({
  activeEndIndex,
  activeStartIndex,
  computed,
}: {
  activeEndIndex: number;
  activeStartIndex: number;
  computed: ComputedSVG;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const previousRef = useRef<ThumbState | null>(null);
  const itemLineLengthsRef = useRef<[top: number, bottom: number][]>([]);
  const activeStartPosition = computed.positions[activeStartIndex];
  const activeEndPosition = computed.positions[activeEndIndex];

  const updateThumb = useCallback(() => {
    const element = ref.current;
    const itemLineLengths = itemLineLengthsRef.current;
    const startLength = itemLineLengths[activeStartIndex];
    const endLength = itemLineLengths[activeEndIndex];
    const start = computed.positions[activeStartIndex];
    const end = computed.positions[activeEndIndex];

    if (!element || !start || !end || !startLength || !endLength) {
      return;
    }

    let isUp = activeEndIndex === 0;
    if (previousRef.current) {
      const previous = previousRef.current;
      isUp =
        previous.startIndex > activeStartIndex ||
        previous.endIndex > activeEndIndex ||
        (previous.startIndex === activeStartIndex &&
          previous.endIndex === activeEndIndex &&
          previous.isUp);
    }

    previousRef.current = {
      endIndex: activeEndIndex,
      isUp,
      startIndex: activeStartIndex,
    };

    const nextTrackTop = start[0];
    const nextTrackBottom = end[1];
    const nextOffsetDistance = isUp ? startLength[0] : endLength[1];
    const previousTrackTop = getCssNumber(element, "--track-top") ?? nextTrackTop;
    const previousTrackBottom = getCssNumber(element, "--track-bottom") ?? nextTrackBottom;
    const previousOffsetDistance =
      getCssNumber(element, "--offset-distance") ?? nextOffsetDistance;
    const distance = Math.max(
      Math.abs(previousTrackTop - nextTrackTop),
      Math.abs(previousTrackBottom - nextTrackBottom),
      Math.abs(previousOffsetDistance - nextOffsetDistance)
    );

    element.style.setProperty("--toc-duration", `${getMotionDuration(distance)}ms`);
    element.style.setProperty("--track-top", `${nextTrackTop}px`);
    element.style.setProperty("--track-bottom", `${nextTrackBottom}px`);
    element.style.setProperty("--offset-distance", `${nextOffsetDistance}px`);
    element.style.setProperty("--opacity", "1");
  }, [activeEndIndex, activeStartIndex, computed.positions]);

  useEffect(() => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", computed.d);

    const pathLength = path.getTotalLength();
    const lengths: [top: number, bottom: number][] = [];

    for (let i = 0; i < computed.positions.length; i++) {
      const [top, bottom] = computed.positions[i];
      let length = i > 0 ? lengths[i - 1][1] + (top - computed.positions[i - 1][1]) : 0;

      while (length < pathLength && path.getPointAtLength(length).y < top) {
        length++;
      }

      lengths.push([length, length + bottom - top]);
    }

    itemLineLengthsRef.current = lengths;
    updateThumb();
  }, [computed.d, computed.positions, updateThumb]);

  useEffect(() => {
    updateThumb();
  }, [updateThumb]);

  if (!activeStartPosition || !activeEndPosition) {
    return null;
  }

  const [top] = activeStartPosition;
  const [, bottom] = activeEndPosition;
  const initialStyle = {
    "--offset-distance": "0px",
    "--opacity": "0",
    "--toc-duration": "520ms",
    "--track-bottom": `${bottom}px`,
    "--track-top": `${top}px`,
    height: computed.height,
    width: computed.width,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-0 top-0 z-10 origin-center"
      style={initialStyle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        viewBox={`0 0 ${computed.width} ${computed.height}`}
        style={{
          height: computed.height,
          width: computed.width,
        }}
      >
        <path
          d={computed.d}
          className="stroke-border/80 dark:stroke-border/60"
          fill="none"
          strokeLinecap="butt"
          strokeWidth="1.15"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute transition-[clip-path] ease-[cubic-bezier(0.16,1,0.3,1)]"
        viewBox={`0 0 ${computed.width} ${computed.height}`}
        style={{
          clipPath:
            "polygon(0 var(--track-top, 0px), 100% var(--track-top, 0px), 100% var(--track-bottom, 0px), 0 var(--track-bottom, 0px))",
          height: computed.height,
          transitionDuration: "var(--toc-duration)",
          width: computed.width,
        }}
      >
        <path
          d={computed.d}
          className="stroke-primary"
          fill="none"
          strokeLinecap="butt"
          strokeWidth="1.25"
        />
      </svg>
      <div
        className="absolute left-0 size-2 rounded-full bg-primary opacity-[var(--opacity,0)] shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_26%,transparent)] transition-[opacity,offset-distance] ease-[cubic-bezier(0.16,1,0.3,1)] [offset-anchor:50%_50%] [offset-distance:var(--offset-distance,0px)] [offset-rotate:0deg]"
        style={{
          offsetPath: `path("${computed.d}")`,
          transitionDuration: "var(--toc-duration)",
        }}
      />
    </div>
  );
}

function getActiveStartIndex(items: TOCItemDef[], activeIndex: number) {
  const active = items[activeIndex];

  if (!active || active.depth <= 2) {
    return activeIndex;
  }

  for (let i = activeIndex - 1; i >= 0; i--) {
    if (items[i].depth < active.depth) {
      return i;
    }
  }

  return activeIndex;
}

export function TableOfContents() {
  const items = DEFAULT_ITEMS;
  const [activeIndex, setActiveIndex] = useState(0);
  const computed = useMemo(() => buildTocPath(items), [items]);
  const activeStartIndex = getActiveStartIndex(items, activeIndex);
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

  return (
    <aside className="hidden xl:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-6 pl-4 font-sans">
      <div className="space-y-5">
        <div className="flex items-center gap-2 px-1 text-muted-foreground">
          <AlignLeft className="h-3.5 w-3.5" />
          <span className="text-[11px] font-semibold uppercase tracking-normal">On this page</span>
        </div>

        <div className="relative ml-2">
          <ActiveTocPath
            activeEndIndex={activeIndex}
            activeStartIndex={activeStartIndex}
            computed={computed}
          />

          <ul className="relative z-0 flex w-full flex-col">
            {items.map((item, idx) => (
              <TOCItem
                key={item.id}
                active={idx >= activeStartIndex && idx <= activeIndex}
                item={item}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
