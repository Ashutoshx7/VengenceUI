"use client";

import { AnimatedTooltip, type AnimatedTooltipVariant } from "@/components/ui/animated-tooltip";

const ITEMS: { label: string; variant: AnimatedTooltipVariant; text: string }[] = [
  { label: "Cora", variant: "cora", text: "Be yourself; everyone else is already taken." },
  { label: "Smaug", variant: "smaug", text: "Make love, not war!" },
  { label: "Dori", variant: "dori", text: "If you judge people, you have no time to love them." },
  { label: "Gram", variant: "gram", text: "You can only be afraid of what you think you know." },
  { label: "Indis", variant: "indis", text: "Imagination will get you everywhere." },
  { label: "Malva", variant: "malva", text: "Stay curious." },
  { label: "Sadoc", variant: "sadoc", text: "Not all those who wander are lost." },
];

export function AnimatedTooltipDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-24 text-lg">
      {ITEMS.map((item) => (
        <AnimatedTooltip key={item.variant} variant={item.variant} content={item.text}>
          {item.label}
        </AnimatedTooltip>
      ))}
    </div>
  );
}
