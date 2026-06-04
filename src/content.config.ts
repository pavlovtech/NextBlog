import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// Reuses the existing content/ directory (same files Pages CMS edits) — no
// content migration. publishedAt is coerced to a Date for easy formatting/sort.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['published', 'draft']).default('draft'),
    slug: z.string(),
    description: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    coverImage: z.string().optional().default(''),
    featured: z.boolean().optional().default(false),
    publishedAt: z.coerce.date(),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.string().default('published'),
    slug: z.string(),
    description: z.string().optional().default(''),
    coverImage: z.string().optional().default(''),
    technologies: z.array(z.string()).optional().default([]),
    github: z.string().optional().default(''),
    link: z.string().optional().default(''),
    publishedAt: z.coerce.date(),
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/pages' }),
  schema: z.object({
    title: z.string(),
    status: z.string().default('published'),
    slug: z.string(),
    description: z.string().optional().default(''),
    coverImage: z.string().optional().default(''),
    publishedAt: z.coerce.date(),
  }),
})

export const collections = { posts, projects, pages }
