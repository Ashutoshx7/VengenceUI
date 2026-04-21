import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent10 from "@/registry/dummy-component-10";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-10" title="Dummy Component 10" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent10 />
      </ComponentShowcase>
    </div>
  );
}