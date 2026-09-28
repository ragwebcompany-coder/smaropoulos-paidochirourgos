import type { MetadataRoute } from "next";
import { seo, nav } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...nav.map((n) => n.href)];
  return routes.map((route) => ({
    url: `${seo.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
