import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://birmal.in";
  const lastModified = new Date("2026-11-26");

  return [
    { url: `${baseUrl}/`, lastModified, priority: 1.0 },
    { url: `${baseUrl}/products/`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/catalogue/`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/about/`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/where-to-buy/`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/gallery/`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/faq/`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified, priority: 0.8 },
  ];
}
