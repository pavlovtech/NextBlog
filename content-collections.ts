import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeStringify from 'rehype-stringify'
// @ts-ignore - no type definitions published
import lazyLoadPlugin from 'rehype-plugin-image-native-lazy-loading'

// Mirrors the previous Contentlayer markdown pipeline so rendered HTML
// (GFM, table of contents, heading anchors, Prism highlighting, lazy images)
// is identical to before. unified v10 generation.
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkToc)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypeCodeTitles)
  .use(rehypePrism)
  // rehype-plugin-image-native-lazy-loading bundles outdated vfile types; cast to bypass
  .use(lazyLoadPlugin as any)
  .use(rehypeStringify, { allowDangerousHtml: true })

async function toHtml(markdown: string): Promise<string> {
  const file = await processor.process(markdown)
  return String(file)
}

const author = z.object({ name: z.string(), picture: z.string() })

const posts = defineCollection({
  name: 'posts',
  typeName: 'Post',
  directory: 'content/posts',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft']).default('draft'),
    author: author.optional(),
    slug: z.string(),
    description: z.string().optional().default(''),
    tags: z.string().optional().default(''),
    coverImage: z.string().optional().default(''),
    featured: z.string().optional().default(''),
    publishedAt: z.string(),
    content: z.string(),
  }),
  transform: async (doc) => {
    const flattenedPath = `posts/${doc.slug}`
    return {
      ...doc,
      html: await toHtml(doc.content),
      url: `blog/${flattenedPath}`,
      flattenedPath,
    }
  },
})

const projects = defineCollection({
  name: 'projects',
  typeName: 'Project',
  directory: 'content/projects',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    status: z.string(),
    author: author.optional(),
    slug: z.string(),
    description: z.string().optional().default(''),
    coverImage: z.string().optional().default(''),
    technologies: z.string().optional().default(''),
    github: z.string().optional().default(''),
    link: z.string().optional().default(''),
    publishedAt: z.string(),
    content: z.string(),
  }),
  transform: async (doc) => {
    const flattenedPath = `projects/${doc.slug}`
    return {
      ...doc,
      html: await toHtml(doc.content),
      url: `blog/${flattenedPath}`,
      flattenedPath,
    }
  },
})

const pages = defineCollection({
  name: 'pages',
  typeName: 'Page',
  directory: 'content/pages',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    status: z.string(),
    author: author.optional(),
    slug: z.string(),
    description: z.string().optional().default(''),
    coverImage: z.string().optional().default(''),
    publishedAt: z.string(),
    content: z.string(),
  }),
  transform: async (doc) => {
    const flattenedPath = `pages/${doc.slug}`
    return {
      ...doc,
      url: `blog/${flattenedPath}`,
      flattenedPath,
    }
  },
})

export default defineConfig({ content: [posts, projects, pages] })
