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
            color: "#22c55e", // green-500
            backgroundColor: "transparent",
        },
        styles: [
            {
                types: ["comment", "prolog", "doctype", "cdata"],
                style: { color: "#525252" },
            },
            {
                types: ["punctuation", "operator"],
                style: { color: "#737373" },
            },
            {
                types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
                style: { color: "#38bdf8" }, // sky-400
            },
            {
                types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
                style: { color: "#fbbf24" }, // amber-400
            },
            {
                types: ["url", "variable", "function", "class-name"],
                style: { color: "#38bdf8" }, // sky-400
            },
            {
                types: ["atrule", "attr-value", "keyword"],
                style: { color: "#e879f9" }, // fuchsia-400
            },
            {
                types: ["regex", "important"],
                style: { color: "#f87171" }, // red-400
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

            <Tabs value={activeTab} onValueChange={setActiveTab} className="relative w-full !border-[1px] !border-neutral-200 dark:!border-neutral-700 rounded-xl overflow-hidden bg-neutral-100 dark:bg-black border-b border-neutral-200 dark:border-neutral-900">
                <div className="flex items-center justify-between px-3 py-2.5 border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-black">
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
                        className="flex items-center justify-center w-8 h-8 rounded-md bg-neutral-100 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all active:scale-95 hover:bg-neutral-200 dark:hover:bg-neutral-900"
                        aria-label="Copy code"
                    >
                        {hasCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>

                <motion.div
                    className="relative bg-neutral-100 dark:bg-black overflow-hidden"
                >
                    <TabsContent value="preview" className="m-0 min-h-[350px] flex items-center justify-center bg-white dark:bg-black">
                        {/* Optional: Add a subtle overlay so the grid isn't too harsh */}
                        <div className="absolute inset-0 bg-white/30 dark:bg-neutral-950/30 pointer-events-none" />

                        <div className="preview relative z-10 flex min-h-[350px] w-full items-center justify-center p-10">
                            {isVisible ? component : (
                                <div className="flex flex-col items-center gap-2 text-neutral-400">
                                    <div className="w-8 h-8 border-2 border-neutral-300 dark:border-neutral-700 border-t-transparent rounded-full animate-spin" />
                                    <span className="text-xs font-medium">Loading Preview...</span>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="code" className="m-0 bg-neutral-100 dark:bg-[#161616]">
                        <div className="relative group/code">
                            <div className="relative text-base font-mono overflow-x-auto max-h-[400px]">
                                <Highlight
                                    theme={resolvedTheme === 'dark' ? vibrantDarkTheme as any : themes.vsLight}
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
