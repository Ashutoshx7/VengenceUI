import { ComponentShowcase } from "@/components/ui/component-showcase";
import BentoGrid from "@/registry/bento-grid";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase 
        componentName="bento-grid"
        title="Bento Grid"
        description="A beautiful animated bento grid layout."
      >
        <BentoGrid />
      </ComponentShowcase>
    </div>
  );
}
