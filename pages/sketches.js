import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Sketches() {
	return (
		<div className={`p-5 md:p-10 lg:p-20 text-white ${jakarta.className}`}>
			<h1 className="block font-medium text-6xl lg:text-9xl mb-20">Sketches</h1>
		</div>
	);
}
