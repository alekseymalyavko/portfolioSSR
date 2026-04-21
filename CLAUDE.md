# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at localhost:8000 (hot reload)
npm run build      # Production build
npm run start      # Start production server (after build)
npm run generate   # Static site generation
npm run lint       # ESLint for .js and .vue files
```

## Architecture Overview

This is a **Nuxt.js 2 (Vue 2) SSR portfolio site** — not Next.js, despite the repo name.

### Data Flow

1. On first request, `store/index.js` `nuxtServerInit` action fetches `/api/data` and `/api/projects` server-side
2. The Express middleware in `api/index.js` serves these from `assets/data.json` and `assets/projects.json`
3. Data hydrates into the Vuex store; components consume it via `mapGetters`
4. All portfolio content lives in those two JSON files — edit them to update site content

### Routing

Single-page app with hash navigation (`#about`, `#skills`, `#portfolio`, `#contacts`). `pages/index.vue` orchestrates all sections. The router in `nuxt.config.js` applies a 56px offset to account for the fixed header. Portfolio detail pages live under `pages/portfolio/`.

### Layouts and Theme

`layouts/default.vue` wraps everything with Header, Footer, social links, color theme switcher, and animated background. The active color theme is persisted in `localStorage` and applied via CSS variables (`--active`, `--light-active`) on the root element.

### Contact Form

`components/form.vue` → POST `/api/contact` → Express handler in `api/index.js` → nodemailer (Gmail).

Requires environment variables in production:
- `MAIL` — Gmail sender address
- `PASS` — Gmail app password
- `PORT` — defaults to 8000

### Scroll Animations

`vue-waypoint` drives section entrance animations. Touch events handled by `vue2-touch-events`. The carousel in the portfolio section uses `vue-agile`.

### Deployment

Heroku via `Procfile` (`web: nuxt start`). The `heroku-postbuild` script runs `npm run build` automatically. Static hosting is also possible via `npm run generate`.

## Code Conventions

- 2-space indentation, LF line endings, UTF-8 (enforced by `.editorconfig`)
- ESLint with `plugin:vue/essential` — run `npm run lint` before committing (pre-commit hook does this automatically)
- `babel-eslint` as parser
