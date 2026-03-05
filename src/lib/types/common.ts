/**
 * Common Types & Interfaces
 *
 * Shared TypeScript types used across the design system
 *
 * Usage:
 * import { ComponentProps } from "@/lib/types"
 */

// Component prop types
export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

// Navigation item type
export interface NavItem {
  label: string
  href: string
}

// Dropdown menu item type
export interface DropdownItem extends NavItem {
  icon?: React.ReactNode
  badge?: string | number
  disabled?: boolean
}

// Responsive breakpoint type
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl"

// Theme type
export type Theme = "light" | "dark" | "auto"

export default {}
