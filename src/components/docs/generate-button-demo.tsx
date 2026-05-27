"use client";

import React, { useState } from "react";
import { GenerateButton } from "@/components/ui/generate-button";

export function GenerateButtonDemo() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleClick = () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="flex w-full h-[400px] flex-col items-center justify-center gap-8">
      <GenerateButton 
        isGenerating={isGenerating} 
        onClick={handleClick} 
        hue={210} 
      />
      
      {/* Example with a different hue (e.g. purple/pink) */}
      <GenerateButton 
        hue={280} 
      />
    </div>
  );
}

export default GenerateButtonDemo;
