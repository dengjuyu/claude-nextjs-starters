'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface ConfirmOptions {
  title: string
  description?: string
  confirmText?: string
  cancelText?: string
}

interface ConfirmContextType {
  state: ConfirmOptions & { open: boolean }
  showConfirm: (options: ConfirmOptions) => Promise<boolean>
  handleConfirm: () => void
  handleCancel: () => void
  setOpen: (open: boolean) => void
}

const ConfirmDialogContext = createContext<ConfirmContextType | undefined>(undefined)

export function ConfirmDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<ConfirmOptions>({
    title: '확인',
  })
  const [resolveConfirm, setResolveConfirm] = useState<((value: boolean) => void) | null>(null)

  const handleConfirm = useCallback(() => {
    if (resolveConfirm) {
      resolveConfirm(true)
      setResolveConfirm(null)
    }
    setOpen(false)
  }, [resolveConfirm])

  const handleCancel = useCallback(() => {
    if (resolveConfirm) {
      resolveConfirm(false)
      setResolveConfirm(null)
    }
    setOpen(false)
  }, [resolveConfirm])

  const showConfirm = useCallback((options: ConfirmOptions) => {
    setState(options)
    setOpen(true)
    return new Promise<boolean>((resolve) => {
      setResolveConfirm(() => resolve)
    })
  }, [])

  const value: ConfirmContextType = {
    state: { ...state, open },
    showConfirm,
    handleConfirm,
    handleCancel,
    setOpen,
  }

  return <ConfirmDialogContext.Provider value={value}>{children}</ConfirmDialogContext.Provider>
}

export function useConfirmDialog() {
  const context = useContext(ConfirmDialogContext)
  if (!context) {
    throw new Error('useConfirmDialog는 ConfirmDialogProvider 내에서만 사용할 수 있습니다')
  }
  return context
}

export function useConfirm() {
  const { showConfirm } = useConfirmDialog()
  return useCallback(
    (title: string, description?: string, confirmText?: string, cancelText?: string) => {
      return showConfirm({ title, description, confirmText, cancelText })
    },
    [showConfirm],
  )
}