import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { format, parseISO } from 'date-fns'
import highlight, { Options as HighlightOptions } from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import fs from 'fs'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',

  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
  },

  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    readingType: {
      type: 'json',
      resolve: (post) => post.body.raw,
    },
    formattedDate: {
      type: 'string',
      resolve: ({ publishedAt }) =>
        format(parseISO(publishedAt), 'dd MMMM, yyy'),
    },
  },
}))

const highlightOptions: HighlightOptions = {
  theme: JSON.parse(fs.readFileSync('./src/lib/andromeda.json', 'utf-8')),
  tokensMap: {},
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0)
      node.children = [{ type: 'text', value: ' ' }]
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word']
  },
}

const contentlayerConfig = makeSource({
  documentTypes: [Post],
  contentDirPath: 'data',
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [highlight, highlightOptions],
      rehypeAutolinkHeadings,
      rehypeSlug,
    ],
  },
})

export default contentlayerConfig
