/**
 * Class Name Utility - cn()
 *
 * Merges Tailwind CSS classes intelligently
 * Uses clsx and tailwind-merge for optimal class merging
 *
 * Usage:
 * cn("px-2 py-1", "px-3")  // Result: "px-3 py-1" (px-3 wins)
 * cn(isActive && "bg-blue-500")  // Conditional classes
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default cn
