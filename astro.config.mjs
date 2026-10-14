import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://farulwananda.my.id",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({ filter: (page) => new URL(page).pathname !== "/" }),
    icon({ iconDir: "src/assets" }),
  ],
});
