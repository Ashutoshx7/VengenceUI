import { ComponentShowcase } from "@/components/ui/component-showcase";
import DummyComponent18 from "@/registry/dummy-component-18";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase componentName="dummy-component-18" title="Dummy Component 18" description="This is an auto-generated dummy component to show how the architecture scales.">
        <DummyComponent18 />
      </ComponentShowcase>
    </div>
  );
}