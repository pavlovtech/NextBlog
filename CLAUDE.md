# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i             # install dependencies
npm run dev       # dev server (Next.js + content-collections, Turbopack)
npm run build     # production build (content-collections generation runs inside next build)
npm run start     # serve the production build
npm run lint      # ESLint (flat config, next/core-web-vitals)
```

Stack: **Next.js 16 (App Router, Turbopack), React 19, TypeScript**. There is no test framework. Formatting is Prettier (`.prettierrc`: single quotes, no semicolons, 2-space tabs, `proseWrap: always`).

## Architecture: Git-as-CMS

The central idea is that **the GitHub repository is the database**. Content lives as markdown; editing happens by committing back to GitHub, which triggers a Vercel redeploy that regenerates the static site. The loop:

1. Markdown files live in `content/{posts,projects,pages}/` (one `.md` file per entry, filename == `slug`).
2. **content-collections** (`content-collections.ts`) parses them at build time into typed objects, emitted to `.content-collections/generated` (gitignored) and imported everywhere as `content-collections` (e.g. `allPosts`, `allProjects`, `allPages`, and the `Post`/`Project`/`Page` types). The tsconfig path alias maps this import to `./.content-collections/generated`. If you see "module not found" for `content-collections`, generation hasn't run yet — run `npm run dev`/`build`.
3. The **public site** (`app/blog/**`) renders statically from `allPosts` via `generateStaticParams`. Post bodies are pre-rendered HTML on the computed `post.html` field, injected via `dangerouslySetInnerHTML`. Raw markdown is available as `post.content`.
4. **Editing is done through [Pages CMS](https://pagescms.org)** — a hosted, Git-based CMS configured by the repo-root `.pages.yml`. It commits markdown changes directly to this repo via a GitHub App; there is **no in-repo admin UI or auth**. A commit triggers a Vercel deploy → content-collections regenerates → the static site updates. Editing happens at app.pagescms.org, not on the site's own domain.

### content-collections config (`content-collections.ts`)

Three collections (`posts`, `projects`, `pages`). Each `transform` runs the markdown through a unified **v10** pipeline that reproduces the original rendering exactly — remark `gfm`+`toc`, rehype `slug`/`autolink-headings`/`code-titles`/`prism-plus`/native-lazy-loading — and adds two computed fields: `html` (rendered) and `url`/`flattenedPath` (e.g. `blog/posts/<slug>`). Prism theme CSS is imported per-page (e.g. `styles/prism-atom-dark.css`). Schemas are zod (`schema: z.object({...})`); the markdown body is exposed as `content`.

Keep the unified pipeline on the v10 generation (`remark-parse@10`, `remark-rehype@10`, `rehype-stringify@9`, etc.) — mixing in v11 plugins will break it.

### Pages CMS config (`.pages.yml`)

Models the three collections against the real frontmatter. `media.input: public` / `output: /` so the editor can browse/reference both `/images/*` and `/assets/*`; new uploads land in `public/` root. `tags`/`technologies` are plain comma-separated **strings** (the UI/rendering does `.split(",")`), `featured` is a `yes`/`no` select, `status` is `published`/`draft`, `author` is a nested object, `body` is the `rich-text` field mapped to the markdown body, and `filename: '{fields.slug}.md'` keeps filename == slug.

### Request/render flow notes

- `next.config.ts` wraps the config in `withContentCollections(...)`, sets `images.remotePatterns` for `avatars.githubusercontent.com` (author avatars), pins `turbopack.root`, and permanently redirects `/` → `/blog`.
- Comments use Giscus (`app/components/comments/giscus.tsx`, config in `configs/discus-config.ts`).
- Root layout forces dark mode (`<html className='dark'>`). Analytics via `@vercel/analytics` + `@vercel/speed-insights`.

## Conventions & gotchas

- **Absolute imports from repo root**: `tsconfig.json` sets `baseUrl: "."`, so imports look like `app/components/post-card`, `configs/discus-config` (no `@/` prefix, no relative `../../`).
- **filename == slug is load-bearing**: routes key on `slug` and `post.url` is `blog/<flattenedPath>` where `flattenedPath` = `<dir>/<slug>`. The `.pages.yml` `filename: '{fields.slug}.md'` preserves this.
- **Dynamic routes use async `params`** (Next 15+): `params` is a `Promise` — `const { slug } = await params`. See `app/blog/posts/[slug]/page.tsx` and `app/blog/tags/[slug]/page.tsx`.
- **Content dir is `content/`**. Three document types: `Post` (`content/posts`), `Project` (`content/projects`), `Page` (`content/pages`).
- Home/blog listing filters on `status == 'published'` and splits Featured vs Latest by `featured == 'yes'`. Projects render regardless of status; tag pages split `tags` on commas.
- If forking: Pages CMS is bound to whatever repo you authorize the GitHub App on (the content lives wherever this repo is).

## Environment variables

The public site builds and runs with **no required env vars** (Pages CMS auth is handled externally by its GitHub App; Giscus is client-side). The old admin/auth/logging vars (`GITHUB_TOKEN`, `NEXTAUTH_*`, `ADMIN_EMAIL/PASSWORD`, `NEXT_PUBLIC_AXIOM_*`) are no longer used and can be removed from the deployment.
