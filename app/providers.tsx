'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ConfirmDialogProvider } from '@/lib/context/confirm-dialog-context'
import { ConfirmDialog } from '@/components/common/confirm-dialog'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <ConfirmDialogProvider>
          {children}
          <ConfirmDialog />
          <Toaster richColors position="top-right" />
        </ConfirmDialogProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}
