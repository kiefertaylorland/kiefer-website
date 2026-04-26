# Implementation Plan: Kiefer's Personal Website — Initial Build (v1.0)

**Branch**: `001-initial-website` | **Date**: 2026-04-26 | **Spec**: [001-initial-website.md](../specs/001-initial-website.md)
**Input**: Feature specification from `/specs/001-initial-website.md`

## Summary

Build a static personal website and blog using Astro. The site includes a homepage, blog system with Markdown posts, an about page, RSS feed, and responsive dark-mode design. Zero JavaScript shipped by default. Deployable as static files to any static hosting provider.

## Technical Context

**Language/Version**: JavaScript/TypeScript (Astro v5)  
**Primary Dependencies**: Astro v5, Astro Content Collections, RSS plugin  
**Storage**: N/A — static site, content stored as Markdown files in repo  
**Testing**: Manual verification, Lighthouse CI (optional)  
**Target Platform**: Static HTML/CSS — works on any modern browser  
**Project Type**: Static website  
**Performance Goals**: Lighthouse Performance ≥ 90, homepage loads < 1s on 3G  
**Constraints**: Zero JS by default, no third-party tracking, no runtime dependencies, self-hosted fonts or system fonts only  
**Scale/Scope**: Single maintainer, ~5-10 pages v1, blog with 10-50 posts/year

## Constitution Check

| Principle | Gate Status | Notes |
|-----------|-------------|-------|
| I. Content First | ✅ PASS | Markdown via Astro Content Collections — write content, not code |
| II. Performance | ✅ PASS | Astro ships zero JS by default; only add JS for interactive components |
| III. Security & Privacy | ✅ PASS | Static files only, no third-party scripts, no tracking |
| IV. Simple Deployment | ✅ PASS | `astro build` produces static files; deploy anywhere |
| V. Maintainable by One Person | ✅ PASS | Astro is well-documented, active community, minimal config |

All gates pass. Proceed to design.

## Project Structure

### Documentation (this feature)

```text
plans/001-initial-website/
├── plan.md              # This file
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
kiefer-website/
├── src/
│   ├── content/
│   │   ├── blog/         # Blog posts as .md files
│   │   │   ├── first-post.md
│   │   │   └── ...
│   │   └── config.ts     # Content collection schemas
│   ├── layouts/
│   │   ├── BaseLayout.astro      # HTML shell, meta, head
│   │   ├── PostLayout.astro      # Blog post layout
│   │   └── PageLayout.astro      # Standard page layout
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About page
│   │   ├── blog/
│   │   │   ├── index.astro       # Blog index (list all posts)
│   │   │   └── [...slug].astro   # Individual post pages (dynamic route)
│   │   └── 404.astro             # Custom 404 page
│   ├── styles/
│   │   └── global.css            # Global styles, dark mode
│   └── components/
│       ├── Header.astro          # Site header + nav
│       ├── Footer.astro          # Site footer
│       ├── PostCard.astro        # Blog post card for index
│       └── DarkModeToggle.astro  # Optional dark mode toggle (CSS-only via prefers-color-scheme)
├── public/
│   ├── favicon.svg
│   └── images/                   # Static images (hosted in repo)
├── astro.config.mjs             # Astro configuration
├── package.json
├── tsconfig.json
└── .gitignore
```

**Structure Decision**: Single Astro project with Content Collections for blog posts, dynamic routing for post pages, CSS-only dark mode via `prefers-color-scheme`. No framework integrations (React, Vue, etc.) — pure Astro.

## Technical Decisions

### 1. Astro Content Collections for Blog Posts
- **Why**: Built-in content management with schema validation. Catches missing frontmatter at build time (FR-012 edge case).
- **Alternative rejected**: Manual file parsing — more error-prone, no schema validation.

### 2. CSS-Only Dark Mode (`prefers-color-scheme`)
- **Why**: Zero JS, respects OS preference automatically. No toggle needed — the site adapts to the visitor's system setting.
- **Alternative rejected**: JS-based theme toggle — adds unnecessary JS weight.

### 3. Astro RSS Plugin (`@astrojs/rss`)
- **Why**: Official plugin, zero config for standard RSS 2.0 feeds. Generated at build time.
- **Alternative rejected**: Manual RSS generation — error-prone, reinvents the wheel.

### 4. System Fonts or Self-Hosted Fonts
- **Why**: Privacy (no Google Fonts CDN calls), performance (no external font requests). System fonts are instant; self-hosted fonts can be subsetted.
- **Recommendation**: Start with system font stack (`system-ui, -apple-system, sans-serif`). If custom fonts are desired later, self-host them.

### 5. Styling Approach: Plain CSS with CSS Custom Properties
- **Why**: No build-step dependency, smallest possible output, no framework lock-in. CSS custom properties make dark mode trivial.
- **Alternative rejected**: Tailwind — adds a build dependency and config complexity for a simple personal site. Can add later if Kief prefers utility classes.

## Complexity Tracking

No constitution violations. All decisions align with principles.
