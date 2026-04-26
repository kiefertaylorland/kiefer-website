import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';

// https://astro.build/config
export default defineConfig({
  site: 'https://kiefer.dev', // TODO: update with actual domain
  adapter: undefined,
  output: 'static',
});
