import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cpr-restorations.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
