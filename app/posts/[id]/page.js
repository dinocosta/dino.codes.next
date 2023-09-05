import PageTitle from '@/components/page_title'
import CodeHighlighter from '@/components/code_highlighter'
import styles from './styles.module.css'
import { getPostsData, getPost } from '@/lib/posts'
import { subtitleColor } from '@/lib/constants'


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
			<PageTitle title={title} />
			<small className={`block text-${subtitleColor}`}>{date}</small>

			<CodeHighlighter />
			<div
				className={styles.post}
				dangerouslySetInnerHTML={{ __html: content }}
			></div>
		</div>
	)
}
