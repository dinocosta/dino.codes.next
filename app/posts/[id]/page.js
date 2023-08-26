import PageTitle from '@/components/page_title'
import { getPostsData, getPost } from '@/lib/posts'
import styles from './styles.module.css'

// Highlight.js setup - this sets up the syntax highlighting for code blocks in the blogposts.
// It is only importing configs for Python and Elixir as those are the only two languages
// present in the blogposts for now. Add other languages as needed.
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import elixir from 'highlight.js/lib/languages/elixir'
import 'highlight.js/styles/base16/grayscale-light.css'
hljs.registerLanguage('python', python)
hljs.registerLanguage('elixir', elixir)


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
			<small className="block mb-2 text-neutral-400">{date}</small>

			<div
				className={styles.post}
				dangerouslySetInnerHTML={{ __html: content }}
			></div>
		</div>
	)
}
