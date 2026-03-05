'use client'

import Link from 'next/link'
import Image from 'next/image'

/**
 * NavbarLeft Component
 * ====================
 * Displays the logo on the left side of the navbar.
 *
 * What: Logo that links to home page
 * Why: Navigation anchor and branding
 * How: Click to go to home
 * Don't remove: The Link href or Image component
 */

interface NavbarLeftProps {
  logoSrc?: string
  logoAlt?: string
  href?: string
}

export function NavbarLeft({
  logoSrc = '/logos/msclogo.svg',
  logoAlt = 'Logo',
  href = '/',
}: NavbarLeftProps) {
  return (
    // Logo container - Links to home
    <Link
      href={href}
      className="flex items-center gap-2 transition-opacity hover:opacity-80"
    >
      {/* Logo image - Responsive sizing (h-8 mobile, h-10 tablet+) */}
      <div className="relative h-8 w-8 sm:h-10 sm:w-10">
        <Image
          src={logoSrc}
          alt={logoAlt}
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  )
}
