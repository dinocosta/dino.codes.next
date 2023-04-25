import Image from 'next/image';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
		<div className={`flex min-h-screen items-end ${jakarta.className}`}>
			<div className="mb-auto"></div>
			<div className="m-8 text-white">
				<Link href="/" className="block font-medium hover:text-green text-6xl lg:text-9xl">Posts</Link>
				<Link href="/" className="block font-medium hover:text-green text-6xl lg:text-9xl">Sketches</Link>
				<Link href="/" className="block font-medium hover:text-green text-6xl lg:text-9xl">About</Link>
			</div>
		</div>
  );
}
