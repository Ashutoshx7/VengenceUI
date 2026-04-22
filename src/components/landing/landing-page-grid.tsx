"use client"

import React, { useEffect, useRef, useState, useMemo } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesLoaded from 'imagesloaded'
import { cn } from "@/lib/utils"
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
    Sparkles, Book, Grid3X3, Users,
    Layers, Type, MousePointer2, Palette, Dock, PanelTop, Image as ImageIcon,
    Home, Settings, User
} from 'lucide-react'

// Local Landing Components
import PerspectiveGrid from './perspective-grid'
import GlowBorderCard from './glow-border-card'

// Replace missing kit blocks with dummy placeholders
const CreepyButton = ({ children, className }: any) => <div className={`text-sm border rounded-md p-2 ${className || ''}`}>{children}</div>
const AnimatedButton = ({ children, className }: any) => <div className={`text-sm border rounded-md p-2 ${className || ''}`}>{children}</div>
const FlipText = ({ children, className }: any) => <div className={`text-sm font-bold ${className || ''}`}>{children}</div>
const LiquidText = ({ text, className }: any) => <div className={`text-sm font-bold ${className || ''}`}>{text}</div>
const LightLines = ({ className }: any) => <div className={`absolute inset-0 bg-white/5 border border-white/10 rounded-md ${className || ''}`}></div>
const TestimonialsCard = ({ className }: any) => <div className={`text-sm border rounded-md p-2 ${className || ''}`}>Testimonials</div>

// --- Optimization: Lazy Preview Wrapper ---
const LazyPreview = React.memo(({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full flex items-center justify-center">
            {isVisible ? children : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-100/50 dark:bg-zinc-900/50 rounded-xl animate-pulse">
                    <div className="w-8 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-700 border-t-zinc-500 animate-spin" />
                </div>
            )}
        </div>
    );
});
LazyPreview.displayName = "LazyPreview";

gsap.registerPlugin(ScrollTrigger)

interface ComponentPreview {
    id: string
    name: string
    icon: React.ReactNode
    preview?: React.ReactNode
    docPath: string
}

export interface LandingPageGridProps {
    centerText?: string
    className?: string
    showFooter?: boolean
}

export function LandingPageGrid({
    centerText = "Explore",
    className,
    showFooter = false
}: LandingPageGridProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [activeBento, setActiveBento] = useState<number>(0)
    const gridFullRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    const splitText = (text: string) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block" style={{ willChange: 'transform' }}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))
    }

    const documentedComponents: ComponentPreview[] = useMemo(() => [
        {
            id: 'animated-button',
            name: 'Animated Button',
            icon: <MousePointer2 className="w-6 h-6" />,
            preview: (
                <LazyPreview>
                    <AnimatedButton className="text-sm px-4 py-2">Hover Me</AnimatedButton>
                </LazyPreview>
            ),
            docPath: '/button'
        },
        {
            id: 'creepy-button',
            name: 'Creepy Button',
            icon: <Sparkles className="w-6 h-6" />,
            preview: (
                <LazyPreview>
                    <CreepyButton>Click Me</CreepyButton>
                </LazyPreview>
            ),
            docPath: '/button'
        },
        {
            id: 'flip-text',
            name: 'Flip Text',
            icon: <Type className="w-6 h-6" />,
            preview: (
                <LazyPreview>
                    <FlipText className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
                        Flip
                    </FlipText>
                </LazyPreview>
            ),
            docPath: '/text-effect'
        },
        {
            id: 'glow-border-card',
            name: 'Glow Card',
            icon: <Palette className="w-8 h-8" />,
            preview: (
                <LazyPreview>
                    <GlowBorderCard
                        width="100%"
                        height="100%"
                        colorPreset="aurora"
                        animationDuration={6}
                        borderRadius="0.75rem"
                    />
                </LazyPreview>
            ),
            docPath: '/card'
        },
        {
            id: 'liquid-text',
            name: 'Liquid Text',
            icon: <Type className="w-6 h-6" />,
            preview: (
                <LazyPreview>
                    <div className="scale-75">
                        <LiquidText text="Liquid" className="text-base h-[150px]" />
                    </div>
                </LazyPreview>
            ),
            docPath: '/text-effect'
        },
        {
            id: 'perspective-grid',
            name: 'Perspective Grid',
            icon: <Layers className="w-8 h-8" />,
            preview: (
                <LazyPreview>
                    <div className="relative w-full h-full overflow-hidden">
                        <PerspectiveGrid gridSize={4} showOverlay={true} fadeRadius={85} className="absolute inset-0" />
                    </div>
                </LazyPreview>
            ),
            docPath: '/background'
        },
        {
            id: 'light-lines',
            name: 'Light Lines',
            icon: <Sparkles className="w-8 h-8" />,
            preview: (
                <LazyPreview>
                    <div className="absolute inset-0 w-full h-full">
                        <LightLines className="absolute inset-0" speedMultiplier={0.5} />
                    </div>
                </LazyPreview>
            ),
            docPath: '/background'
        },
        {
            id: 'testimonials-card',
            name: 'Testimonials',
            icon: <Users className="w-8 h-8" />,
            preview: (
                <LazyPreview>
                    <div className="w-full h-full flex items-center justify-center scale-[0.35]">
                        <TestimonialsCard
                            items={[
                                { id: '1', title: "Amazing!", description: "Best UI library ever", image: "https://i.pravatar.cc/150?u=1" },
                                { id: '2', title: "Love it!", description: "So easy to use", image: "https://i.pravatar.cc/150?u=2" },
                            ]}
                            showNavigation={false}
                            showCounter={false}
                            autoPlay={false}
                        />
                    </div>
                </LazyPreview>
            ),
            docPath: '/testimonials'
        },
    ], []);

    const featuredComponents = useMemo(() => [
        {
            id: 'card-1',
            name: 'Light Lines',
            preview: (
                <LazyPreview>
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <LightLines className="absolute inset-0" speedMultiplier={0.5} />
                    </div>
                </LazyPreview>
            ),
        },
        {
            id: 'card-2',
            name: 'Perspective Grid',
            preview: (
                <LazyPreview>
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <PerspectiveGrid gridSize={10} showOverlay={true} fadeRadius={90} className="absolute inset-0" />
                    </div>
                </LazyPreview>
            ),
        },
        {
            id: 'card-3',
            name: 'Glow Card',
            preview: (
                <LazyPreview>
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <GlowBorderCard width="100%" height="100%" colorPreset="aurora" />
                    </div>
                </LazyPreview>
            ),
        },
    ], []);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoaded(true)
        }
        imagesLoaded(document.querySelectorAll('.grid__item-img'), { background: true }, handleLoad)
        const timer = setTimeout(handleLoad, 1000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (!isLoaded) return

        // Animate Text
        if (textRef.current) {
            const chars = textRef.current.querySelectorAll('.char')
            gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top bottom',
                    end: 'center center-=25%',
                    scrub: 2.5,
                }
            }).from(chars, {
                ease: 'sine.out',
                yPercent: 150,
                autoAlpha: 0,
                stagger: { each: 0.05, from: 'center' },
                force3D: true,
                lazy: true
            })
        }

        // Animate Grid
        const mm = gsap.matchMedia();
        const animateGrid = () => {
            if (!gridFullRef.current) return;

            const gridFullItems = gridFullRef.current.querySelectorAll('.grid__item')
            const gridStyle = getComputedStyle(gridFullRef.current);
            const numColumns = gridStyle.getPropertyValue('grid-template-columns').split(' ').length
            const middleColumnIndex = Math.floor(numColumns / 2)

            const columns: Element[][] = Array.from({ length: numColumns }, () => [])
            gridFullItems.forEach((item: any, index: number) => {
                const columnIndex = index % numColumns
                columns[columnIndex].push(item)
            })

            columns.forEach((columnItems, columnIndex) => {
                const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.1

                gsap.timeline({
                    scrollTrigger: {
                        trigger: gridFullRef.current,
                        start: 'top bottom',
                        end: 'center center',
                        scrub: 2.5,
                        invalidateOnRefresh: true,
                        fastScrollEnd: true,
                    }
                }).from(columnItems, {
                    yPercent: 100,
                    autoAlpha: 0,
                    delay: delayFactor,
                    ease: 'sine.out',
                    force3D: true,
                    lazy: true,
                    stagger: 0.05
                })
            })

            const bentoContainer = gridFullRef.current.querySelector('.bento-container')
            if (bentoContainer) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: gridFullRef.current,
                        start: 'top top+=15%',
                        end: 'bottom center',
                        scrub: 2.5,
                        invalidateOnRefresh: true,
                    }
                }).to(bentoContainer, {
                    y: 50,
                    zIndex: 100,
                    ease: 'none',
                    force3D: true,
                    overwrite: 'auto',
                    lazy: true
                }, 0)
            }
        }

        mm.add("(min-width: 768px)", animateGrid);
        mm.add("(max-width: 767px)", animateGrid);

        return () => {
            mm.revert();
            ScrollTrigger.getAll().forEach((st: ScrollTrigger) => st.kill());
        };
    }, [isLoaded])

    const gridItems = useMemo(() => [...documentedComponents, ...documentedComponents, ...documentedComponents].slice(0, 21), [documentedComponents])

    return (
        <div className={cn("relative overflow-hidden w-full", className)}>
            {/* Center Text */}
            <section className="grid place-items-center w-full relative pt-20">
                <div ref={textRef} className="text font-bold font-orbitron uppercase flex content-center text-6xl leading-[0.7] text-foreground">
                    {splitText(centerText)}
                </div>
            </section>

            {/* Grid - 7x3 */}
            <section className="grid place-items-center w-full relative">
                <div ref={gridFullRef} className="grid--full relative w-full my-[10vh] h-auto aspect-auto md:aspect-[2] max-w-7xl pb-10 grid gap-4 grid-cols-2 md:grid-cols-7 md:grid-rows-3 px-4">
                    {gridItems.map((item, i) => {
                        // Bento at position 16
                        if (i === 16) {
                            return (
                                <div key="bento-group" className="grid__item bento-container col-span-2 md:col-span-3 row-span-1 relative z-20 flex items-center justify-center gap-2 h-full w-full will-change-transform min-h-[140px] md:min-h-0">
                                    {featuredComponents.map((feat, index) => {
                                        const isActive = activeBento === index
                                        return (
                                            <div
                                                key={feat.id}
                                                className={cn(
                                                    "relative cursor-pointer overflow-hidden rounded-xl h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                    "bg-card border border-foreground/7.5",
                                                    "dark:bg-white/2 dark:backdrop-blur-sm dark:border-white/5",
                                                    isActive ? "shadow-lg flex-[1.5] md:flex-3 border-foreground/15 dark:border-white/10" : "flex-1"
                                                )}
                                                onMouseEnter={() => setActiveBento(index)}
                                                onClick={() => setActiveBento(index)}
                                            >
                                                {feat.preview && (
                                                    <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                                                        {feat.preview}
                                                    </div>
                                                )}
                                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2">
                                                    <div className={cn(
                                                        "absolute inset-0 flex items-center justify-center transition-all duration-500 overflow-hidden px-1",
                                                        isActive ? "opacity-0" : "opacity-100"
                                                    )}>
                                                        <span className="text-[10px] text-muted-foreground font-semibold text-center whitespace-normal leading-tight max-w-full">
                                                            {feat.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }

                        if (i === 17 || i === 18) return null

                        return (
                            <figure
                                key={`${item.id}-${i}`}
                                className={cn(
                                    "grid__item m-0 relative z-10 perspective-midrange will-change-transform group cursor-pointer min-h-[140px] md:min-h-0"
                                )}
                            >
                                <Link href={item.docPath} className="absolute inset-0 z-30 opacity-0">
                                    <span className="sr-only">View {item.name}</span>
                                </Link>
                                <div className="block w-full h-full">
                                    <div className={cn(
                                        "grid__item-img w-full h-full backface-hidden will-change-transform rounded-xl overflow-hidden transition-all duration-500 ease-out",
                                        "bg-card border border-foreground/7.5",
                                        "dark:bg-white/2 dark:backdrop-blur-sm dark:border-white/5",
                                        "group-hover:scale-[1.02] group-hover:border-foreground/15 dark:group-hover:border-white/10"
                                    )}>
                                        <div className="absolute inset-0 flex items-center justify-center p-2 overflow-hidden pointer-events-none">
                                            {item.preview ? (
                                                <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                                    {item.preview}
                                                </div>
                                            ) : (
                                                <div className="text-zinc-400 dark:text-zinc-500 transition-all duration-300 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 group-hover:scale-110">
                                                    {item.icon}
                                                </div>
                                            )}
                                        </div>
                                        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl pointer-events-none" />
                                        <div className="absolute bottom-0 left-0 right-0 p-2 z-20 pointer-events-none">
                                            <span className="text-[10px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors tracking-tight text-center block">
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        )
                    })}
                </div>
            </section>

            {showFooter && (
                <footer className="w-full p-8 flex justify-between items-center relative z-50 text-neutral-900 dark:text-white uppercase font-medium text-xs tracking-wider">
                    <a href="#" className="hover:opacity-60 transition-opacity">Vengeance UI</a>
                    <a href="/docs" className="hover:opacity-60 transition-opacity">View Docs</a>
                </footer>
            )}
        </div>
    )
}

export default LandingPageGrid
