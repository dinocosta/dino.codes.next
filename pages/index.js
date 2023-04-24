import Image from 'next/image';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
		<div className={`flex min-h-screen m-4 items-end ${jakarta.className}`}>
			<div className="mb-auto"></div>
			<div className="mb-10">
				<Link href="/" className="block font-medium text-8xl grow-0">Posts</Link>
				<Link href="/" className="block font-medium text-8xl grow-0">Sketches</Link>
				<Link href="/" className="block font-medium text-8xl grow-0">About</Link>
			</div>
		</div>
  );
}
