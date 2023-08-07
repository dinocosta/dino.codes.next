import Head from 'next/head'

export default function PageTitle({ title }) {
	return <h1 className="mb-4 block text-2xl text-orange-500 dark:text-yellow-300">
		<Head><title>{`[dino.codes] ${title}`}</title></Head>
		{title}
	</h1>
}
