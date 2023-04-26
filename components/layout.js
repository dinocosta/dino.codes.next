import Head from 'next/head'
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Layout({ children }) {
	return (
		<div className={`px-5 md:px-10 lg:px-20 bg-light-gray min-h-screen ${jakarta.className}`}>
			<Head>
				<title>dino.codes</title>
			</Head>
			{children}
		</div>
	)
}
