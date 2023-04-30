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
      <h1 className="text-4xl font-medium mb-4">Posts</h1>
      {postsData.map(({ id, title, date, description  }) => (
				<div key={id}>
					<Link className="block mb-2" href={`/posts/${id}`}>
						<h2 className='text-2xl'>{title}</h2>
            <small>{description}</small>
					</Link>
				</div>
      ))}
    </div>
  )
}
