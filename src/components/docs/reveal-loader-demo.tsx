"use client";

import React, { useState, useEffect } from "react"; // Added useEffect
import RevealLoader, { MovementType, StaggerType } from "@/components/ui/reveal-loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RefreshCcw, Type, Sparkles, Palette, Code2, Copy, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// --- Types & Data ---
interface ThemePreset {
  id: string;
  colors: string[];
  textColor: string;
  label: string;
}

const THEMES: ThemePreset[] = [
  { id: "midnight", label: "Midnight", colors: ["#0f172a", "#334155"], textColor: "#ffffff" },
  { id: "cyber", label: "Cyber", colors: ["#833ab4", "#fd1d1d", "#fcb045"], textColor: "#ffffff" },
  { id: "forest", label: "Forest", colors: ["#064e3b", "#10b981"], textColor: "#a7f3d0" },
  { id: "mono", label: "Mono", colors: ["#e5e5e5", "#ffffff"], textColor: "#000000" },
];

export function RevealLoaderDemo() {
  const [pgKey, setPgKey] = useState(0);
  const [copied, setCopied] = useState(false);
  
  // Settings
  const [text, setText] = useState("VENGEANCE UI");
  const [textSize, setTextSize] = useState([120]);
  const [activeTheme, setActiveTheme] = useState<ThemePreset>(THEMES[0]);
  const [stagger, setStagger] = useState<StaggerType>("left-to-right");
  const [movement, setMovement] = useState<MovementType>("top-down");

  // --- AUTOMATIC RERUN LOGIC ---
  // This effect runs whenever any of the dependencies change.
  // It increments the key, forcing the RevealLoader to restart.
  useEffect(() => {
    setPgKey((prev) => prev + 1);
  }, [text, textSize, activeTheme, stagger, movement]);

  const snippet = `<RevealLoader text="${text}" staggerOrder="${stagger}" movementDirection="${movement}" />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 lg:p-8 space-y-8">
      
      {/* --- 1. PREVIEW AREA (Top) --- */}
      <div className="relative w-full aspect-video min-h-[400px] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border shadow-sm ring-1 ring-black/5">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]" 
              style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
          
          <RevealLoader 
            key={pgKey}
            text={text}
            textSize={`${textSize[0]}px`}
            textColor={activeTheme.textColor}
            bgColors={activeTheme.colors}
            angle={activeTheme.colors.length > 1 ? 135 : 0}
            staggerOrder={stagger}
            movementDirection={movement}
          />

          <Button 
            onClick={() => setPgKey(k => k+1)} 
            className="absolute bottom-6 right-6 rounded-full shadow-lg gap-2 z-[60] bg-white text-black hover:bg-neutral-100 dark:bg-neutral-800 dark:text-white"
          >
            <RefreshCcw className="w-4 h-4" /> Run Animation
          </Button>

          <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 dark:bg-black/80 backdrop-blur rounded-full text-[10px] font-mono border">
            PREVIEW
          </div>
      </div>

      {/* --- 2. CONTROLS AREA (Bottom) --- */}
      <div className="grid md:grid-cols-3 gap-8 p-6 rounded-xl border bg-card/50">
        
        {/* Column 1: Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
            <Type className="w-4 h-4" /> Content
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Text</Label>
              <Input 
                value={text} 
                onChange={(e) => setText(e.target.value.toUpperCase())}
                placeholder="ENTER TEXT"
                className="font-mono uppercase tracking-wider bg-background"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                 <span>Size</span>
                 <span>{textSize}px</span>
              </div>
              <Slider 
                value={textSize} 
                onValueChange={setTextSize} 
                min={40} 
                max={200} 
                step={10}
              />
            </div>
          </div>
        </div>

        {/* Column 2: Theme */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
            <Palette className="w-4 h-4" /> Theme
          </div>
          <div className="grid grid-cols-2 gap-3">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme)}
                className={cn(
                  "group relative flex items-center gap-3 p-2 rounded-lg border text-left transition-all hover:bg-accent bg-background",
                  activeTheme.id === theme.id ? "border-primary ring-1 ring-primary/20 bg-accent" : "border-border"
                )}
              >
                <div 
                  className="w-6 h-6 rounded-full border shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${theme.colors.join(",")})` }}
                />
                <span className="text-xs font-medium">{theme.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Column 3: Animation */}
        <div className="space-y-4">
           <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
            <Sparkles className="w-4 h-4" /> Animation
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">Stagger Order</Label>
               <Tabs value={stagger} onValueChange={(v) => setStagger(v as StaggerType)}>
                <TabsList className="grid grid-cols-4 w-full h-auto p-1 bg-muted/40">
                  <TabsTrigger value="left-to-right" className="text-[10px] px-1 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground">
                    L→R
                  </TabsTrigger>
                  <TabsTrigger value="right-to-left" className="text-[10px] px-1 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground">
                    R←L
                  </TabsTrigger>
                  <TabsTrigger value="center-out" className="text-[10px] px-1 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground">
                    Center
                  </TabsTrigger>
                  <TabsTrigger value="edges-in" className="text-[10px] px-1 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground">
                    Edges
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
               <Label className="text-xs text-muted-foreground">Movement</Label>
               <Tabs value={movement} onValueChange={(v) => setMovement(v as MovementType)}>
                <TabsList className="grid grid-cols-4 w-full h-auto p-1 bg-muted/40">
                  <TabsTrigger value="top-down" className="text-[10px] px-1 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground">
                    Down
                  </TabsTrigger>
                  <TabsTrigger value="bottom-up" className="text-[10px] px-1 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground">
                    Up
                  </TabsTrigger>
                  <TabsTrigger value="scale-vertical" className="text-[10px] px-1 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground">
                    Scale
                  </TabsTrigger>
                  <TabsTrigger value="fade-out" className="text-[10px] px-1 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground">
                    Fade
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. CODE SNIPPET (Bottom) --- */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-400">
        <div className="flex items-center gap-3 overflow-hidden">
          <Code2 className="w-4 h-4 shrink-0" />
          <code className="text-xs font-mono truncate">
            {snippet}
          </code>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 hover:bg-neutral-800 hover:text-white"
          onClick={handleCopy}
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>

    </div>
  );
}