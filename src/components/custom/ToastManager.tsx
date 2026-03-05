'use client'

import { useEffect, useState } from 'react'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastAction,
} from '@/components/ui/toast'
import { useToast } from '@/lib/hooks/useToast'

/**
 * ToastManager Component
 *
 * This component should be placed in your layout or root component.
 * It manages all toast notifications and renders them in the viewport.
 *
 * Usage:
 * 1. Import useToast hook in your component
 * 2. Call const { toast } = useToast()
 * 3. Call toast({ title: "Success!", variant: "success" })
 *
 * Variants: 'default' | 'destructive' | 'success' | 'warning'
 */
export function ToastManager() {
  const { toasts } = useToast()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} variant={toast.variant} open={toast.open} onOpenChange={toast.onOpenChange}>
          <div className="flex flex-col gap-1">
            <ToastTitle>{toast.title}</ToastTitle>
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
          </div>
          <ToastClose />
        </Toast>
      ))}
    </>
  )
}
