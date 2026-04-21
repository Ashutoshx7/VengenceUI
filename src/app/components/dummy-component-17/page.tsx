import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent17 from "@/registry/dummy-component-17";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-17" title="Dummy Component 17" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent17 />
      </ComponentShowcase>
    </div>
  );
}