'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupContent, InputGroupSuffix } from '@/components/ui/input-group'
import { KBD } from '@/components/ui/kbd'
import { Search } from 'lucide-react'
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
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSignIn = () => {
    console.log('Sign in clicked')
  }

  return (
    <>
      {/* Search Dialog - Controlled by Ctrl+K */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search Input Group - Opens on click or Ctrl+K */}
        <div className="hidden sm:flex" onClick={() => setIsSearchOpen(true)}>
          <InputGroup className="w-64 cursor-pointer">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <InputGroupContent 
              placeholder="Search components..."
              className="pl-9 cursor-pointer"
              readOnly
            />
            <InputGroupSuffix className="right-2">
              <KBD>Ctrl K</KBD>
            </InputGroupSuffix>
          </InputGroup>
        </div>

        {/* Mobile Search Icon Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSearchOpen(true)}
          className="sm:hidden h-10 w-10"
          aria-label="Open search"
        >
          <Search className="h-5 w-5" />
        </Button>

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
    </>
  )
}