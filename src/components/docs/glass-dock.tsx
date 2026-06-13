"use client";

import { GlassDock } from "@/components/ui/glass-dock";
import {
    Home,
    Mail,
    FileText,
    MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function GlassDockDemo() {
    // The items must match the titles 'Home', 'Blog', 'Marker', 'Email', 'LinkedIn', 'X', 'Github' case-insensitive to trigger animations.
    // Lucide icons are placeholders here; the component will swap them for Animated Icons if title matches.
    const items = [
        { title: 'Home', icon: Home, href: '#' },
        { title: 'Blog', icon: FileText, href: '#' },
        { title: 'Marker', icon: MapPin, href: '#' },
        { title: 'Email', icon: Mail, href: '#' },
        { title: 'LinkedIn', icon: FaLinkedin, href: '#' },
        { title: 'X', icon: FaTwitter, href: '#' },
        { title: 'Github', icon: FaGithub, href: '#' },
    ];

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-24">
                Dock
            </span>
            <div className="absolute bottom-10 w-full flex justify-center">
                <GlassDock items={items} />
            </div>
        </div>
    );
}
