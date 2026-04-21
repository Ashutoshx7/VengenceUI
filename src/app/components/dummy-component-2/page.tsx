import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent2 from "@/registry/dummy-component-2";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-2" title="Dummy Component 2" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent2 />
      </ComponentShowcase>
    </div>
  );
}