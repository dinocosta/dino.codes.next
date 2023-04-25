import Image from 'next/image';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
		<div className="absolute inset-0">
			<div className={`flex min-h-screen items-end ${jakarta.className}`}>
				<div className="mb-auto"></div>
				<div className="m-20">
					<Link href="/" className="link">Posts</Link>
					<Link href="/sketches" className="link">Sketches</Link>
					<Link href="/" className="link">About</Link>
				</div>
			</div>
		</div>
  );
}
