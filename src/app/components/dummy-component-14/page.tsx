import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent14 from "@/registry/dummy-component-14";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-14" title="Dummy Component 14" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent14 />
      </ComponentShowcase>
    </div>
  );
}