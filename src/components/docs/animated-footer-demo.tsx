"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedFooter } from "@/components/ui/animated-footer";

/**
 * Reproduces the original's entrance: the footer is pinned behind opaque
 * content, and a transparent "revealer" spacer drives the reveal — text
 * animates in when the revealer's top crosses the middle of the viewport
 * (and back out above ~85%), exactly like the source ScrollTrigger.
 */
export function AnimatedFooterDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const revealerRef = useRef<HTMLDivElement>(null);
  const [screen, setScreen] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useLayoutEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const measure = () => setScreen(scroller.clientHeight);
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(scroller);

    const onScroll = () => {
      const revealer = revealerRef.current;
      if (!revealer) return;
      const top = revealer.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
      const h = scroller.clientHeight || 1;
      // Mirror ScrollTrigger: onEnter at "top 50%", onLeaveBack at "top 85%".
      setRevealed((prev) => (top <= h * 0.5 ? true : top >= h * 0.85 ? false : prev));
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      resizeObserver.disconnect();
      scroller.removeEventListener("scroll", onScroll);
    };
  }, []);

  const full = screen || 560;

  return (
    <div ref={scrollRef} className="relative h-full min-h-[560px] w-full overflow-y-auto bg-white dark:bg-black">
      {/* Footer pinned behind everything */}
      <div className="sticky top-0 z-0 w-full" style={{ height: full }}>
        <AnimatedFooter revealed={revealed} />
      </div>

      {/* Opaque foreground pulled up over the footer; scrolling it off reveals the footer */}
      <div className="relative z-10 w-full" style={{ marginTop: -full }}>
        <section
          className="flex w-full flex-col items-center justify-center gap-4 bg-white px-6 text-center text-black dark:bg-black dark:text-white"
          style={{ height: full }}
        >
          <h3 className="max-w-lg text-2xl font-semibold sm:text-4xl">Scroll down to reveal the footer</h3>
          <ChevronDown className="mt-1 h-6 w-6 animate-bounce text-black/40 dark:text-white/40" />
        </section>
        {/* Transparent revealer — the footer behind is exposed as this scrolls through */}
        <div ref={revealerRef} aria-hidden style={{ height: full }} />
      </div>
    </div>
  );
}
