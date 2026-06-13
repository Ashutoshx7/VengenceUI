"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Layers, MousePointer2, Sparkles, SlidersHorizontal, Copy, Share2, Trash2, ArrowRight, Bell, Palette } from "lucide-react";
import LogoIcon from "@/assets/logo/logo-icon";
import { Avatar } from "./avatar"
import { cn } from "@/lib/utils"
import { ConnectorLine, CornerConnector } from "./lines"
import { IsometricBox } from "./isometric-box"
import NextIcon from "@/assets/icons/nextjs-icon"
import MotionIcon from "@/assets/icons/motion-icon"
import GSAPIcon from "@/assets/icons/gsap-icon"
import ReactIcon from "@/assets/icons/react-icon"
import TailwindIcon from "@/assets/icons/tailwind-icon"
import TypeScriptIcon from "@/assets/icons/typescript-icon"

export function FeatureCard1() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-muted dark:bg-muted/60 w-full h-full flex justify-center items-center overflow-hidden relative min-h-[400px] md:min-h-[500px] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ opacity: 0, y: -50, x: -50, rotate: 0, scale: 0.8 }}
                animate={isHovered ? { opacity: 1, y: -190, x: -100, rotate: -4, scale: 1 } : { opacity: 0, y: -50, x: -50, rotate: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute z-50 flex items-center gap-2 px-3 py-1.5 bg-foreground text-background rounded-md text-xs font-semibold shadow-xl pointer-events-none"
            >
                <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                <span>100+ blocks</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50, x: 50, rotate: 0, scale: 0.8 }}
                animate={isHovered ? { opacity: 1, y: 150, x: 120, rotate: 6, scale: 1 } : { opacity: 0, y: 50, x: 50, rotate: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
                className="absolute z-50 flex items-center gap-2 px-3 py-1.5 bg-background border text-foreground rounded-full text-xs font-semibold shadow-xl pointer-events-none"
            >
                <MousePointer2 className="w-3.5 h-3.5" />
                <span>Interactive</span>
            </motion.div>

            <div className="relative w-64 h-72 lg:w-80 lg:h-80 flex justify-center items-center pointer-events-none">

                <motion.div
                    initial={{ rotate: -4, scale: 0.95, x: -10, y: 5 }}
                    animate={isHovered ? { rotate: -15, scale: 0.9, x: -120, y: 30 } : { rotate: -4, scale: 0.95, x: -10, y: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute inset-0 bg-background border rounded-3xl shadow-lg flex flex-col p-5 opacity-70 sm:opacity-100"
                >
                    <div className="flex items-center gap-3 border-b border-border/50 pb-4 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                            <SlidersHorizontal className="w-4 h-4 text-foreground/70" />
                        </div>
                        <div className="font-medium text-sm text-foreground/90">Preferences</div>
                    </div>

                    <div className="flex items-center justify-between mb-4 group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Bell className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-zinc-500 rounded-full border-2 border-background animate-pulse" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-foreground/80 group-hover:text-foreground transition-colors">Alerts</span>
                                <span className="text-[9px] text-foreground/50">Push enabled</span>
                            </div>
                        </div>
                        <div className="relative w-11 h-6 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full flex items-center p-0.5 shadow-inner shadow-blue-500/20">
                            <motion.div
                                initial={{ x: 0 }}
                                animate={isHovered ? { x: 20 } : { x: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-5 h-5 bg-white rounded-full shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Palette className="w-4 h-4 text-foreground/70" />
                            <span className="text-xs font-semibold text-foreground/80">Theme</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            {['bg-red-500', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-400'].map((color, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.2 }}
                                    className={`w-4 h-4 rounded-full ${color} cursor-pointer shadow-sm border border-background/20 ${i === 1 ? 'ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-background' : 'opacity-60 hover:opacity-100'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mt-auto">
                        <div className="flex items-center justify-between text-[10px] font-bold text-foreground/50 tracking-wider">
                            <span className="uppercase">Intensity</span>
                            <span className="text-blue-500">82%</span>
                        </div>
                        <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden shadow-inner group">
                            <motion.div
                                initial={{ width: "30%" }}
                                animate={isHovered ? { width: "82%" } : { width: "30%" }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                                className="absolute top-0 left-0 h-full bg-linear-to-r from-blue-400 to-indigo-500 rounded-full overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] w-[200%] -translate-x-[150%] group-hover:translate-x-[50%] transition-transform duration-1000 ease-in-out" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ rotate: 4, scale: 0.95, x: 10, y: 0 }}
                    animate={isHovered ? { rotate: 20, scale: 0.9, x: 110, y: 20 } : { rotate: 4, scale: 0.95, x: 10, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute inset-0 bg-background border rounded-3xl shadow-lg flex flex-col p-2 opacity-70 sm:opacity-100"
                >
                    <div className="px-3 py-2 text-xs font-semibold text-foreground/50 tracking-wider">ACTIONS</div>

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between px-3 py-2.5 bg-muted/50 rounded-lg transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <Copy className="w-4 h-4 text-foreground/60 group-hover:text-foreground" />
                                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">Copy Code</span>
                            </div>
                            <span className="text-xs text-foreground/40 font-mono tracking-widest">⌘C</span>
                        </div>

                        <div className="flex items-center justify-between px-3 py-2.5 hover:bg-muted rounded-lg transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <Share2 className="w-4 h-4 text-foreground/60 group-hover:text-foreground" />
                                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">Share</span>
                            </div>
                            <span className="text-xs text-foreground/40 font-mono tracking-widest">⇧⌘S</span>
                        </div>

                        <div className="h-px w-full bg-border/50 my-1" />

                        <div className="flex items-center justify-between px-3 py-2.5 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <Trash2 className="w-4 h-4 text-red-500/70 group-hover:text-red-500" />
                                <span className="text-sm font-medium text-red-500/80 group-hover:text-red-500">Delete</span>
                            </div>
                            <span className="text-xs text-red-500/40 font-mono tracking-widest">⌘⌫</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={isHovered ? { rotate: 0, scale: 1.05, y: -20 } : { rotate: 0, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="relative z-10 w-full h-full bg-background border rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[16px_16px] opacity-45" />

                    <div className="relative z-10 p-6 flex justify-between items-start">
                        <motion.div
                            animate={isHovered ? { scale: 1.1, rotate: -10 } : { scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-foreground text-background w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                            <Layers className="w-6 h-6" />
                        </motion.div>
                        <div className="px-4 py-1.5 bg-muted rounded-full text-xs font-bold tracking-widest text-foreground/70 uppercase flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Live
                        </div>
                    </div>

                    <div className="relative z-10 px-6 flex flex-col gap-4">
                        <div className="h-8 w-4/5 bg-foreground/10 rounded-lg" />
                        <div className="h-5 w-2/3 bg-foreground/5 rounded-lg" />
                    </div>

                    <div className="relative z-10 p-5 w-full">
                        <motion.div
                            initial={{ y: 10, opacity: 0.8 }}
                            animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0.8 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                            className="w-full bg-muted/80 backdrop-blur border rounded-2xl p-4 flex justify-between items-center"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span className="text-sm font-semibold text-foreground">Interactive Core</span>
                                <span className="text-xs text-foreground/50">Hover to expand</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm">
                                <ArrowRight className="w-4 h-4 text-foreground/50" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 200, y: 150, rotate: 0 }}
                        animate={isHovered ? { opacity: 1, x: 90, y: -40, rotate: -15 } : { opacity: 0, x: 200, y: 150, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute bottom-12 right-12 pointer-events-none z-20 hidden sm:block"
                    >
                        <MousePointer2 className="w-10 h-10 text-foreground/80 fill-foreground/20" />
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

export function FeatureCard2() {
    return <div className="h-full w-full relative flex flex-col justify-center items-center -space-y-6 sm:space-y-2 p-4 md:p-8">
        <div className="flex items-center gap-4 scale-[0.6] sm:scale-[0.8] lg:scale-[1.2]">
            <IsometricBox className="text-neutral-400 dark:text-neutral-600"  >
                <NextIcon className="w-12 h-12" />
            </IsometricBox>
            <IsometricBox className="text-neutral-400 dark:text-neutral-600"  >
                <MotionIcon className="w-10 h-10" />
            </IsometricBox>
            <IsometricBox className="text-neutral-400 dark:text-neutral-600"  >
                <GSAPIcon className="w-12 h-12 text-yellow-400 dark:text-yellow-100" />
            </IsometricBox>
        </div>

        <div className="flex items-center gap-4 scale-[0.6] sm:scale-[0.75] lg:scale-[1.15]">
            <IsometricBox className="text-neutral-400 dark:text-neutral-600"  >
                <ReactIcon className="w-12 h-12" />
            </IsometricBox>
            <IsometricBox className="text-neutral-400 dark:text-neutral-600"  >
                <TailwindIcon className="w-12 h-12 text-sky-500" />
            </IsometricBox>
        </div>

        <div className="flex items-center gap-4 scale-[0.6] sm:scale-[0.7] lg:scale-[1.1]">
            <IsometricBox className="text-neutral-400 dark:text-neutral-600"  >
                <TypeScriptIcon className="w-10 h-10" />
            </IsometricBox>
        </div>

    </div>
}

export function FeatureCard3() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin: "160px 0px", threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return <div ref={ref} className="h-full w-full relative p-4 md:p-8 flex flex-col gap-4 md:gap-8 justify-between overflow-hidden">
        <div className="flex items-center justify-between">
            <Avatar image="/avatars/aizen.jpg" />
            <Avatar image="/avatars/pinky-aizen.jpg" />
            <Avatar image="/avatars/shinji.jpg" />
        </div>
        <div className="flex items-center justify-between">
            <Avatar image="/avatars/johan.jpg" />
            <LogoHolder />
            <Avatar image="/avatars/batmaaanji.jpg" />
        </div>

        <ConnectorLine className="text-neutral-200 -z-10 dark:text-neutral-800 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={3} length={340} animate={isVisible} delay={0.2} />


        <ConnectorLine className="hidden lg:block text-neutral-200 -z-10 dark:text-neutral-800 absolute left-20 bottom-19" strokeWidth={3} length={300} orientation="horizontal" animate={isVisible} delay={0.9} />

        <ConnectorLine className="hidden lg:block text-neutral-200 -z-10 dark:text-neutral-800 absolute right-20 bottom-19 rotate-180" strokeWidth={3} length={300} orientation="horizontal" animate={isVisible} />


        <ConnectorLine className="hidden md:block lg:hidden text-neutral-200 -z-10 dark:text-neutral-800 absolute left-20 bottom-16" strokeWidth={3} length={200} orientation="horizontal" animate={isVisible} delay={0.9} />

        <ConnectorLine className="hidden md:block lg:hidden text-neutral-200 -z-10 dark:text-neutral-800 absolute right-20 bottom-16 rotate-180" strokeWidth={3} length={200} orientation="horizontal" animate={isVisible} />


        <ConnectorLine className="hidden sm:block md:hidden text-neutral-200 -z-10 dark:text-neutral-800 absolute left-15 bottom-12" strokeWidth={3} length={280} orientation="horizontal" animate={isVisible} delay={0.9} />

        <ConnectorLine className="hidden sm:block md:hidden text-neutral-200 -z-10 dark:text-neutral-800 absolute right-15 bottom-12 rotate-180" strokeWidth={3} length={280} orientation="horizontal" animate={isVisible} />


        <ConnectorLine className="sm:hidden text-neutral-200 -z-10 dark:text-neutral-800 absolute left-15 bottom-12" strokeWidth={3} length={165} orientation="horizontal" animate={isVisible} delay={0.9} />

        <ConnectorLine className="sm:hidden text-neutral-200 -z-10 dark:text-neutral-800 absolute right-15 bottom-12 rotate-180" strokeWidth={3} length={165} orientation="horizontal" animate={isVisible} />




        <CornerConnector className="hidden lg:block text-neutral-200 -z-10 dark:text-neutral-800 absolute left-16 top-25" style={{ width: "calc(50% - 3.25rem)" }} strokeWidth={3} width={325} animate={isVisible} delay={0.4} />

        <CornerConnector className="hidden lg:block text-neutral-200 -z-10 dark:text-neutral-800 absolute right-16 top-25 transform-[scaleX(-1)]" style={{ width: "calc(50% - 3.25rem)" }} strokeWidth={3} width={325} animate={isVisible} delay={1} />

        <CornerConnector className="hidden md:block lg:hidden text-neutral-200 -z-10 dark:text-neutral-800 absolute left-16 top-25" style={{ width: "calc(50% - 3.25rem)" }} strokeWidth={3} width={200} animate={isVisible} delay={0.4} />

        <CornerConnector className="hidden md:block lg:hidden text-neutral-200 -z-10 dark:text-neutral-800 absolute right-16 top-25 transform-[scaleX(-1)]" style={{ width: "calc(50% - 3.25rem)" }} strokeWidth={3} width={200} animate={isVisible} delay={1} />



        <div className="rounded-full size-6 bg-zinc-800 flex items-center justify-center p-[2px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-39">
            <span className="rounded-full w-full h-full border border-zinc-200 dark:border-zinc-800 bg-muted flex items-center justify-center" />
        </div>
    </div>
}

function LogoHolder({ className }: { className?: string }) {
    return <div className={cn("lg:w-24 lg:h-24 w-16 h-16 md:w-18 md:h-18 rounded-md border shadow border-zinc-600 dark:border-zinc-800 overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-1 flex", className)}>
        <div className="h-full w-full overflow-hidden rounded-sm border border-zinc-200 dark:border-zinc-800 bg-muted flex items-center justify-center">
            <LogoIcon className="w-12 h-12 text-zinc-500 rotate-180" />
        </div>
    </div>
}

function MiniLandingPage({ isWireframe }: { isWireframe: boolean }) {
    if (isWireframe) {
        return (
            <div className="w-full h-full flex flex-col p-3 sm:p-4 md:p-5 gap-4 sm:gap-6 select-none bg-background">
                <div className="flex justify-between items-center pb-2 sm:pb-3 border-b-2 border-dashed border-foreground/20">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg border-2 border-dashed border-foreground/30" />
                        <div className="w-12 h-2 sm:w-16 sm:h-3 rounded-sm border-2 border-dashed border-foreground/20 hidden sm:block" />
                    </div>
                    <div className="flex gap-2 sm:gap-4">
                        <div className="w-8 h-1.5 sm:w-10 sm:h-2 rounded border-2 border-dashed border-foreground/20" />
                        <div className="w-10 h-1.5 sm:w-14 sm:h-2 rounded border-2 border-dashed border-foreground/20" />
                        <div className="w-10 h-1.5 sm:w-12 sm:h-2 rounded border-2 border-dashed border-foreground/20 hidden sm:block" />
                    </div>
                    <div className="w-16 h-6 sm:w-20 sm:h-8 rounded-lg border-2 border-dashed border-foreground/30" />
                </div>
                <div className="flex flex-col items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <div className="flex flex-col items-center gap-1.5 sm:gap-2 w-full">
                        <div className="w-5/6 h-5 sm:h-6 rounded-md border-2 border-dashed border-foreground/40" />
                        <div className="w-3/5 h-5 sm:h-6 rounded-md border-2 border-dashed border-foreground/40" />
                    </div>
                    <div className="w-2/3 h-2 sm:h-3 rounded border-2 border-dashed border-foreground/20 mt-1 sm:mt-2" />
                    <div className="w-1/2 h-2 sm:h-3 rounded border-2 border-dashed border-foreground/20" />
                    <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <div className="w-20 h-8 sm:w-28 sm:h-10 rounded-xl border-2 border-dashed border-foreground/40" />
                        <div className="w-20 h-8 sm:w-28 sm:h-10 rounded-xl border-2 border-dashed border-foreground/30 bg-foreground/5" />
                    </div>
                    <div className="flex mt-1.5 sm:mt-2 items-center gap-2">
                        <div className="flex -space-x-2 sm:-space-x-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-dashed border-foreground/20" />
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-dashed border-foreground/20" />
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-dashed border-foreground/20" />
                        </div>
                        <div className="w-12 h-1.5 sm:w-16 sm:h-2 rounded border-2 border-dashed border-foreground/20" />
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col p-3 sm:p-4 md:p-5 gap-4 sm:gap-6 select-none bg-background">
            <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-foreground/5">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-linear-to-tr from-zinc-800 to-zinc-600 shadow-lg shadow-zinc-500/20 flex items-center justify-center shrink-0">
                    <Layers className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                
                <div className="flex gap-3 sm:gap-4 items-center">
                    <div className="text-[8px] sm:text-[10px] font-bold text-foreground/60 hover:text-foreground transition-colors cursor-pointer">Product</div>
                    <div className="text-[8px] sm:text-[10px] font-bold text-foreground/60 hover:text-foreground transition-colors cursor-pointer">Features</div>
                </div>

                <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-foreground text-background flex items-center justify-center shadow-lg font-bold text-[8px] sm:text-[10px] hover:bg-foreground/90 transition-colors cursor-pointer whitespace-nowrap shrink-0">
                    Sign Up
                </div>
            </div>
            
            <div className="flex flex-col items-center mt-4 sm:mt-6 relative">
                
                <h1 className="text-lg sm:text-2xl font-bold tracking-tight leading-tight text-foreground text-center relative z-10 w-[95%]">
                    Ship landing pages <br/> at lightspeed
                </h1>
                
                <p className="text-[8px] sm:text-[10px] text-foreground/60 text-center relative z-10 max-w-[85%] mt-1.5 sm:mt-2 leading-relaxed">
                    Stop rebuilding the same UI elements. Pre-built components designed for speed and consistency.
                </p>
                
                <div className="flex mt-1.5 sm:mt-2 items-center gap-1.5 sm:gap-2 relative z-10">
                    <div className="flex -space-x-2 sm:-space-x-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-400 border-2 border-background z-30 shadow-sm" />
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-400 border-2 border-background z-20 shadow-sm" />
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-400 border-2 border-background z-10 shadow-sm" />
                    </div>
                    <div className="text-[7.5px] sm:text-[9px] font-medium text-foreground/60">Trusted by 10k+ developers</div>
                </div>

                <div className="flex w-full max-w-[220px] sm:max-w-[260px] gap-1.5 sm:gap-2 mt-4 sm:mt-6 relative z-10">
                    <div className="flex-1 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-muted border flex items-center px-2 sm:px-3 shadow-sm">
                        <span className="text-[8px] sm:text-[10px] text-foreground/50 font-medium">Enter your email</span>
                    </div>
                    <div className="h-8 sm:h-10 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-foreground shadow-xl flex items-center gap-1 sm:gap-1.5 justify-center cursor-pointer hover:bg-foreground/90 transition-colors text-background">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="text-[8px] sm:text-[10px] font-bold">Get Early Access</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export function FeatureCard4() {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div 
            className="bg-muted dark:bg-muted/60 w-full h-full flex justify-center items-center overflow-hidden relative min-h-[350px] md:min-h-[500px] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-30" />

            <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 1.0, duration: 0.4 }}
                    className="absolute top-1/2 right-1/2 translate-x-0 -translate-y-[150px] mr-[160px] md:mr-[180px] flex items-center justify-end"
                >
                    <div className="bg-background text-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl border whitespace-nowrap">Navbar Component</div>
                    <svg width="40" height="2" className="overflow-visible mx-2">
                        <line x1="0" y1="1" x2="40" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-foreground/30" />
                        <circle cx="40" cy="1" r="3" className="fill-blue-500" />
                    </svg>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                    className="absolute top-1/2 left-1/2 -translate-y-[10px] ml-[160px] md:ml-[180px] flex items-center"
                >
                    <svg width="40" height="2" className="overflow-visible mx-2">
                        <line x1="40" y1="1" x2="0" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-foreground/30" />
                        <circle cx="0" cy="1" r="3" className="fill-emerald-500" />
                    </svg>
                    <div className="bg-background text-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl border whitespace-nowrap">Hero Block</div>
                </motion.div>
            </div>

            <motion.div 
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative z-10 w-[90%] sm:w-72 md:w-80 h-[300px] sm:h-[350px] md:h-[400px] bg-background border rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-none"
            >

                
                <div className="absolute inset-0 z-0">
                    <MiniLandingPage isWireframe={true} />
                </div>

                <motion.div 
                    initial={{ height: "0%" }}
                    animate={isHovered ? { height: "100%" } : { height: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full z-10 overflow-hidden bg-background"
                >
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
                        <MiniLandingPage isWireframe={false} />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-500 shadow-[0_0_20px_rgba(113,113,122,1)]" />
                </motion.div>

            </motion.div>
        </div>
    )
}
