import Link from 'next/link'
import { ArrowRight, GitFork } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28">
      {/* 배경 그라디언트 */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
            🚀 Next.js 16 + React 19 정식 출시
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-tight">
            더 빠르게 시작하는
            <span className="block text-primary mt-2">모던 웹 스타터킷</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Next.js 16, TypeScript, Tailwind CSS, shadcn/ui를 기반으로 다크모드·인증·대시보드가
            이미 구성된 프로덕션급 스타터킷입니다.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 text-base px-8">
              <Link href="/dashboard">
                지금 바로 시작하기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 text-base px-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GitFork className="w-4 h-4" />
                GitHub에서 보기
              </a>
            </Button>
          </div>

          {/* 신뢰 지표 */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="text-green-500 font-bold">✓</span>
              TypeScript strict 모드
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500 font-bold">✓</span>
              SSR 다크모드
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500 font-bold">✓</span>
              반응형 디자인
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500 font-bold">✓</span>
              Server Components 최적화
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}