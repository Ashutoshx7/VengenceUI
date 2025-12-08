'use client';

import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface DockItem {
    title: string;
    icon: LucideIcon;
    onClick?: () => void;
    href?: string;
}

export interface GlassDockProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Array of dock items with title, icon, and optional callbacks
     */
    items: DockItem[];
    /**
     * Custom class for the dock container
     */
    dockClassName?: string;
}

export const GlassDock = React.forwardRef<HTMLDivElement, GlassDockProps>(
    (
        {
            items,
            className,
            dockClassName,
            ...props
        },
        ref
    ) => {
        const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
        const [direction, setDirection] = useState(0);

        const handleMouseEnter = (index: number) => {
            if (hoveredIndex !== null && index !== hoveredIndex) {
                setDirection(index > hoveredIndex ? 1 : -1);
            }
            setHoveredIndex(index);
        };

        const getTooltipPosition = (index: number) => index * 52 + 12;

        return (
            <div
                ref={ref}
                className={cn('w-max', className)}
                {...props}
            >
                <div
                    className={cn(
                        'relative flex gap-4 items-center px-6 py-4 rounded-2xl',
                        'bg-white dark:bg-black',
                        'border border-neutral-200 dark:border-neutral-700',
                        'shadow-lg shadow-black/10 dark:shadow-white/10',
                        dockClassName
                    )}
                    onMouseLeave={() => {
                        setHoveredIndex(null);
                        setDirection(0);
                    }}
                >
                    <AnimatePresence>
                        {hoveredIndex !== null && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: -60,
                                    x: getTooltipPosition(hoveredIndex),
                                }}
                                exit={{ opacity: 0, scale: 0.92, y: 12 }}
                                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                                className="absolute top-0 left-0 pointer-events-none z-30"
                            >
                                <div
                                    className={cn(
                                        'px-5 py-2 rounded-lg',
                                        'bg-black text-white dark:bg-white dark:text-black',
                                        'shadow-md flex items-center justify-center',
                                        'border border-neutral-700 dark:border-neutral-300',
                                        'min-w-[100px] '
                                    )}
                                >
                                    <div className="relative h-4 flex items-center justify-center overflow-hidden w-full">
                                        <AnimatePresence mode="popLayout" custom={direction}>
                                            <motion.span
                                                key={items[hoveredIndex].title}
                                                custom={direction}
                                                initial={{
                                                    x: direction > 0 ? 35 : -35,
                                                    opacity: 0,
                                                    filter: 'blur(6px)',
                                                }}
                                                animate={{
                                                    x: 0,
                                                    opacity: 1,
                                                    filter: 'blur(0px)',
                                                }}
                                                exit={{
                                                    x: direction > 0 ? -35 : 35,
                                                    opacity: 0,
                                                    filter: 'blur(6px)',
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: 'easeOut',
                                                }}
                                                className="text-[13px] font-medium tracking-wide whitespace-nowrap"
                                            >
                                                {items[hoveredIndex].title}
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {items.map((el, index) => {
                        const Icon = el.icon;
                        const isHovered = hoveredIndex === index;
                        const handleClick = () => {
                            if (el.onClick) {
                                el.onClick();
                            } else if (el.href) {
                                window.location.href = el.href;
                            }
                        };

                        return (
                            <div
                                key={el.title}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onClick={handleClick}
                                className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleClick();
                                    }
                                }}
                            >
                                <motion.div
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        scale: isHovered ? 1.1 : 1,
                                        y: isHovered ? -3 : 0,
                                    }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={2}
                                        className={cn(
                                            'transition-colors duration-200',
                                            isHovered
                                                ? 'text-neutral-900 dark:text-white'
                                                : 'text-neutral-500 dark:text-neutral-400'
                                        )}
                                    />
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
);

GlassDock.displayName = 'GlassDock';

export default GlassDock;