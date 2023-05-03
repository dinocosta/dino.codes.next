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
        <h1 className="mb-4 block text-2xl font-medium">Posts</h1>
        {postsData.map(({ id, title, date, description }) => (
          <Link
            key={id}
            className="mb-2 block rounded bg-cream p-2"
            href={`/posts/${id}`}
          >
            <h2 className="mb-2 text-xl">{title}</h2>
            <small className="mb-1 block text-black text-opacity-50">
              {description}
            </small>
            <small className="block text-black text-opacity-50">{date}</small>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
