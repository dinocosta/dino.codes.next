import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsData() {
  // List all files in the `posts/` directory and return a list of objects where
  // each object has an `id` key corresponding to the ID to be used in the URL path.
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content, data } = matter(fileContent)

    return {
      id: fileName.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.description,
    }
  })
}

export async function getPost(id) {
  // We need to re-introduce the `.md` file extensions because we removed it in the `getPostsData` function
  // above.
  const filePath = path.join(postsDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(fileContent)
  const processedContent = await remark().use(html).process(content)
  const htmlContent = processedContent.toString()

  return {
    content: htmlContent,
    date: data.date,
    title: data.title,
    description: data.description,
  }
}

export function formatDate(date) {
  return new Date().toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
