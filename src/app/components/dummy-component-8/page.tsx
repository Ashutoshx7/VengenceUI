import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent8 from "@/registry/dummy-component-8";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-8" title="Dummy Component 8" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent8 />
      </ComponentShowcase>
    </div>
  );
}