'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SearchDialog } from './SearchDialog'

/**
 * NavbarRight Component
 * ====================
 * Right section of navbar:
 * - Search button
 * - Theme toggle
 * - Sign In button
 *
 * ICON SYSTEM:
 * All icons are stored in /public/icons/
 * Replace SVG files there to update globally.
 */

export function NavbarRight() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleSignIn = () => {
    console.log('Sign in clicked')
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Search Button (Custom Icon) */}
      <SearchDialog />

      {/* Theme Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
        className="h-10 w-10"
      >
        {isDarkMode ? (
          <Image
            src="/icons/circle-half-white.svg"
            alt="Dark mode icon"
            width={24}
            height={24}
            className="object-contain"
          />
        ) : (
          <Image
            src="/icons/circle-half-black.svg"
            alt="Light mode icon"
            width={24}
            height={24}
            className="object-contain"
          />
        )}
      </Button>

      {/* Desktop Sign In */}
      <Button
        onClick={handleSignIn}
        className="ml-2 hidden px-4 sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white"
      >
        Sign In
      </Button>

      {/* Mobile Sign In */}
      <Button
        onClick={handleSignIn}
        className="ml-1 px-3 sm:hidden bg-blue-600 hover:bg-blue-700 text-white text-sm"
      >
        Sign In
      </Button>
    </div>
  )
}