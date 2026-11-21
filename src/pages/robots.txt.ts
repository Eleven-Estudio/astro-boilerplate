import type { APIRoute } from "astro";
import { BUSINESS_CONFIG } from "@/config/business";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL("sitemap-index.xml", site).href;
  const allow = BUSINESS_CONFIG.robots?.index !== false;

  const body = [
    "User-agent: *",
    allow ? "Allow: /" : "Disallow: /",
    "",
    `Sitemap: ${sitemapUrl}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
