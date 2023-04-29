import Head from 'next/head'
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Layout({ children }) {
	return ([
		<Head>
			<title>dino.codes</title>
		</Head>,
		<div className={`container mx-auto bg-light-gray ${jakarta.className}`}>
			{children}
		</div>
	])
}
