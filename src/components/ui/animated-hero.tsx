"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeroProps {
    /** Hero title text */
    title?: string;
    /** Whether to show the theme toggle button */
    showThemeToggle?: boolean;
    /** Additional CSS classes */
    className?: string;
}

export function AnimatedHero({
    title = "AN AWESOME TITLE",
    showThemeToggle = true,
    className = "",
}: AnimatedHeroProps) {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkDark = () => document.documentElement.classList.contains("dark");
        setIsDark(checkDark());

        const observer = new MutationObserver(() => setIsDark(checkDark()));
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
    };

    if (!mounted) return null;

    const stripes = `repeating-linear-gradient(
        100deg,
        var(--stripe-color) 0%,
        var(--stripe-color) 7%,
        transparent 10%,
        transparent 12%,
        var(--stripe-color) 16%
    )`;
    const rainbow = `repeating-linear-gradient(
        100deg,
        #60a5fa 10%,
        #e879f9 15%,
        #60a5fa 20%,
        #5eead4 25%,
        #60a5fa 30%
    )`;

    return (
        <section className={cn("relative w-full h-full overflow-hidden", className)}>
            {/* Aurora Background — matches original .hero */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `${stripes}, ${rainbow}`,
                    backgroundSize: "300%, 200%",
                    backgroundPosition: "50% 50%, 50% 50%",
                    filter: isDark
                        ? "blur(10px) opacity(50%) saturate(200%)"
                        : "blur(10px) invert(100%)",
                    maskImage: "radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%)",
                }}
            >
                {/* Animated overlay — matches original .hero::after */}
                <div
                    className="absolute inset-0 animate-aurora-bg"
                    style={{
                        backgroundImage: `${stripes}, ${rainbow}`,
                        backgroundSize: "200%, 100%",
                        backgroundAttachment: "fixed",
                        mixBlendMode: "difference",
                    }}
                />
            </div>

            {/* Content overlay — matches original .content */}
            {/* mix-blend-mode: difference + filter: invert(1) is the KEY to the effect */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-9 text-center px-4"
                style={{
                    mixBlendMode: "difference",
                    filter: "invert(1)",
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[clamp(2rem,1rem+5vw,8rem)] font-black leading-tight tracking-tight relative"
                    data-text={title}
                >
                    {/* Visible base text */}
                    <span className="relative z-0">{title}</span>

                    {/* Glass text effect — matches original h1::before with backdrop-filter */}
                    <span
                        aria-hidden
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                        style={{
                            background: "white",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundColor: "white",
                            backdropFilter: "blur(19px) brightness(12.5)",
                            WebkitBackdropFilter: "blur(19px) brightness(12.5)",
                            WebkitTextStroke: "1px white",
                        }}
                    >
                        {title}
                    </span>
                </motion.h1>

                {showThemeToggle && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleTheme}
                        className="group cursor-pointer p-3 rounded-full border border-dashed hover:border-solid transition-all"
                        aria-label="Toggle theme"
                    >
                        <span className="animate-aurora-blink text-sm font-medium px-1">
                            → switch bg
                        </span>
                    </motion.button>
                )}
            </div>
        </section>
    );
}

export default AnimatedHero;
