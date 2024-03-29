import CodeHighlighter from '@/components/code_highlighter'
import PageTitle from '@/components/page_title'
import { getPost, getPostsData, formatDate } from '@/lib/posts'
import styles from './styles.module.css'

export async function generateStaticParams() {
  const postsData = getPostsData()

  const data = postsData.map(({ id }) => {
    id: id
  })

  return data
}

export async function getData(id) {
  const { content, date, title, description } = await getPost(id)

  return {
    content: content,
    date: date,
    title: title,
    description: description,
  }
}

export default async function Post({ params }) {
  const { id } = params
  const { content, date, title } = await getData(id)

  return (
    <div>
      <PageTitle title={title}>
        <small className="text-muted-light dark:text-muted-dark mb-6 mt-1 block">
          {formatDate(date)}
        </small>
      </PageTitle>

      <CodeHighlighter />
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}
