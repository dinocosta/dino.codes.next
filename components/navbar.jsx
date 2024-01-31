'use client'

import Link from '@/components/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const ToggleButton = ({ isOpen }) => {
  return isOpen ? <XMarkIcon className='h-6 w-6 fill-text-light dark:text-dark' /> : <Bars3Icon className='h-6 w-6 fill-text-light dark:text-dark' />
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
    <nav className="px-4 py-4 mb-2">
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-between">
          <Link href="/">
            <div className='w-6 h-6 rounded-full bg-primary-light dark:bg-primary-dark' />
          </Link>

          {/* Primary Navigation */}
          <div className="flex items-center space-x-4 hidden md:flex">
            <a href="/posts" className='hover:text-primary-light hover:dark:text-primary-dark transition-colors'>Posts</a>
            <a href="/sketches" className='hover:text-primary-light hover:dark:text-primary-dark transition-colors'>Sketches</a>
            <a href="/about" className='hover:text-primary-light hover:dark:text-primary-dark transition-colors'>About</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <ToggleButton isOpen={isOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu hidden md:hidden mt-2">
          <a href="/posts" className={`block py-2 hover:text-primary-light hover:dark:text-primary-dark transition-colors`}>Posts</a>
          <a href="/sketches" className={`block py-2 hover:text-primary-light hover:dark:text-primary-dark transition-colors`}>Sketches</a>
          <a href="/about" className={`block py-2 hover:text-primary-light hover:dark:text-primary-dark transition-colors`}>About</a>
        </div>
      </div>
    </nav>
  )
}
