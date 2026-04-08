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

/**
 * Confirm Dialog Provider 컴포넌트
 * 타입 안전한 확인 대화상자를 제공합니다
 * @param children - Provider로 감싸질 자식 요소들
 */
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

/**
 * Confirm Dialog Context 훅
 * @returns Context의 모든 state와 handler 함수들
 * @throws ConfirmDialogProvider 외부에서 호출하면 에러 발생
 */
export function useConfirmDialog() {
  const context = useContext(ConfirmDialogContext)
  if (!context) {
    throw new Error('useConfirmDialog는 ConfirmDialogProvider 내에서만 사용할 수 있습니다')
  }
  return context
}

/**
 * Confirm 대화상자를 표시하고 사용자 선택을 반환하는 훅
 * @returns 제목, 설명, 버튼 텍스트를 받아 boolean Promise를 반환하는 함수
 * @example
 * const confirm = useConfirm()
 * const result = await confirm('삭제하시겠습니까?', '이 작업은 되돌릴 수 없습니다')
 */
export function useConfirm() {
  const { showConfirm } = useConfirmDialog()
  return useCallback(
    (title: string, description?: string, confirmText?: string, cancelText?: string) => {
      return showConfirm({ title, description, confirmText, cancelText })
    },
    [showConfirm],
  )
}