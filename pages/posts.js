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
          <div key={id}>
            <Link className="mb-2 block" href={`/posts/${id}`}>
              <h2 className="text-xl">{title}</h2>
              <small>{description}</small>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
