import Image from 'next/image';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
		<div className={`flex min-h-screen items-end ${jakarta.className}`}>
			<div className="mb-auto"></div>
			<div className="m-4 color-white">
				<Link href="/" className="block font-medium text-6xl lg:text-8xl link">Posts</Link>
				<Link href="/" className="block font-medium text-6xl lg:text-8xl link">Sketches</Link>
				<Link href="/" className="block font-medium text-6xl lg:text-8xl link">About</Link>
			</div>
		</div>
  );
}
