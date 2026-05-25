import { MetadataRoute } from "next";
import {
  getServiceSlugs,
  getSolutionSlugs,
  getProjectSlugs,
  getProductCategorySlugs,
  getAllProducts,
} from "@/lib/content";

const BASE_URL = "https://fsb-protupozarna-zastita.hr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/o-nama`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/usluge`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/rjesenja`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projekti`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/proizvodi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/usluge/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Solution pages
  const solutionPages: MetadataRoute.Sitemap = getSolutionSlugs().map((slug) => ({
    url: `${BASE_URL}/rjesenja/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Project pages
  const projectPages: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    url: `${BASE_URL}/projekti/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Product category pages
  const categoryPages: MetadataRoute.Sitemap = getProductCategorySlugs().map((slug) => ({
    url: `${BASE_URL}/proizvodi/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Product pages
  const productPages: MetadataRoute.Sitemap = getAllProducts().map((product) => ({
    url: `${BASE_URL}/proizvodi/${product.category}/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...solutionPages,
    ...projectPages,
    ...categoryPages,
    ...productPages,
  ];
}
