import Link from 'next/link'
import { getPostsData } from '@/lib/posts'

export async function getStaticProps() {
  const postsData = getPostsData()

  return {
    props: { postsData },
  }
}

export default function Posts({ postsData }) {
  return (
    <div>
      <h1 className="text-4xl font-medium">Posts</h1>
      {postsData.map(({ id }) => (
				<div key={id}>
					<Link className="block" href={`/posts/${id}`}>
						{id}
					</Link>
				</div>
      ))}
    </div>
  )
}
