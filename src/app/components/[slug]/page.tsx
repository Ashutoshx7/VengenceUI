import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const component = COMPONENT_BY_SLUG.get(slug);

  if (!component) {
    return {};
  }

  const title = component.name;
  const description = `${component.description}. Preview the component and install it in your React or Next.js project.`;
  const path = `/components/${component.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      title: `${title} | Vengeance UI`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Vengeance UI`,
      description,
    },
  };
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
