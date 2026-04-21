import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent4 from "@/registry/dummy-component-4";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-4" title="Dummy Component 4" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent4 />
      </ComponentShowcase>
    </div>
  );
}