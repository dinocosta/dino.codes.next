import Head from 'next/head'
import { highlightColor, darkHighlightColor } from '@/lib/constants'

export default function PageTitle({ title }) {
	return <h1 className={`mb-2 mt-4 block text-2xl text-${highlightColor} dark:text-${darkHighlightColor}`}>
		<Head><title>{`[dino.codes] ${title}`}</title></Head>
		{title}
	</h1>
}
