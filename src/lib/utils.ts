/**
 * Utilities - Main Export Point
 *
 * This file maintains backward compatibility with existing imports:
 * import { cn } from "@/lib/utils"
 *
 * Internally, utilities are organized in src/lib/utils/ directory
 * For new code, import directly from specific files:
 * import { cn } from "@/lib/utils/cn"
 */

// Re-export from organized utils directory
export { cn } from "./utils/cn"

// Re-export everything from index for backwards compatibility
export * from "./utils/index"

