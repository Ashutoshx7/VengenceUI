"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedHeroProps {
    /** Hero title text */
    title?: string;
    /** Whether to show the theme toggle button */
    showThemeToggle?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Force specific theme rendering */
    forceTheme?: "dark" | "light";
}

export function AnimatedHero({
    title = "AN AWESOME TITLE",
    showThemeToggle = true,
    className = "",
    forceTheme,
}: AnimatedHeroProps) {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const checkDarkMode = () => {
            if (forceTheme) return forceTheme === "dark";
            return document.documentElement.classList.contains("dark");
        };
        setIsDark(checkDarkMode());

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDark(checkDarkMode());
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
    };

    if (!mounted) {
        return null;
    }

    return (
        <section className={cn("relative w-full h-auto", className)}>
            {/* Animated Background */}
            <div
                className="relative w-full h-full min-h-[500px] flex items-center justify-center transition-all duration-500"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            100deg,
                            var(--stripe-color) 0%,
                            var(--stripe-color) 7%,
                            transparent 10%,
                            transparent 12%,
                            var(--stripe-color) 16%
                        ),
                        repeating-linear-gradient(
                            100deg,
                            hsl(var(--rainbow-blue)) 10%,
                            hsl(var(--rainbow-pink)) 15%,
                            hsl(var(--rainbow-blue)) 20%,
                            hsl(var(--rainbow-cyan)) 25%,
                            hsl(var(--rainbow-blue)) 30%
                        )
                    `,
                    backgroundSize: "300%, 200%",
                    backgroundPosition: "50% 50%, 50% 50%",
                    filter: isDark
                        ? "blur(10px) opacity(0.5) saturate(2)"
                        : "blur(10px) invert(1)",
                    maskImage:
                        "radial-gradient(circle at 50% 50%, black 60%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at 50% 50%, black 60%, transparent 100%)",
                }}
            >
                <div
                    className="absolute inset-0 animate-aurora-bg"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                100deg,
                                var(--stripe-color) 0%,
                                var(--stripe-color) 7%,
                                transparent 10%,
                                transparent 12%,
                                var(--stripe-color) 16%
                            ),
                            repeating-linear-gradient(
                                100deg,
                                hsl(var(--rainbow-blue)) 10%,
                                hsl(var(--rainbow-pink)) 15%,
                                hsl(var(--rainbow-blue)) 20%,
                                hsl(var(--rainbow-cyan)) 25%,
                                hsl(var(--rainbow-blue)) 30%
                            )
                        `,
                        backgroundSize: "200%, 100%",
                        backgroundAttachment: "fixed",
                        mixBlendMode: "difference",
                    }}
                />
            </div>

            {/* Content */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center px-4"
                style={{
                    mixBlendMode: "difference",
                    filter: "invert(1)",
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[clamp(2rem,1rem+5vw,8rem)] font-black relative leading-tight tracking-tight"
                    data-text={title}
                >
                    <span className="relative z-0">{title}</span>
                    <span
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                        style={{
                            background: "white",
                            textShadow: "0 0 1px #ffffff",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundColor: "white",
                            WebkitMask: "linear-gradient(#000 0 0) luminance",
                            mask: "linear-gradient(#000 0 0) luminance, alpha",
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
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleTheme}
                        className="group cursor-pointer p-3 rounded-full border border-dashed hover:border-solid transition-all"
                        aria-label="Toggle theme"
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotate: isDark ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isDark ? (
                                <Sun className="w-6 h-6 animate-aurora-blink group-hover:[animation-play-state:paused]" />
                            ) : (
                                <Moon className="w-6 h-6 animate-aurora-blink group-hover:[animation-play-state:paused]" />
                            )}
                        </motion.div>
                    </motion.button>
                )}
            </div>
        </section>
    );
}

export default AnimatedHero;
