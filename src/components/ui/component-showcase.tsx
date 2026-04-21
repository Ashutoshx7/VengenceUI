import * as React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentShowcaseProps {
  componentName: string; // The exact filename in the registry (without .tsx)
  title: string;
  description: string;
  children: React.ReactNode; // The live component itself
}

export function ComponentShowcase({
  componentName,
  title,
  description,
  children,
}: ComponentShowcaseProps) {
  return (
    <div className="space-y-6 mb-24">
      {/* Component Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-zinc-100">{title}</h2>
        <p className="text-zinc-400 text-lg">{description}</p>
      </div>

      {/* The Showcase Toggle */}
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        {/* Live Preview */}
        <TabsContent value="preview">
          <div className="w-full min-h-[400px] border border-white/10 rounded-2xl bg-black flex items-center justify-center shadow-2xl relative overflow-hidden mt-4 p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]"></div>
            
            <div className="relative z-10 w-full flex justify-center items-center">
              {children}
            </div>
          </div>
        </TabsContent>

        {/* Code Block */}
        <TabsContent value="code">
          <div className="mt-4">
            {/* We automatically append .tsx so you don't have to type it every time */}
            <CodeBlock fileName={`${componentName}.tsx`} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
