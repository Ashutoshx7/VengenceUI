"use client";

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Eye, Copy, Check, Terminal } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "next-themes";
import { ComponentInstallation } from "./component-installation";

interface ComponentPreviewProps {
    component: React.ReactNode;
    code: string;
    title?: string;
    className?: string;
    description?: string;
    installation?: {
        cli: string;
        manual: React.ReactNode;
    };
}

export function ComponentPreview({
    component,
    code,
    title,
    className,
    description,
    installation,
}: ComponentPreviewProps) {
    const [activeTab, setActiveTab] = useState("preview");
    const [hasCopied, setHasCopied] = useState(false);
    const { resolvedTheme } = useTheme();
    const uniqueId = React.useId();

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    const vibrantDarkTheme = {
        plain: {
            color: "#a1a1aa",
            backgroundColor: "transparent",
        },
        styles: [
            {
                types: ["comment", "prolog", "doctype", "cdata"],
                style: { color: "#3f3f46", fontStyle: "italic" as const },
            },
            {
                types: ["punctuation", "operator"],
                style: { color: "#52525b" },
            },
            {
                types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
                style: { color: "#8bb8d0" },
            },
            {
                types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
                style: { color: "#c9a87c" },
            },
            {
                types: ["url", "variable", "function", "class-name"],
                style: { color: "#8ec8b0" },
            },
            {
                types: ["atrule", "attr-value", "keyword"],
                style: { color: "#a0a0cc" },
            },
            {
                types: ["regex", "important"],
                style: { color: "#c4908a" },
            },
        ],
    };

    const vibrantLightTheme = {
        plain: {
            color: "#52525b",
            backgroundColor: "transparent",
        },
        styles: [
            {
                types: ["comment", "prolog", "doctype", "cdata"],
                style: { color: "#a1a1aa", fontStyle: "italic" as const },
            },
            {
                types: ["punctuation", "operator"],
                style: { color: "#71717a" },
            },
            {
                types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
                style: { color: "#4a7f94" },
            },
            {
                types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
                style: { color: "#8a6d3b" },
            },
            {
                types: ["url", "variable", "function", "class-name"],
                style: { color: "#3d7a5f" },
            },
            {
                types: ["atrule", "attr-value", "keyword"],
                style: { color: "#6b6b99" },
            },
            {
                types: ["regex", "important"],
                style: { color: "#996b6b" },
            },
        ],
    };

    // ... inside ComponentPreview ...

    // Lazy loading logic
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "50px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={cn("group relative my-8 flex flex-col space-y-4", className)}>
            <div className="flex flex-col space-y-1.5">
                {description && <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{description}</p>}
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="relative w-full rounded-sm overflow-hidden border border-neutral-200 dark:border-[#222] bg-neutral-50 dark:bg-zinc-950">
                <div className="flex items-center justify-between px-3 py-2.5 border-b border-neutral-200 dark:border-[#222] bg-white dark:bg-zinc-900/80">
                    <TabsList className="justify-start gap-6 bg-transparent p-0">
                        {['preview', 'code'].map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <TabsTrigger
                                    key={tab}
                                    value={tab}
                                    className={cn(
                                        "relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-none transition-colors select-none z-10",
                                        "bg-transparent hover:bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                                        isActive
                                            ? "text-neutral-900 dark:text-white"
                                            : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId={`active-tab-${uniqueId}`}
                                            className="absolute bottom-[-11px] left-0 right-0 h-[2px] bg-neutral-900 dark:bg-white"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        {tab === 'preview' ? (
                                            <Eye className="w-4 h-4" />
                                        ) : (
                                            <Code className="w-4 h-4" />
                                        )}
                                        <span className="capitalize">{tab}</span>
                                    </span>
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    <button
                        onClick={onCopy}
                        className="flex items-center justify-center w-8 h-8 rounded-md bg-neutral-100 dark:bg-black border border-neutral-200 dark:border-[#222] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all active:scale-95 hover:bg-neutral-200 dark:hover:bg-neutral-900"
                        aria-label="Copy code"
                    >
                        {hasCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>

                <motion.div
                    className="relative bg-neutral-50 dark:bg-zinc-950 overflow-hidden"
                >
                    <TabsContent value="preview" className="m-0 min-h-[350px] flex items-center justify-center bg-white dark:bg-zinc-950">
                        <div className="absolute inset-0 bg-white/30 dark:bg-zinc-950/30 pointer-events-none" />

                        <div className="preview relative z-10 flex min-h-[350px] w-full items-center justify-center p-10">
                            {isVisible ? component : (
                                <div className="flex flex-col items-center gap-2 text-neutral-400">
                                    <div className="w-8 h-8 border-2 border-neutral-300 dark:border-neutral-700 border-t-transparent rounded-full animate-spin" />
                                    <span className="text-xs font-medium">Loading Preview...</span>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="code" className="m-0 bg-neutral-50 dark:bg-zinc-950">
                        <div className="relative group/code">
                            <div className="relative text-base font-mono overflow-x-auto max-h-[400px]">
                                <Highlight
                                    theme={resolvedTheme === 'dark' ? vibrantDarkTheme as any : vibrantLightTheme as any}
                                    code={code}
                                    language="tsx"
                                >
                                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                        <pre className={cn(className, "p-6 text-base leading-relaxed font-mono")} style={{ ...style, backgroundColor: 'transparent' }}>
                                            {tokens.map((line, i) => (
                                                <div key={i} {...getLineProps({ line })}>
                                                    <span className="select-none opacity-30 mr-4 w-4 inline-block text-right text-xs text-neutral-600">{i + 1}</span>
                                                    {line.map((token, key) => (
                                                        <span key={key} {...getTokenProps({ token })} />
                                                    ))}
                                                </div>
                                            ))}
                                        </pre>
                                    )}
                                </Highlight>
                            </div>
                        </div>
                    </TabsContent>
                </motion.div>
            </Tabs>

            {installation && (
                <ComponentInstallation cli={installation.cli} manual={installation.manual} />
            )}
        </div>
    );
}
