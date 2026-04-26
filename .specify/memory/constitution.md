# Kiefer's Website Constitution

## Core Principles

### I. Content First, Design Second

The site exists to communicate Kiefer's expertise, story, and voice. Content must be easy to write — Markdown is the authoring format. Design serves readability and clarity, never distracts from the content.

### II. Performance is Non-Negotiable

Fast load times, minimal JavaScript, clean HTML. This is a personal site — it should load instantly on any connection, on any device. Astro ships zero JavaScript by default; this principle means we keep it that way unless a feature explicitly requires interactivity.

### III. Security & Privacy by Default

No tracking. No analytics cookies. No data harvesting. Kiefer works in cybersecurity — his own site must reflect that standard. HTTPS-only. No unnecessary third-party dependencies. Every external resource is a liability that must justify its presence.

### IV. Simple Deployment

Static site deployment via Git push. No databases, no server-side rendering, no runtime infrastructure. Preferred hosts: GitHub Pages, Netlify, or Vercel — something with free-tier availability and zero operational overhead.

### V. Maintainable by One Person

Kiefer is the sole maintainer. The tech stack must be something one person can understand, update, and extend without a team. No framework-of-the-week dependencies that require weekly updates. Clear, documented, and boring is better than cutting-edge and fragile.

## Technology Stack

- **Static Site Generator:** Astro
- **Content Format:** Markdown (MDX only when interactive components are truly needed)
- **Styling:** CSS (or Tailwind if Kief prefers utility classes)
- **Deployment:** Static host (GitHub Pages / Netlify / Vercel — TBD)
- **Design:** Clean, responsive, dark mode support
- **Features:** RSS feed, SEO optimization, blog system

## Development Workflow

- Feature branches for new content/sections
- Local preview via `astro dev` before committing
- Each blog post or page is a single Markdown file — no build steps required for content updates
- Specs govern feature additions, not ad-hoc coding

## Governance

This constitution supersedes all implementation decisions. Any deviation requires explicit approval and should be documented as an amendment. All specs and plans must reference the principles they satisfy.

**Version**: 1.0.0 | **Ratified**: 2026-04-26 | **Last Amended**: 2026-04-26
