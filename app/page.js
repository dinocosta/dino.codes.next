import Link from 'next/link'

// List of links to be rendered in the index page.
const links = [
  {
    href: '/posts',
    text: 'Posts',
    animation: 'animate-[slidein_500ms_ease-in-out]',
  },
  {
    href: '/sketches',
    text: 'Sketches',
    animation: 'animate-[slidein_750ms_ease-in-out]',
  },
  {
    href: '/about',
    text: 'About',
    animation: 'animate-[slidein_1000ms_ease-in-out]',
  },
]

export default function Home() {
  return (
    <div className="text-muted-light dark:text-muted-dark flex text-left">
      <div>
        {links.map(({ href, text, animation }) => (
          <div key={text} className={`${animation} mb-2`}>
            <Link
              href={href}
              className="hover:text-accent-light hover:dark:text-accent-dark text-5xl font-bold transition-colors"
            >
              {text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
