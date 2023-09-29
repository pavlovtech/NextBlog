import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
import rehypeCodeTitles from 'rehype-code-titles';

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    picture: { type: 'string', required: true },
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    status: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
      required: false,
    },
    featured: {
      type: 'string',
      description: 'featured',
      required: false,
    },
    tags: {
      type: 'string',
      required: false
    },
    coverImage: {
      type: 'string',
      description: 'ogImage',
      required: false,
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `blog/${doc._raw.flattenedPath}`,
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    status: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
      required: false,
    },
    coverImage: {
      type: 'string',
      required: false,
    },
    technologies: {
      type: 'string',
      required: false,
    },
    github: {
      type: 'string',
      required: false,
    },
    link: {
      type: 'string',
      required: false,
    },
  }
}));

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    status: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
      required: false,
    },
    coverImage: {
      type: 'string',
      required: false,
    }
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project, Page],
  markdown: {
    remarkPlugins: [remarkGfm, remarkToc ],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism
    ]
  }
})
