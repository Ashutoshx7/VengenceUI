import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent12 from "@/registry/dummy-component-12";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-12" title="Dummy Component 12" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent12 />
      </ComponentShowcase>
    </div>
  );
}