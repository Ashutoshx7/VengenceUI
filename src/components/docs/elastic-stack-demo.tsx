"use client";

import React from "react";
import { ElasticStack } from "@/components/ui/elastic-stack";

export function ElasticStackDemo() {
  const items = [
    { id: "1", name: "Felix", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" },
    { id: "2", name: "Aneka", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka" },
    { id: "3", name: "Oliver", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Oliver" },
    { id: "4", name: "Zoe", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Zoe" },
    { id: "5", name: "Leo", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Leo" },
    { id: "6", name: "Mia", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mia" },
    { id: "7", name: "Noah", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Noah" },
    { id: "8", name: "Ava", image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ava" },
  ];

  return (
    <div className="flex w-full h-[400px] flex-col items-center justify-center">
      <ElasticStack 
        items={items} 
        itemSize={70}
        overlap={35}
        pushForce={15}
      />
    </div>
  );
}

export default ElasticStackDemo;
