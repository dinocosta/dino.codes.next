import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="my-2">
      <Link
        href="/"
        className="block text-7xl font-medium transition-colors hover:text-yellow"
      >
        Posts
      </Link>
      <Link
        href="/sketches"
        className="block text-7xl font-medium transition-colors hover:text-yellow"
      >
        Sketches
      </Link>
      <Link
        href="/"
        className="block text-7xl font-medium transition-colors hover:text-yellow"
      >
        About
      </Link>
    </div>
  )
}
