# Tasks: Kiefer's Personal Website — Initial Build (v1.0)

**Spec**: [001-initial-website.md](../specs/001-initial-website.md)  
**Plan**: [001-initial-website.md](../plans/001-initial-website.md)

## Task Breakdown

### Phase 1: Project Setup (1 task)

- [ ] **T001**: Initialize Astro project
  - Run `npm create astro@latest . -- --template minimal --install --no-git`
  - Configure `astro.config.mjs`: site URL placeholder, RSS plugin
  - Set up `tsconfig.json` with strict mode
  - Create `.gitignore` for node_modules, dist, .astro
  - Verify `npm run dev` serves a blank page
  - *Dependencies*: None
  - *Time estimate*: 15 min

### Phase 2: Base Layout & Styling (3 tasks)

- [ ] **T002**: Create global styles with dark mode
  - Create `src/styles/global.css`
  - Define CSS custom properties for light/dark themes via `@media (prefers-color-scheme: dark)`
  - Set up typography: font stack (system fonts v1), line heights, max-width for readability
  - Add responsive base styles (mobile-first)
  - *Dependencies*: None
  - *Time estimate*: 30 min

- [ ] **T003**: Create BaseLayout component
  - Create `src/layouts/BaseLayout.astro`
  - HTML shell with `<html>`, `<head>`, `<body>`
  - SEO meta tags: title template, description, charset, viewport, canonical URL
  - Open Graph meta tags (title, description, type, url)
  - Import global styles
  - Include `<slot />` for page content
  - *Dependencies*: T002
  - *Time estimate*: 20 min

- [ ] **T004**: Create Header and Footer components
  - Create `src/components/Header.astro`: site title/name, nav links (Home, Blog, About)
  - Create `src/components/Footer.astro`: copyright, minimal footer text
  - Both components accept and use BaseLayout patterns
  - *Dependencies*: T003
  - *Time estimate*: 20 min

### Phase 3: Homepage (2 tasks)

- [ ] **T005**: Build homepage
  - Create `src/pages/index.astro`
  - Uses BaseLayout, Header, Footer
  - Content: Kiefer's name, professional title ("Software Tester | Cybersecurity Professional"), short bio (2-3 sentences), nav to Blog and About
  - Clean, centered layout
  - *Dependencies*: T002, T003, T004
  - *Time estimate*: 20 min

- [ ] **T006**: Build custom 404 page
  - Create `src/pages/404.astro`
  - Uses BaseLayout, Header, Footer
  - Styled 404 message with link back to homepage
  - *Dependencies*: T002, T003, T004
  - *Time estimate*: 10 min

### Phase 4: About Page (1 task)

- [ ] **T007**: Build About page
  - Create `src/pages/about.astro`
  - Uses BaseLayout, Header, Footer
  - Content sections: Early Life (military family, Japan), Music (guitar, bands, DJ, LA Recording School), Tech Career (help desk → sysadmin → cybersecurity degrees → software testing), Current Goals (AI/LLM testing services, product building)
  - Clean sectioned layout with headings
  - *Dependencies*: T002, T003, T004
  - *Time estimate*: 30 min

### Phase 5: Blog System (4 tasks)

- [ ] **T008**: Set up Content Collections for blog posts
  - Create `src/content/config.ts` with blog collection schema
  - Schema: title (string), date (date), description (string), tags (optional array of strings)
  - Verify schema validation catches missing frontmatter
  - *Dependencies*: T001
  - *Time estimate*: 20 min

- [ ] **T009**: Create PostLayout component
  - Create `src/layouts/PostLayout.astro`
  - Extends BaseLayout with post-specific meta (title, date, description)
  - Article-style typography for blog content
  - *Dependencies*: T003
  - *Time estimate*: 20 min

- [ ] **T010**: Create PostCard component
  - Create `src/components/PostCard.astro`
  - Displays: post title (linked), date, description
  - Clean card layout for blog index
  - *Dependencies*: T002
  - *Time estimate*: 15 min

- [ ] **T011**: Build blog index and post pages
  - Create `src/pages/blog/index.astro`: lists all posts sorted by date (newest first), uses PostCard for each
  - Create `src/pages/blog/[...slug].astro`: dynamic route for individual posts, uses PostLayout, renders Markdown content
  - Add a sample blog post at `src/content/blog/welcome.md`
  - *Dependencies*: T008, T009, T010
  - *Time estimate*: 40 min

### Phase 6: RSS Feed (1 task)

- [ ] **T012**: Configure and generate RSS feed
  - Install `@astrojs/rss` (official plugin)
  - Configure in `astro.config.mjs`: site URL, title, description, customData
  - Create `src/pages/rss.xml.js`: generates RSS feed from blog content collection
  - Include: title, link, description, pubDate for each post
  - Validate feed output manually
  - *Dependencies*: T011
  - *Time estimate*: 20 min

### Phase 7: Polish & Verification (2 tasks)

- [ ] **T013**: Favicon and site branding
  - Create `public/favicon.svg` (simple, clean SVG)
  - Add favicon link to BaseLayout `<head>`
  - *Dependencies*: T003
  - *Time estimate*: 10 min

- [ ] **T014**: Build verification and performance check
  - Run `astro build` — verify clean build, no errors
  - Run `astro preview` — verify all pages render correctly
  - Check: responsive design at 320px, 768px, 1024px, 1440px
  - Check: dark mode (toggle OS preference)
  - Run Lighthouse audit — verify Performance ≥ 90
  - Validate RSS feed at feedvalidator.org
  - *Dependencies*: T001-T013
  - *Time estimate*: 30 min

## Summary

| Phase | Tasks | Est. Time |
|-------|-------|-----------|
| 1. Project Setup | 1 | 15 min |
| 2. Base Layout & Styling | 3 | 70 min |
| 3. Homepage | 2 | 30 min |
| 4. About Page | 1 | 30 min |
| 5. Blog System | 4 | 95 min |
| 6. RSS Feed | 1 | 20 min |
| 7. Polish & Verification | 2 | 40 min |
| **Total** | **14 tasks** | **~5 hours** |

## Execution Order

Tasks must be executed in dependency order:
```
T001 → T008
     → T002 → T003 → T004 → T005
                       → T007
                       → T006
            → T009 → T010 → T011 → T012
     → T013
     → T014 (after all others)
```

Parallelizable groups (if using multiple agents):
- **Group A**: T001 (setup)
- **Group B**: T002-T004 (layout/styling chain)
- **Group C**: T005, T006, T007 (pages — parallel after Group B)
- **Group D**: T008-T011 (blog system chain — starts after T001 and T003)
- **Group E**: T012 (RSS — after T011)
- **Group F**: T013 (favicon — after T003)
- **Group G**: T014 (verification — after everything)
