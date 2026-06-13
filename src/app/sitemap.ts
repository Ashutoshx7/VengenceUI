import type { MetadataRoute } from "next";
import { COMPONENT_CATEGORIES } from "@/lib/components-catalog";
import { SITE_URL } from "@/lib/site";

const lastModified = new Date("2026-06-14");

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/components", priority: 0.9, changeFrequency: "weekly" },
  { path: "/templates", priority: 0.8, changeFrequency: "monthly" },
  { path: "/docs/install-nextjs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/docs/install-tailwind", priority: 0.8, changeFrequency: "monthly" },
  { path: "/docs/add-utilities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/docs/cli", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blocks", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/changelog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/releases", priority: 0.6, changeFrequency: "weekly" },
  { path: "/showcase", priority: 0.7, changeFrequency: "weekly" },
  { path: "/status", priority: 0.4, changeFrequency: "daily" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const componentRoutes = COMPONENT_CATEGORIES.flatMap((category) =>
    category.items.map((component) => ({
      url: `${SITE_URL}/components/${component.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...componentRoutes,
  ];
}
