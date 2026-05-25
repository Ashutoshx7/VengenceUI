import { notFound } from "next/navigation";
import { ComponentShowcase } from "@/components/ui/component-showcase";
import { DemoRenderer } from "@/components/docs/demo-renderer";
import { COMPONENT_BY_SLUG, COMPONENT_CATEGORIES } from "@/lib/components-catalog";

/**
 * Pre-generate all component pages at build time for instant navigation.
 */
export function generateStaticParams() {
  return COMPONENT_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({ slug: item.slug }))
  );
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = COMPONENT_BY_SLUG.get(slug);

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

