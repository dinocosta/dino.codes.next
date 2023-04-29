import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="my-2">
      <Link href="/" className="link">
        Posts
      </Link>
      <Link href="/sketches" className="link">
        Sketches
      </Link>
      <Link href="/" className="link">
        About
      </Link>
    </div>
  )
}
