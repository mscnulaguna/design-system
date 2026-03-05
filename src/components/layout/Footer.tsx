'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Footer Component
 * ================
 * Displays footer with:
 * - Logo on the left
 * - Contact Us and Follow Us info in the middle (two columns)
 * - Partner with Us button on the right
 * - Copyright notice with blue background at bottom
 *
 * Fully responsive across all screen sizes
 *
 * MAX WIDTH MANAGEMENT:
 * Both the main content and copyright sections use max-w-[1700px].
 * This matches the Navbar and page content max-width for consistency.
 * To adjust: Change 1700px to 1600px, 1800px, etc.
 * NOTE: Update Navbar.tsx and BASE_PAGE_TEMPLATE.tsx as well to keep consistent.
 *
 * ICON SYSTEM:
 * Footer icons are custom project icons, NOT lucide-react defaults.
 * Located in /public/icons/ directory
 * Update SVG files there to change icons globally across all pages.
 */

export function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-border/40">
      {/* Main Footer Content - Compact spacing */}
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 py-8 sm:py-10">
       {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 mb-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start md:justify-start">
            <div className="relative h-28 w-40">
              <Image
                src="/logos/msclogofooter.svg"
                alt="MSC Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Contact Us and Follow Us - Nested Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Us Column */}
            <div className="text-center md:text-left">
              <h3 className="text-base font-semibold mb-3 text-foreground">Contact Us</h3>
              <div className="space-y-2">
                {/* Address */}
                <a
                  href="https://maps.google.com/?q=KM+53+Pan+Philippine+Highway,+Brgy.+Milagrosa,+Calamba,+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center md:items-start gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors justify-center md:justify-start"
                  aria-label="MSC Office Address"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>KM 53 Pan Philippine Highway, Brgy. Milagrosa, Calamba, Philippines, 4027</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:msc@nu-laguna.edu.ph"
                  className="flex flex-col md:flex-row items-center md:items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors justify-center md:justify-start"
                  aria-label="Contact email"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>msc@nu-laguna.edu.ph</span>
                </a>
              </div>
            </div>

            {/* Follow Us Column */}
            <div className="text-center md:text-left">
              <h3 className="text-base font-semibold mb-3 text-foreground">Follow Us</h3>
              {/* Custom project icons - stored in /public/icons/ */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:opacity-75 transition-opacity"
                  aria-label="Facebook"
                >
                  <Image
                    src="/icons/fb-icon.svg"
                    alt="Facebook icon"
                    width={20}
                    height={20}
                    className="text-foreground"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:opacity-75 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/icons/linkedin-icon.svg"
                    alt="LinkedIn icon"
                    width={20}
                    height={20}
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:opacity-75 transition-opacity"
                  aria-label="GitHub"
                >
                  <Image
                    src="/icons/github-icon.svg"
                    alt="GitHub icon"
                    width={20}
                    height={20}
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:opacity-75 transition-opacity"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/ig-icon.svg"
                    alt="Instagram icon"
                    width={20}
                    height={20}
                  />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:opacity-75 transition-opacity"
                  aria-label="Twitter"
                >
                  <Image
                    src="/icons/icon-twitter.svg"
                    alt="Twitter icon"
                    width={20}
                    height={20}
                  />
                </a>

                {/* Discord */}
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:opacity-75 transition-opacity"
                  aria-label="Discord"
                >
                  <Image
                    src="/icons/discord-icon.svg"
                    alt="Discord icon"
                    width={20}
                    height={20}
                  />
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:opacity-75 transition-opacity"
                  aria-label="TikTok"
                >
                  <Image
                    src="/icons/tiktok-icon.svg"
                    alt="TikTok icon"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Partner with Us Section */}
          <div className="flex items-center justify-center md:items-center md:justify-end">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 h-auto text-sm">
              Partner with Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full bg-blue-600 text-white py-2">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12">
          <p className="text-center text-xs">
            © 2026 NU Laguna Microsoft Student Community | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
