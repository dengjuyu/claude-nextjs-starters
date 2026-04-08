import Link from 'next/link'
import { ArrowRight, GitFork } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          설정 시간을 줄이고, 제품 개발에 집중하세요.
          필요한 것은 이미 다 준비되어 있습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="gap-2 text-base px-8">
            <Link href="/dashboard">
              대시보드 살펴보기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GitFork className="w-4 h-4" />
              GitHub에서 클론
            </a>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-sm mx-auto">
          <div>
            <div className="text-3xl font-bold">18+</div>
            <div className="text-sm text-primary-foreground/70 mt-1">UI 컴포넌트</div>
          </div>
          <div>
            <div className="text-3xl font-bold">6+</div>
            <div className="text-sm text-primary-foreground/70 mt-1">기술 스택</div>
          </div>
          <div>
            <div className="text-3xl font-bold">0</div>
            <div className="text-sm text-primary-foreground/70 mt-1">보일러플레이트</div>
          </div>
        </div>
      </div>
    </section>
  )
}