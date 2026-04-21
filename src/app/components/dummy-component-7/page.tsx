import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent7 from "@/registry/dummy-component-7";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-7" title="Dummy Component 7" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent7 />
      </ComponentShowcase>
    </div>
  );
}