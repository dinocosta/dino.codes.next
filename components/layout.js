import Head from 'next/head'
import Script from 'next/script'
import Link from '@/components/link'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { IBM_Plex_Sans as Font } from 'next/font/google'
import PillButton from '@/components/pill_button'
import { Analytics } from '@vercel/analytics/react'

const font = Font({ subsets: ['latin'], weight: ['400', '700'] })

// Takes a string which is the path of the curren page and returns the path of the page above, for
// example, `pathAbove('/posts/new-post')` will return `/posts`.
function pathAbove(path) {
	// Calling `.split` will create an array with the different parts of the path.
	// We then call `.pop` to remove the last element in the array and finally we join the remaining parts of the path
	// with `.join('/')`, however, if the path is only one-level deep (for example, `/posts`) we need to use `|| '/'`,
	// otherwise this would return an empty string.
	const newPath = path.split('/')
	newPath.pop()

	return newPath.join('/') || '/'
}

export default function Layout({ children }) {
	// Fetch the current page's path, if it's different from the index page ('/') we are going to show the left arrow
	// button so users can navigate back to the page above (not previous, as in going back in the browser), which can be determined by deleting the suffix after the last `/`, 
	// for example, for `/posts/this-is-a-post`, the page above would be `/posts`.
	const { asPath } = useRouter()

	return (
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

			<Head>
				<title>dino.codes</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />

			</Head>
			{asPath != '/' &&
				<div className="bg-neutral-200 dark:bg-neutral-900 sticky top-0">
					<Link href={pathAbove(asPath)}>
						<PillButton>
							<ArrowLongLeftIcon className="h-6 w-6 fill-orange-800 dark:fill-yellow-800" />
						</PillButton>
					</Link>
				</div>
			}
			<Analytics />
			{children}
		</div>
	)
}
