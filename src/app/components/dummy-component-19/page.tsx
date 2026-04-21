import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent19 from "@/registry/dummy-component-19";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-19" title="Dummy Component 19" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent19 />
      </ComponentShowcase>
    </div>
  );
}