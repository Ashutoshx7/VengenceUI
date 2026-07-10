"use client";

import { AnimatedTooltip, type AnimatedTooltipVariant } from "@/components/ui/animated-tooltip";

const ITEMS: { label: string; variant: AnimatedTooltipVariant; text: string }[] = [
  { label: "Cora", variant: "cora", text: "Be yourself." },
  { label: "Smaug", variant: "smaug", text: "Make love, not war." },
  { label: "Dori", variant: "dori", text: "Judge less, love more." },
  { label: "Gram", variant: "gram", text: "Fear is a liar." },
  { label: "Indis", variant: "indis", text: "Dream bigger." },
  { label: "Malva", variant: "malva", text: "Stay curious." },
  { label: "Sadoc", variant: "sadoc", text: "Wander often." },
];

export function AnimatedTooltipDemo() {
  return (
    <div className="flex min-h-[26rem] w-full items-center justify-center px-6 py-28">
      <div className="flex max-w-[460px] flex-wrap items-center justify-center gap-x-4 gap-y-6 text-base sm:text-lg">
        {ITEMS.map((item) => (
          <AnimatedTooltip key={item.variant} variant={item.variant} content={item.text}>
            {item.label}
          </AnimatedTooltip>
        ))}
      </div>
    </div>
  );
}
