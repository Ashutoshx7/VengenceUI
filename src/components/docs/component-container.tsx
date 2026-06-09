import React from 'react';
import { cn } from "@/lib/utils";

interface ComponentContainerProps {
    children: React.ReactNode;
    className?: string;
    minHeight?: string;
    showGrid?: boolean;
}

export function ComponentContainer({
    children,
    className,
    minHeight = "min-h-[350px]",
    showGrid = true,
}: ComponentContainerProps) {
    return (
        <div
            className={cn(
                "relative w-full rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "bg-background dark:bg-[#0c0c0c] shadow-sm",
                className
            )}
        >
            {/* Grid Background */}
            {showGrid && (
                <div
                    className={cn(
                        minHeight,
                        "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)]",
                        "[background-size:16px_16px]"
                    )}
                />
            )}

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-background/50 dark:bg-background/30 pointer-events-none" />

            {/* Content */}
            <div
                className={cn(
                    minHeight,
                    "relative z-10 flex items-center justify-center p-10 w-full"
                )}
            >
                {children}
            </div>
        </div>
    );
}
