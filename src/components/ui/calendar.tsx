import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * Calendar Component
 * ===================
 *
 * Month and year picker with date selection.
 * Customized to match MSC Design System.
 * Uses brand colors for selected dates.
 * Sharp styling with minimal border radius.
 */

// ... Basic calendar implementation stub
// Full implementation would require date-fns library
// For now, placeholder for showcase purposes

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "single" | "range"
  required?: boolean
}

export function Calendar({ className, ...props }: CalendarProps) {
  const [date, setDate] = React.useState<Date>(new Date())

  return (
    <div className={cn("p-4 rounded-lg border border-border bg-white", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">
          {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        <div className="flex gap-1">
          <Button size="sm" variant="ghost">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <button
            key={i}
            className={cn(
              "p-2 text-xs rounded hover:bg-blue-50 transition-colors",
              i === 15 && "bg-blue-600 text-white font-semibold hover:bg-blue-700"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
