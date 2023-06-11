import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
import rehypeCodeTitles from 'rehype-code-titles';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    draft: {
      type: 'boolean',
      description: 'draft',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'featured',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false
    },
    ogImage: {
      type: 'string',
      description: 'ogImage',
      required: false,
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `blog/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkToc ],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypeSlug,
      rehypePrism,
      rehypeCodeTitles
    ]
  }
})
