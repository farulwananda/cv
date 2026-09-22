import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://farulwananda.dev',
  output: 'static',
  compressHTML: true,
  adapter: cloudflare({
    imageService: 'compile',
  }),
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
    sitemap(),
  ],
});
