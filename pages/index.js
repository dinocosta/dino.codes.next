import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
		<div className="flex min-h-screen items-end">
			<div className="mb-auto"></div>
			<div className="mb-5 md:mb-10 lg:mb-20">
				<Link href="/" className="link">Posts</Link>
				<Link href="/sketches" className="link">Sketches</Link>
				<Link href="/" className="link">About</Link>
			</div>
		</div>
  );
}
