import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout'

// List of links to be rendered in the index page.
const links = [
  { href: '/posts', text: 'Posts' },
  { href: '/sketches', text: 'Sketches' },
  { href: '/about', text: 'About' },
]

export default function Home() {
  return (
		<Layout>
			<div className="flex h-screen">
				<div className="m-auto text-center">
					{links.map(({ href, text }) => (
						<div key={text}>
							<Link
								href={href}
								className="text-2xl font-medium transition-colors hover:text-yellow-300"
							>
								{text}
							</Link>
						</div>
					))}
				</div>
			</div>
		</Layout>
  )
}
