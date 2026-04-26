import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';

export default defineConfig({
  site: 'https://kiefertaylorland.github.io',
  base: '/kiefer-website',
  trailingSlash: 'always',
});
