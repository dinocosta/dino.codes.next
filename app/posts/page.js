import PageTitle from '@/components/page_title'
import { getPostsData, formatDate } from '@/lib/posts'
import Link from 'next/link'

export async function getData() {
  return getPostsData().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
}

export default async function Posts() {
  const postsData = await getData()

  return (
    <div>
      <PageTitle title="Posts" />

      {postsData.map(({ id, title, date, description }) => (
        <Link
          key={id}
          className="mb-2 block rounded-md py-2 transition-colors"
          href={`/posts/${id}`}
        >
          <h2 className="mb-1">{title}</h2>
          <div className="text-muted-light dark:text-muted-dark">
            <small className="text-muted-light dark:text-muted-dark block">
              {formatDate(date)}
            </small>
            <small className="block">{description}</small>
          </div>
        </Link>
      ))}
    </div>
  )
}
