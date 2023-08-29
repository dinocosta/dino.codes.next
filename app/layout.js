import '../styles/globals.css'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import PillButton from '@/components/pill_button'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { CpuChipIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Metadata } from 'next';
import { Roboto } from 'next/font/google'

const font = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'dino.codes'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
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
			</body>
		</html>
	)
}
