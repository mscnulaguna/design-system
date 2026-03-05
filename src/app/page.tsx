'use client'

import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'



/**
 * HOME PAGE - MSC Design System
 *
 * This is the main homepage showcasing the design system.
 * - Clean hero section
 * - Feature highlights
 * - Quick links to documentation
 * - Call to action
 *
 * Architecture:
 * - Navbar at top (RENDERED GLOBALLY IN LAYOUT - do NOT import here)
 * - Main content with max-width 1700px
 * - Footer at bottom (sticky to viewport bottom)
 * - Responsive grid layouts using Tailwind
 * - No debug outlines (production-ready)
 *
 * IMPORTANT:
 * Navbar is rendered globally in layout.tsx.
 * Do NOT import it again inside pages.
 * Otherwise it will duplicate and render twice.
 */

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* MAIN CONTENT - Navbar is already rendered by layout.tsx */}

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
          <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12">
            <h1 className="heading-h1 mb-4">MSC - NU Laguna Design System</h1>
            <p className="body-text mb-8 max-w-2xl">
              A production-ready component library built with React, TypeScript, Tailwind CSS, and shadcn/ui. Responsive, accessible, and ready to extend.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/components-showcase">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  View Components
                </Button>
              </Link>
              <Link href="/MASTER_README.md">
                <Button size="lg" variant="outline" className="text-foreground border-white hover:bg-white hover:text-blue-600">
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT AREA */}
        <div className="mx-auto max-w-[1700px] px-4 sm:px-8 md:px-12 py-12">
          {/* FEATURES SECTION */}
          <section className="mb-16">
            <h2 className="heading-h2 mb-8">Key Features (Box Preview Test)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Responsive Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text">
                    Mobile-first approach with breakpoints for all screen sizes. Works perfectly on mobile, tablet, and desktop.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Accessible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text">
                    WCAG 2.1 compliant with semantic HTML, ARIA labels, and keyboard navigation support throughout.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Beautiful UI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text">
                    Sharp, modern design with careful attention to spacing, typography, and color consistency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Production Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text">
                    Fully typed with TypeScript, tested, documented, and ready for production deployment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Easy to Customize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text">
                    Built with Tailwind CSS for easy customization. Override styles responsibly and extend components as needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-h4">Well Documented</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-text">
                    Comprehensive guides for components, templates, typography, and architecture. Everything you need to get started.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* COMPONENTS SECTION */}
          <section className="mb-16">
            <h2 className="heading-h2 mb-8">Available Components</h2>
            <p className="body-text mb-8 max-w-3xl">
              The design system comes with 20+ pre-built, production-ready components. All are built with shadcn/ui and fully customizable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Button', 'Card', 'Input', 'Dialog', 'Tabs',
                'Accordion', 'Progress', 'Badge', 'Alert', 'Avatar',
                'Tooltip', 'Toggle', 'Select', 'Checkbox', 'Textarea',
                'Separator', 'Spinner', 'Navigation Menu', 'Alert Dialog', 'And more...'
              ].map((component) => (
                <div key={component} className="p-3 bg-gray-50 rounded border border-gray-200 text-sm font-medium">
                  {component}
                </div>
              ))}
            </div>
          </section>

          {/* QUICK START */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center">
            <h2 className="heading-h2 mb-4">Ready to Build Amazing UIs?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto">
              Everything you need is here. Components, documentation, templates, and responsive design best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/components-showcase">
                <Button size="lg">View Components</Button>
              </Link>
              <Link href="/MASTER_README.md">
                <Button size="lg" variant="outline">
                  Read Docs
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
