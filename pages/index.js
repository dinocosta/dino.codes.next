import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <div>
          <Link
            href="/posts"
            className="text-2xl font-medium transition-colors hover:text-yellow"
          >
            Posts
          </Link>
        </div>
        <div>
          <Link
            href="/sketches"
            className="text-2xl font-medium transition-colors hover:text-yellow"
          >
            Sketches
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="text-2xl font-medium transition-colors hover:text-yellow"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  )
}
