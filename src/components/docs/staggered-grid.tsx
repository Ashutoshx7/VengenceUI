"use client";

import { StaggeredGrid, BentoItem } from "@/components/ui/staggered-grid";
import { FaGithub, FaSlack, FaTwitter } from "react-icons/fa";

export function StaggeredGridDemo({ className }: { className?: string }) {
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
            icon: <FaGithub className="w-4 h-4" />,
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Connect",
            subtitle: "Team Communication",
            description: "Real-time messaging, file sharing, and instant collaboration.",
            icon: <FaSlack className="w-4 h-4" />,
            image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Reach",
            subtitle: "Audience Engagement",
            description: "Amplify your voice and connect globally in real-time.",
            icon: <FaTwitter className="w-4 h-4" />,
            image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=600&fit=crop"
        },
    ];

    return (
        <div className={`relative w-full h-full overflow-y-auto overflow-x-hidden staggered-demo-scroller ${className || ''}`}>
            {/* Scroll Indicator */}
            <div className="sticky top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <div className="px-4 py-2 bg-black/80 dark:bg-white/80 backdrop-blur-md rounded-full text-xs font-medium text-white dark:text-black shadow-xl flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white dark:bg-black"></span>
                    </span>
                    Scroll down to animate
                </div>
            </div>
            
            <div className="w-full flex flex-col items-center pb-[20vh] min-h-[150vh]">
               <StaggeredGrid
                   images={images}
                   bentoItems={bentoItems}
                   centerText="STAGGERED"
                   showFooter={false}
                   scroller=".staggered-demo-scroller"
                   className="scale-[0.85] origin-top md:scale-100"
               />
            </div>
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
            icon: <FaGithub className="w-4 h-4" />,
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Connect",
            subtitle: "Team Communication",
            description: "Real-time messaging, file sharing, and instant collaboration.",
            icon: <FaSlack className="w-4 h-4" />,
            image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Reach",
            subtitle: "Audience Engagement",
            description: "Amplify your voice and connect globally in real-time.",
            icon: <FaTwitter className="w-4 h-4" />,
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
