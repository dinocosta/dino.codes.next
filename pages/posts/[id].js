import styles from './[id].module.css'
import { getPostsData, getPost } from '@/lib/posts'

export async function getStaticPaths() {
  const postsData = getPostsData()
  const paths = postsData.map(({ id }) => {
    return {
      params: { id: id },
    }
  })

  return { paths: paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const { content, date, title, description } = await getPost(params.id)

  return {
    props: {
      content: content,
      date: date,
      title: title,
      description: description,
    },
  }
}

export default function Post({ content, date, title, description }) {
  return (
    <div>
      <h1 className="text-4xl font-medium">{title}</h1>
      <small>{description}</small>
      <small>{date}</small>

      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}
