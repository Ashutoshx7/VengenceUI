"use client";

import { StaggeredGrid, BentoItem } from "@/components/ui/staggered-grid";
import { Github, Slack, Twitter } from "lucide-react";

// Demo for component preview in docs - shows a visual representation of the grid
export function StaggeredGridDemo() {
    // Column offsets to create staggered effect
    const columnOffsets = [40, 80, 0, 60, 20, 90, 50];

    return (
        <div className="relative w-full h-[500px] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-black">
            {/* Info Text Overlay */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-full border border-neutral-200 dark:border-neutral-700">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                    Static representation • Click{' '}
                    <a
                        href="/demo/staggered-grid"
                        target="_blank"
                        className="font-semibold text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2 transition-colors"
                    >
                        View Live Demo
                    </a>
                    {' '}to see animations
                </p>
            </div>

            {/* Staggered Grid Visual */}
            <div className="absolute inset-0 flex gap-3 px-4 py-4">
                {/* 7 Columns with staggered offsets */}
                {[0, 1, 2, 3, 4, 5, 6].map((colIndex) => (
                    <div
                        key={colIndex}
                        className="flex-1 flex flex-col gap-3"
                        style={{ marginTop: `${columnOffsets[colIndex]}px` }}
                    >
                        {/* 4-5 cards per column */}
                        {[0, 1, 2, 3, 4].map((rowIndex) => {
                            const isBentoRow = rowIndex === 4 && (colIndex === 2 || colIndex === 3 || colIndex === 4);
                            const isExpandedBento = rowIndex === 4 && colIndex === 2;
                            const isCollapsedBento = rowIndex === 4 && (colIndex === 3 || colIndex === 4);

                            // Skip regular cards for bento section
                            if (isBentoRow) return null;

                            // Alternate between icon cards
                            const icons = [Github, Slack, Twitter];
                            const Icon = icons[(colIndex + rowIndex) % 3];

                            return (
                                <div
                                    key={`${colIndex}-${rowIndex}`}
                                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-200/50 dark:border-neutral-700/50 flex items-center justify-center aspect-[3/4] transition-all hover:shadow-md"
                                >
                                    <Icon className="w-6 h-6 text-neutral-300 dark:text-neutral-600" />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Bento Cards at Bottom Center */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 h-[120px] z-10">
                {/* Expanded Bento Card with Image */}
                <div className="w-[200px] rounded-2xl overflow-hidden relative shadow-xl border border-neutral-200/50 dark:border-neutral-700">
                    <img
                        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Reach</span>
                        <Twitter className="w-4 h-4 text-white/80" />
                    </div>
                </div>

                {/* Collapsed Bento Card 1 */}
                <div className="w-[80px] rounded-2xl bg-neutral-900 dark:bg-neutral-950 flex flex-col items-center justify-center gap-2 border border-neutral-800">
                    <Slack className="w-5 h-5 text-neutral-500" />
                    <span className="text-[8px] text-neutral-500 uppercase tracking-wider">Connect</span>
                </div>

                {/* Collapsed Bento Card 2 */}
                <div className="w-[80px] rounded-2xl bg-neutral-900 dark:bg-neutral-950 flex flex-col items-center justify-center gap-2 border border-neutral-800">
                    <Twitter className="w-5 h-5 text-neutral-500" />
                    <span className="text-[8px] text-neutral-500 uppercase tracking-wider">Reach</span>
                </div>
            </div>

            {/* Gradient overlays for edges */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-neutral-100 dark:from-black to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-neutral-100 dark:from-black to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-neutral-100 dark:from-black to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-neutral-100 dark:from-black to-transparent pointer-events-none" />
        </div>
    );
}

// Full page demo component - use this when embedded in a scrollable page
export function StaggeredGridFullDemo() {
    const images = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?w=400&h=300&fit=crop",
    ];

    const bentoItems: BentoItem[] = [
        {
            id: 1,
            title: "Repository",
            subtitle: "Version Control",
            description: "Secure, scalable, and collaborative code management.",
            icon: <Github className="w-4 h-4" />,
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Connect",
            subtitle: "Team Communication",
            description: "Real-time messaging, file sharing, and instant collaboration.",
            icon: <Slack className="w-4 h-4" />,
            image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Reach",
            subtitle: "Audience Engagement",
            description: "Amplify your voice and connect globally in real-time.",
            icon: <Twitter className="w-4 h-4" />,
            image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=600&fit=crop"
        },
    ];

    return (
        <StaggeredGrid
            images={images}
            bentoItems={bentoItems}
            centerText="STAGGERED"
            showFooter={true}
        />
    );
}
