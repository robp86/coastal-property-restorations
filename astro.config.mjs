import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cpr-restorations.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // /thank-you is noindex — listing it in the sitemap tells Google to crawl
      // a page we've asked it not to index. Contradictory signals, so exclude it.
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
});
