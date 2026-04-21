import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent3 from "@/registry/dummy-component-3";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-3" title="Dummy Component 3" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent3 />
      </ComponentShowcase>
    </div>
  );
}