'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useConfirmDialog } from '@/lib/context/confirm-dialog-context'

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
