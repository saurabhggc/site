import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { getPostBySlug, getPostsPaths } from '@/lib/posts'

import DateAndAuthor from '@/components/DateAndAuthor'
import Layout from '@/components/Layout'
import Text from '@/components/Typography'

const BlogPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code)

  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg px-6 py-20 md:px-10">
        <article>
          <header>
            <Text as="h1" size="x-large" className="max-w-[16ch] font-medium">
              {post.title}
            </Text>

            <DateAndAuthor
              className="mt-4 text-lg font-medium text-gray-700"
              publishedAt={post.publishedAt}
              formattedDate={post.formattedDate}
            />
          </header>

          <section
            className="
              prose
              prose-lg
              mt-12
              max-w-2xl
              text-gray-800
              prose-headings:font-medium
              prose-a:text-accent
              prose-a:underline-offset-2
              prose-pre:bg-[#23262e]
              prose-pre:text-lg
            "
          >
            <MDXComponent />
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default BlogPage

export const getStaticPaths = () => ({
  paths: getPostsPaths(),
  fallback: false,
})

export const getStaticProps = (ctx: GSPCtx) => ({
  props: {
    post: getPostBySlug(ctx.params?.slug)!,
  },
})

type GSPCtx = GetStaticPropsContext<{ slug: string }>
