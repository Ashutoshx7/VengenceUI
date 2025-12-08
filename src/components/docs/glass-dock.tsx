"use client";

import { GlassDock } from "@/components/ui/glass-dock";
import {
    Home,
    Terminal,
    Layout,
    Archive,
    History,
    Twitter,
    Github,
} from "lucide-react";

export function GlassDockDemo() {
    const items = [
        { title: 'Home', icon: Home, href: '#' },
        { title: 'Products', icon: Terminal, href: '#' },
        { title: 'Components', icon: Layout, href: '#' },
        { title: 'Archive', icon: Archive, href: '#' },
        { title: 'Changelog', icon: History, href: '#' },
        { title: 'Twitter', icon: Twitter, href: '#' },
        { title: 'Github', icon: Github, href: '#' },
    ];

    return (
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-24">
                Dock
            </span>
            <div className="absolute bottom-10 w-full flex justify-center">
                <GlassDock items={items} />
            </div>
        </div>
    );
}
