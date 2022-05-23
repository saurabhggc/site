import Link from 'next/link'
import DateAndAuthor from './DateAndAuthor'

const PostCard = (post: PostCardProps) => {
  return (
    <article className="rounded border border-gray-300 bg-gray-100 p-4">
      <Link href={`/blog/${post.slug}`} passHref>
        <a
          className="
            text-3xl
            font-medium
            underline-offset-2
            hover:text-gray-700
            hover:underline
          "
        >
          <h2>{post.title}</h2>
        </a>
      </Link>

      <DateAndAuthor
        formattedDate={post.formattedDate}
        publishedAt={post.publishedAt}
        className="mt-2 text-gray-700"
      />

      <p className="mt-4 leading-relaxed text-gray-700">{post.description}</p>
    </article>
  )
}
export default PostCard

type PostCardProps = {
  title: string
  slug: string
  publishedAt: string
  formattedDate: string
  description: string
}
