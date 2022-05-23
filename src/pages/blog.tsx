import type { InferGetStaticPropsType } from 'next'
import { getPosts } from '@/lib/posts'

import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import Text from '@/components/Typography'

const Blog = ({ posts }: BlogProps) => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg px-6 py-28 md:px-10">
        <Text as="h1" size="x-large" className="font-bold">
          The Blog Arcade
        </Text>

        <p className="mt-4 text-xl text-gray-700 md:text-2xl">
          This is where I share my knowledge with other.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default Blog

export const getStaticProps = () => ({
  props: {
    posts: getPosts(
      'slug',
      'title',
      'publishedAt',
      'formattedDate',
      'description'
    ).sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)),
  },
})

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>
