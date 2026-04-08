'use client'

import { ReactNode, useCallback, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

let resolveConfirm: ((value: boolean) => void) | null = null

export function ConfirmDialog() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<{
    title: string
    description?: string
    confirmText?: string
    cancelText?: string
  }>({
    title: '확인',
  })

  const handleConfirm = useCallback(() => {
    if (resolveConfirm) {
      resolveConfirm(true)
      resolveConfirm = null
    }
    setOpen(false)
  }, [])

  const handleCancel = useCallback(() => {
    if (resolveConfirm) {
      resolveConfirm(false)
      resolveConfirm = null
    }
    setOpen(false)
  }, [])

  ;(window as any).__showConfirm = (
    title: string,
    description?: string,
    confirmText?: string,
    cancelText?: string,
  ) => {
    setState({ title, description, confirmText, cancelText })
    setOpen(true)
    return new Promise<boolean>((resolve) => {
      resolveConfirm = resolve
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{state.title}</DialogTitle>
          {state.description && <DialogDescription>{state.description}</DialogDescription>}
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={handleCancel}>
            {state.cancelText ?? '취소'}
          </Button>
          <Button onClick={handleConfirm}>{state.confirmText ?? '확인'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function useConfirm() {
  return useCallback(async (title: string, description?: string, confirmText?: string, cancelText?: string) => {
    return (window as any).__showConfirm?.(title, description, confirmText, cancelText) ?? false
  }, [])
}
