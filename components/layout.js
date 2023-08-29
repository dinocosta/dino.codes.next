import Head from 'next/head'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import PillButton from '@/components/pill_button'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { IBM_Plex_Sans as Font } from 'next/font/google'
import { useRouter } from 'next/router'

const font = Font({ subsets: ['latin'], weight: ['400', '700'] })

export default function Layout({ children }) {
	return (
		<div>
			<NavBar />
			<div
				className={`px-4 overflow-visible ${font.className}`}
				>
				<Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-LF9R8Y4KG2' />
				<Script id='google-analytics' strategy='afterInteractive' dangerouslySetInnerHTML={{
					__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LF9R8Y4KG2', {
page_path: window.location.pathname,
});
`,
					}}
				/>

				<Analytics />
				<div class="max-w-3xl mx-auto">
					{children}
				</div>
			</div>
		</div>
	)
}
