import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * Carousel Component
 * ==================
 *
 * Image and content carousel with navigation controls.
 * Smooth transitions and responsive design.
 * Customized to match MSC Design System.
 * Sharp styling with keyboard navigation support.
 */

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function Carousel({
  children,
  autoPlay = false,
  autoPlayInterval = 3000,
  className,
  ...props
}: CarouselProps) {
  const [current, setCurrent] = React.useState(0)
  const count = React.Children.count(children)

  const next = () => setCurrent((current + 1) % count)
  const prev = () => setCurrent((current - 1 + count) % count)

  React.useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(next, autoPlayInterval)
    return () => clearInterval(interval)
  }, [current, autoPlay, autoPlayInterval])

  return (
    <div className={cn("relative w-full", className)} {...props}>
      {/* Carousel Container */}
      <div className="relative h-96 overflow-hidden rounded-lg bg-gray-100">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === current ? "opacity-100" : "opacity-0"
            )}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        size="icon"
        variant="ghost"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === current ? "w-8 bg-white" : "w-2 bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("w-full h-full flex items-center justify-center", className)} {...props} />
  )
)
CarouselItem.displayName = "CarouselItem"
