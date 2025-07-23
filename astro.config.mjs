import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

const site = import.meta.env.DEV
  ? "http://localhost:4321"
  : "https://www.amalanku.com";

export default defineConfig({
  site,
  redirects: {
    "/docs": "/docs/introduction", // 308 permanent redirect
  },
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: `${site}/sitemap-index.xml`,
    }),
    mdx(),
  ],
});
