import Link from 'next/link'
import Image from 'next/image'
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
      <Link href="/" className="my-8 block">
        <Image
          src="/svg/left-arrow.svg"
          height="24"
          width="24"
          alt="Back button"
        />
      </Link>
			<h1 className="mb-8 block text-2xl font-medium">Posts</h1>
      {postsData.map(({ id, title, date, description  }) => (
				<div key={id}>
					<Link className="block mb-2" href={`/posts/${id}`}>
						<h2 className='text-xl'>{title}</h2>
            <small>{description}</small>
					</Link>
				</div>
      ))}
    </div>
  )
}
