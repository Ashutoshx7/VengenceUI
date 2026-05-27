"use client";

import React from "react";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export function FaqAccordionDemo() {
  return (
    <div className="w-full flex justify-center items-center p-8 rounded-xl overflow-hidden min-h-[600px]">
      <FaqAccordion />
    </div>
  );
}

export default FaqAccordionDemo;
