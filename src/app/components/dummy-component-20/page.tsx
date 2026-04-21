import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent20 from "@/registry/dummy-component-20";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-20" title="Dummy Component 20" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent20 />
      </ComponentShowcase>
    </div>
  );
}