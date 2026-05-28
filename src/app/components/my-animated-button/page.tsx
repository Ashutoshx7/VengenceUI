import { notFound } from "next/navigation";
import { DemoRenderer } from "@/components/docs/demo-renderer";
import { ComponentShowcase } from "@/components/ui/component-showcase";
import { COMPONENT_BY_SLUG } from "@/lib/components-catalog";

export default function Page() {
  const component = COMPONENT_BY_SLUG.get("my-animated-button");

  if (!component) {
    notFound();
  }

  return (
    <ComponentShowcase
      componentName={component.componentName}
      slug={component.slug}
      title={component.name}
      description={component.description}
    >
      <DemoRenderer slug={component.slug} />
    </ComponentShowcase>
  );
}
