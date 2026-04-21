import { ComponentShowcase } from "@/components/ui/component-showcase";
import RevealLoader from "@/registry/reveal-loader";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase 
        componentName="reveal-loader"
        title="Reveal Loader"
        description="A sleek loading animation that reveals content using Framer Motion."
      >
        <RevealLoader />
      </ComponentShowcase>
    </div>
  );
}
