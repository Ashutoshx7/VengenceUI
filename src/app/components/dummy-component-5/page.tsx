import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent5 from "@/registry/dummy-component-5";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-5" title="Dummy Component 5" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent5 />
      </ComponentShowcase>
    </div>
  );
}