import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent1 from "@/registry/dummy-component-1";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-1" title="Dummy Component 1" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent1 />
      </ComponentShowcase>
    </div>
  );
}