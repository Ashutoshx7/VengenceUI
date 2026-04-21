import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent16 from "@/registry/dummy-component-16";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-16" title="Dummy Component 16" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent16 />
      </ComponentShowcase>
    </div>
  );
}