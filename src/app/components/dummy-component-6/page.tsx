import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent6 from "@/registry/dummy-component-6";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-6" title="Dummy Component 6" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent6 />
      </ComponentShowcase>
    </div>
  );
}