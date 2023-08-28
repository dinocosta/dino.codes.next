'use client'

import Link from '@/components/link'
import { CpuChipIcon, Bars3Icon } from '@heroicons/react/24/solid'

export default function NavBar() {
	// Toggles the 'hidden' class from the mobile menu.
	const toggleMenu = () => {
		document
		.querySelector('.mobile-menu')
		.classList
		.toggle('hidden')
	}

	return (
		<nav class="bg-gray-200 px-4 py-2 mb-2">
			<div class="mx-auto container">
				<div class="flex justify-between">
					<Link href="/">
						<div class="bg-orange-500 w-6 h-6 rounded-full" />
					</Link>

					{/* Primary Navigation */}
					<div class="flex items-center space-x-4 hidden md:flex">
						<a href="/posts" class="hover:text-orange-500">Posts</a>
						<a href="/sketches" class="hover:text-orange-500">Sketches</a>
						<a href="/about" class="hover:text-orange-500">About</a>
					</div>

					{/* Mobile Button */}
					<div class="md:hidden flex items-center">
						<button onClick={toggleMenu} class="mobile-menu-button">
							<Bars3Icon className="h-6 w-6 fill-gray-900 dark:fill-yellow-800" />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div class="mobile-menu hidden md:hidden mt-2">
					<a href="#" class="block py-2 text-sm hover:text-orange-500">Posts</a>
					<a href="#" class="block py-2 text-sm hover:text-orange-500">Sketches</a>
					<a href="#" class="block py-2 text-sm hover:text-orange-500">About</a>
				</div>
			</div>
		</nav>
	)
}
