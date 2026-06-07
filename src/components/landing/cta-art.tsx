"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CTABox } from "./ui/cta-box";
import { CTALogo } from "./ui/cta-logo";

export function CTAArt() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin: "120px 0px", threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn("cta-art relative h-full w-full", isVisible && "is-animating")}
        >
            <div
                className="absolute left-1/2 top-1/2 opacity-20 dark:opacity-10"
                style={{ transform: "translate(-50%, -50%)" }}
            >
                <CTABox size={320} className="text-primary/20" bgClassName="fill-primary/5" />
            </div>

            <div
                className="cta-float-box absolute left-1/2 top-[40%] z-20"
                style={{ transform: "translate(-50%, -50%)" }}
            >
                <CTABox
                    size={260}
                    className="text-primary"
                    bgClassName="fill-white dark:fill-neutral-900"
                />
            </div>

            <div
                className="cta-float-logo absolute left-[50%] top-[30%] z-30"
                style={{ transform: "translate(-50%, -50%)" }}
            >
                <CTALogo
                    size={100}
                    className="rotate-180 text-primary"
                    fillClassName="text-zinc-500"
                />
            </div>

            <div
                className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-[80px]"
                style={{ transform: "translate(-50%, -50%)" }}
            />
        </div>
    );
}
