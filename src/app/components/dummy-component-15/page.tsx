import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent15 from "@/registry/dummy-component-15";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-15" title="Dummy Component 15" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent15 />
      </ComponentShowcase>
    </div>
  );
}