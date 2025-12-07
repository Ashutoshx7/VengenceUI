import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code, Eye, Copy, Check, Terminal } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "next-themes";
import { ComponentContainer } from "./component-container";

interface PreviewTabsProps {
    component: React.ReactNode;
    code: string;
    className?: string;
    minHeight?: string;
    showGrid?: boolean;
}

export function PreviewTabs({
    component,
    code,
    className,
    minHeight = "min-h-[350px]",
    showGrid = true,
}: PreviewTabsProps) {
    const [activeTab, setActiveTab] = useState("preview");
    const [hasCopied, setHasCopied] = useState(false);
    const { resolvedTheme } = useTheme();

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    return (
        <div className={cn("w-full", className)}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="relative w-full">
                {/* Tab Navigation */}
                <div className="flex items-center justify-start pb-4">
                    <TabsList className="relative flex items-center gap-6 bg-transparent p-0 border-none">
                        {[
                            { id: 'preview', label: 'Preview', icon: Eye },
                            { id: 'code', label: 'Code', icon: Terminal },
                        ].map(({ id, label, icon: Icon }) => {
                            const isActive = activeTab === id;
                            return (
                                <TabsTrigger
                                    key={id}
                                    value={id}
                                    className={cn(
                                        "relative flex items-center gap-3 text-sm font-medium transition-colors outline-none cursor-pointer select-none",
                                        "px-4 py-2 rounded-lg",
                                        isActive
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground opacity-70 hover:opacity-100",
                                        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                        "bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                                    )}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Icon className="w-4 h-4" />
                                        <span>{label}</span>
                                    </span>
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </div>

                {/* Tab Content */}
                <motion.div className="relative">
                    {/* Preview Tab */}
                    <TabsContent value="preview" className="m-0">
                        <ComponentContainer minHeight={minHeight} showGrid={showGrid}>
                            {component}
                        </ComponentContainer>
                    </TabsContent>

                    {/* Code Tab */}
                    <TabsContent value="code" className="m-0">
                        <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-700 bg-background dark:bg-[#0c0c0c] overflow-hidden shadow-sm">
                            {/* Copy Button */}
                            <div className="absolute right-4 top-4 z-20 opacity-0 hover:opacity-100 transition-opacity">
                                <button
                                    onClick={onCopy}
                                    className={cn(
                                        "flex items-center justify-center w-8 h-8 rounded-md",
                                        "bg-neutral-100 dark:bg-neutral-800",
                                        "border border-neutral-200 dark:border-neutral-700",
                                        "text-neutral-500 hover:text-foreground",
                                        "transition-all active:scale-95"
                                    )}
                                    aria-label="Copy code"
                                >
                                    {hasCopied ? (
                                        <Check className="w-4 h-4 text-emerald-500" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>

                            {/* Code Block */}
                            <div className="relative text-sm font-mono overflow-x-auto max-h-[500px]">
                                <Highlight
                                    theme={resolvedTheme === 'dark' ? themes.vsDark : themes.vsLight}
                                    code={code}
                                    language="tsx"
                                >
                                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                        <pre
                                            className={cn(className, "p-6 text-[13px] leading-relaxed")}
                                            style={{ ...style, backgroundColor: 'transparent' }}
                                        >
                                            {tokens.map((line, i) => (
                                                <div key={i} {...getLineProps({ line })}>
                                                    <span className="select-none opacity-30 mr-4 w-4 inline-block text-right text-xs">
                                                        {i + 1}
                                                    </span>
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
        </div>
    );
}
