"use client";

import React, { useState } from "react";
import { InteractiveKeyboard } from "@/components/ui/interactive-keyboard";

export function InteractiveKeyboardDemo() {
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);

  const handleKeyPress = (key: string) => {
    setLastKeyPressed(key);
  };

  return (
    <div className="w-full min-h-[500px] flex flex-col items-center justify-center p-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl overflow-hidden relative">
      <div className="mb-8 p-4 bg-white dark:bg-black rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800 text-center min-w-[200px]">
        <p className="text-sm text-neutral-500 mb-1">Last key pressed</p>
        <p className="text-xl font-bold font-mono text-neutral-800 dark:text-neutral-200">
          {lastKeyPressed ? lastKeyPressed.toUpperCase() : "NONE"}
        </p>
      </div>
      
      <div className="w-full overflow-x-auto pb-8 -mx-8 px-8 flex justify-center">
        <InteractiveKeyboard onKeyClick={handleKeyPress} />
      </div>
    </div>
  );
}

export default InteractiveKeyboardDemo;
