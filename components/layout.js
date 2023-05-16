import Head from 'next/head'
import Link from '@/components/link'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { Sora as Font } from 'next/font/google'
import PillButton from '@/components/pill_button'

const font = Font({ subsets: ['latin'] })

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
			className={`container overflow-visible mx-auto px-4 font-light ${font.className}`}
		>
			<Head>
				<title>dino.codes</title>
			</Head>
			{asPath != '/' &&
				<Link href={pathAbove(asPath)}>
					<PillButton>
						<ArrowLongLeftIcon className="h-6 w-6 fill-orange-800 dark:fill-yellow-800" />
					</PillButton>
				</Link>
			}
			{children}
		</div>
	)
}
