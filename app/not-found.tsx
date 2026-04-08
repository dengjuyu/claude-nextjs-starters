import { EmptyState } from '@/components/common/empty-state'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <EmptyState
        icon={FileQuestion}
        title="페이지를 찾을 수 없습니다"
        description="요청한 페이지가 존재하지 않습니다."
        action={{
          label: '홈으로 돌아가기',
          href: '/',
        }}
      />
    </div>
  )
}
