import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://amalanku.vercel.app/",
  integrations: [tailwind(), sitemap(), robotsTxt(), mdx()],
});
