import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent11 from "@/registry/dummy-component-11";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-11" title="Dummy Component 11" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent11 />
      </ComponentShowcase>
    </div>
  );
}