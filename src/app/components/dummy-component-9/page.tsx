import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent9 from "@/registry/dummy-component-9";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-9" title="Dummy Component 9" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent9 />
      </ComponentShowcase>
    </div>
  );
}