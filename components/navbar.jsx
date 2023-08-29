'use client'

import Link from '@/components/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { highlightColor, darkHighlightColor, textColor, darkTextColor } from '@/lib/constants'
import { useState } from 'react'

const ToggleButton = ({ isOpen }) => {
	return isOpen ? <XMarkIcon className={`h-6 w-6 fill-${textColor} dark:${darkTextColor}`} /> : <Bars3Icon className={`h-6 w-6 fill-${textColor} dark:${darkTextColor}`} />
}

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false)

	// Toggles the 'hidden' class from the mobile menu and updates
	// the `isOpen` state so that the menu button is updated accordingly.
	const toggleMenu = () => {
		document
		.querySelector('.mobile-menu')
		.classList
		.toggle('hidden')

		setIsOpen(!isOpen)
	}

	return (
		<nav class="bg-gray-200 dark:bg-neutral-900 px-4 py-4 mb-2">
			<div class="mx-auto max-w-3xl">
				<div class="flex justify-between">
					<Link href="/">
						<div class={`w-6 h-6 rounded-full bg-${highlightColor} dark:bg-${darkHighlightColor}`} />
					</Link>

					{/* Primary Navigation */}
					<div class="flex items-center space-x-4 hidden md:flex">
						<a href="/posts"		class={`hover:text-${highlightColor} hover:dark:text-${darkHighlightColor} transition-colors`}>Posts</a>
						<a href="/sketches" class={`hover:text-${highlightColor} hover:dark:text-${darkHighlightColor} transition-colors`}>Sketches</a>
						<a href="/about"		class={`hover:text-${highlightColor} hover:dark:text-${darkHighlightColor} transition-colors`}>About</a>
					</div>

					{/* Mobile Button */}
					<div class="md:hidden flex items-center">
						<button onClick={toggleMenu} class="mobile-menu-button">
							<ToggleButton isOpen={isOpen} />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div class="mobile-menu hidden md:hidden mt-2">
					<a href="/posts" class={`block py-2 hover:text-${highlightColor} hover:dark:text-${darkHighlightColor} transition-colors`}>Posts</a>
					<a href="/sketches" class={`block py-2 hover:text-${highlightColor} hover:dark:text-${darkHighlightColor} transition-colors`}>Sketches</a>
					<a href="/about" class={`block py-2 hover:text-${highlightColor} hover:dark:text-${darkHighlightColor} transition-colors`}>About</a>
				</div>
			</div>
		</nav>
	)
}
