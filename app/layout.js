import Link from '@/components/link'
import PillButton from '@/components/pill_button'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next';
import { Roboto } from 'next/font/google'
import '../styles/globals.css'

const font = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'dino.codes'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div
					className={`container max-w-3xl overflow-visible mx-auto px-4 ${font.className}`}
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
					{children}
				</div>
			</body>
		</html>
	)
}
