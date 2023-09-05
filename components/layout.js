import NavBar from '@/components/navbar'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { Inter as Font } from 'next/font/google'

const font = Font({ subsets: ['latin'], weight: ['400', '700'] })

export default function Layout({ children }) {
	return (
		<div className={`${font.className}`}>
			<NavBar />
			<div>
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
