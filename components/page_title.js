import { highlightColor, darkHighlightColor } from '@/lib/constants'

export default function PageTitle({ title }) {
	return <h1 className={`mb-2 mt-4 block text-2xl text-${highlightColor} dark:text-${darkHighlightColor}`}>
		{title}
	</h1>
}
