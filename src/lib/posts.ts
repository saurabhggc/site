import { pick } from 'contentlayer/utils'
import { allPosts, Post } from 'contentlayer/generated'

export const getPostBySlug = (slug?: string) => {
  return allPosts.find((post) => post.slug === slug)
}

export const getPostsPaths = () =>
  allPosts.map(({ slug }) => ({ params: { slug } }))

export const getPosts = <Keys extends keyof Post>(...keys: Keys[]) => {
  return allPosts.map((post) => pick(post, keys))
}
