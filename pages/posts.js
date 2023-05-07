import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/layout'
import { getPostsData } from '@/lib/posts'

export async function getStaticProps() {
  const postsData = getPostsData()

  return {
    props: { postsData },
  }
}

export default function Posts({ postsData }) {
  return (
    <Layout>
      <div>
        <h1 className="mb-4 block text-2xl font-medium text-yellow-500">Posts</h1>
        {postsData.map(({ id, title, date, description }) => (
          <Link
            key={id}
            className="mb-2 block rounded py-2 transition-colors"
            href={`/posts/${id}`}
          >
            <h2 className="mb-2 text-xl">{title}</h2>
            <small className="mb-1 block text-neutral-400">
              {description}
            </small>
            <small className="block mb-4 text-neutral-400">{date}</small>
						<hr className="border-1 border-neutral-400"/>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
