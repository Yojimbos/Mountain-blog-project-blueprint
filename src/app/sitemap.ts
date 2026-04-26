import type { MetadataRoute } from "next";

import { getEquipmentGuides, getPosts, getRoutes } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/routes", "/equipment", "/safety", "/blog", "/contact"];
  const postPages = getPosts().map((post) => `/blog/${post.slug}`);
  const routePages = getRoutes().map((route) => `/routes/${route.slug}`);
  const equipmentPages = getEquipmentGuides().map((guide) => `/equipment/${guide.slug}`);

  return [...staticPages, ...postPages, ...routePages, ...equipmentPages].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
