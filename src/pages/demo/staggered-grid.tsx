'use client';

import { StaggeredGrid, BentoItem } from "@/components/ui/staggered-grid";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Github, Slack, Twitter } from "lucide-react";

const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop",
];

const bentoItems: BentoItem[] = [
    {
        id: 1,
        title: "Repository",
        subtitle: "Version Control",
        description: "Secure, scalable, and collaborative code management for modern teams.",
        icon: <Github className="w-4 h-4" />,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
    },
    {
        id: 2,
        title: "Connect",
        subtitle: "Team Communication",
        description: "Real-time messaging, file sharing, and powerful search for instant collaboration.",
        icon: <Slack className="w-4 h-4" />,
        image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        title: "Reach",
        subtitle: "Audience Engagement",
        description: "Amplify your voice and connect with your community globally in real-time.",
        icon: <Twitter className="w-4 h-4" />,
        image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=600&fit=crop"
    },
];

export default function StaggeredGridDemoPage() {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-black">
                {/* Back button */}
                <a
                    href="/docs/staggered-grid"
                    className="fixed top-6 left-6 z-[9999] px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20 transition-all duration-300 flex items-center gap-2"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to Docs
                </a>

                <StaggeredGrid
                    images={images}
                    bentoItems={bentoItems}
                    centerText="STAGGERED"
                    showFooter={true}
                    credits={{
                        madeBy: { text: "VengeUI", href: "/docs" },
                        moreDemos: { text: "More Components", href: "/docs/components-overview" }
                    }}
                />
            </main>
        </SmoothScroll>
    );
}
