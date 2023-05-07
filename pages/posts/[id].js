import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout'
import { useEffect } from 'react'
import { getPostsData, getPost } from '@/lib/posts'
import styles from './[id].module.css'
// Highlight.js setup - this sets up the syntax highlighting for code blocks in the blogposts.
// It is only importing configs for Python and Elixir as those are the only two languages
// present in the blogposts for now. Add other languages as needed.
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import elixir from 'highlight.js/lib/languages/elixir'
import 'highlight.js/styles/tokyo-night-dark.css'
hljs.registerLanguage('python', python)
hljs.registerLanguage('elixir', elixir)


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

export default function Post({ content, date, title }) {

  // Calls the syntax higlighting logic after all content has been loaded/rendered.
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
		<Layout>
			<div>
				<h1 className="mb-2 block text-2xl text-yellow-500 font-medium">{title}</h1>
				<small className="block mb-2 text-neutral-400">{date}</small>

				<div
					className={styles.post}
					dangerouslySetInnerHTML={{ __html: content }}
				></div>
			</div>
		</Layout>
  )
}
