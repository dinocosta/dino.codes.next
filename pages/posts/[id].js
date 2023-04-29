import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import styles from './[id].module.css'

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false,
  }
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileContent = fs.readFileSync(path.join(postsDirectory, 'markdown.md'), 'utf8')
  const { content, data } = matter(fileContent)
  const processedContent = await remark()
  .use(html)
  .process(content)
	const htmlContent = processedContent.toString()

  return {
    props: { 
			content: htmlContent, 
			date: data.date,
			title: data.title,
			description: data.description
		},
  }
}

export default function Post({ content, date, title, description }) {
  return (
		<div>
			<h1 className='text-4xl font-medium'>{title}</h1>
			<small>{description}</small>
			<small>{date}</small>

			<div className={styles.post} dangerouslySetInnerHTML={{ __html: content }}></div>
		</div>
	)
}
