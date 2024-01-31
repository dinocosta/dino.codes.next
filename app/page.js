import Link from 'next/link'

// List of links to be rendered in the index page.
const links = [
  { href: '/posts', text: 'Posts', animation: 'animate-[slidein_500ms_ease-in-out]' },
  { href: '/sketches', text: 'Sketches', animation: 'animate-[slidein_750ms_ease-in-out]' },
  { href: '/about', text: 'About', animation: 'animate-[slidein_1000ms_ease-in-out]' },
]

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        {links.map(({ href, text, animation }) => (
          <div key={text} className={animation}>
            <Link
              href={href}
              className="text-2xl font-bold transition-colors hover:text-primary-light hover:dark:text-primary-dark">
              {text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
