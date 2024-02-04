'use client'

import Link from '@/components/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="mb-2 p-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-between">
          <Link href="/">
            <div className="bg-accent-light dark:bg-accent-dark hover:bg-faint-light hover:dark:bg-accent-dark h-6 w-6 rounded-full" />
          </Link>

          {/* Primary Navigation, only render if not on homepage */}
          {pathname !== '/' ? (
            <div className="text-muted-light dark:text-muted-dark flex items-center space-x-4 text-lg">
              <a
                href="/posts"
                className="hover:text-accent-light hover:dark:text-accent-dark transition-colors"
              >
                Posts
              </a>
              <a
                href="/sketches"
                className="hover:text-accent-light hover:dark:text-accent-dark transition-colors"
              >
                Sketches
              </a>
              <a
                href="/about"
                className="hover:text-accent-light hover:dark:text-accent-dark transition-colors"
              >
                About
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </nav>
  )
}
