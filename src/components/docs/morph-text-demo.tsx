import { MorphText } from "@/components/ui/morph-text";

export function MorphTextDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] bg-neutral-950 text-white gap-16 p-10">
      {/* Default */}
      <MorphText subtext="The Art of Code" />
    </div>
  );
}
