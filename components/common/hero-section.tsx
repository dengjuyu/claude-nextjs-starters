import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Next.js 16 모던 웹 스타터킷
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            React 19, Tailwind CSS, shadcn/ui로 빠르게 시작하는 프로덕션급 웹 애플리케이션
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/dashboard">
                대시보드 시작하기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">로그인</Link>
            </Button>
          </div>

          {/* 기술 스택 */}
          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-4">기술 스택</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
                <span className="text-sm font-medium">Next.js 16</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
                <span className="text-sm font-medium">React 19</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
                <span className="text-sm font-medium">shadcn/ui</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
                <span className="text-sm font-medium">TypeScript</span>
              </div>
            </div>
          </div>

          {/* 기능 목록 */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">빠른 성능</h3>
              <p className="text-sm text-muted-foreground">Turbopack 기반의 빠른 개발과 빌드 속도</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">다크모드</h3>
              <p className="text-sm text-muted-foreground">next-themes로 제공되는 완벽한 다크모드 지원</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">반응형 디자인</h3>
              <p className="text-sm text-muted-foreground">모바일부터 데스크톱까지 완벽한 반응형 지원</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
