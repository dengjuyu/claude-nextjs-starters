'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useConfirmDialog } from '@/lib/context/confirm-dialog-context'

/**
 * Confirm Dialog 컴포넌트
 * ConfirmDialogProvider와 함께 사용하여 타입 안전한 확인 대화상자를 렌더링합니다
 *
 * 사용법:
 * - ConfirmDialogProvider로 앱을 감싼 후
 * - 내부 어딘가에 ConfirmDialog를 배치
 * - useConfirm() 훅을 사용하여 대화상자를 표시
 */
export function ConfirmDialog() {
  const { state, handleConfirm, handleCancel, setOpen } = useConfirmDialog()

  return (
    <Dialog open={state.open} onOpenChange={setOpen}>
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

export { useConfirm } from '@/lib/context/confirm-dialog-context'
