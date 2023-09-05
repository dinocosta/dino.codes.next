import '@/styles/globals.css'
import NavBar from '@/components/navbar'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { Inter, Roboto_Mono } from 'next/font/google'
 
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
})

export const metadata = {
  title: '[dino.codes]'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${inter.variable} font-sans`}>
			<body>
				<NavBar />
				<div
					className="px-4 overflow-visible"
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
