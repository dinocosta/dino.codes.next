import Link from 'next/link'
import PageTitle from '@/components/page_title'
import { getPostsData } from '@/lib/posts'

export async function getData() {
	return getPostsData()
		.sort(function(a, b) { return new Date(b.date) - new Date(a.date) })
}

export default async function Posts() {
	const postsData = await getData()

	return (
		<div>
			<PageTitle title='Posts' />

			{postsData.map(({ id, title, date, description }) => (
				<Link
					key={id}
					className="mb-2 block rounded-md py-2 transition-colors"
					href={`/posts/${id}`}
					>
					<h2 className="mb-2 text-xl">{title}</h2>
					<small className="mb-1 block text-neutral-500">
						{description}
					</small>
					<small className="block text-neutral-500">{date}</small>
				</Link>
			))}
		</div>
	)
}
