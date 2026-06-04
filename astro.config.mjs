import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'

// https://astro.build/config
export default defineConfig({
  site: 'https://alexpavlov.dev',
  redirects: {
    '/': '/blog',
  },
  integrations: [
    // applyBaseStyles: false — our styles/globals.css already has @tailwind base
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  markdown: {
    // GFM is on by default in Astro; disable built-in Shiki so rehype-prism-plus
    // (with the existing prism-atom-dark.css theme) handles highlighting.
    syntaxHighlight: false,
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeCodeTitles,
      rehypePrism,
    ],
  },
})
