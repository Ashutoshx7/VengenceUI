import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent13 from "@/registry/dummy-component-13";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-13" title="Dummy Component 13" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent13 />
      </ComponentShowcase>
    </div>
  );
}