import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const stacks = [
  {
    name: 'Next.js 16',
    tag: 'Framework',
    color: 'bg-black text-white dark:bg-white dark:text-black',
    description: 'App Router 기반의 서버 컴포넌트, Turbopack으로 극적으로 빨라진 빌드 속도를 경험하세요.',
    features: [
      'App Router + Server Components',
      'Turbopack 기본 빌드 도구',
      '스트리밍 SSR & 병렬 데이터 패칭',
      'Server Actions으로 API 없이 서버 실행',
    ],
  },
  {
    name: 'TypeScript',
    tag: 'Language',
    color: 'bg-blue-600 text-white',
    description: 'strict 모드 활성화로 런타임 에러를 컴파일 타임에 잡아내고, 강력한 자동완성을 누리세요.',
    features: [
      'strict 모드로 any 타입 차단',
      'Zod를 통한 런타임 타입 검증',
      'IDE 자동완성 및 리팩토링 지원',
      '빌드 시점 오류 감지',
    ],
  },
  {
    name: 'Tailwind CSS v4',
    tag: 'Styling',
    color: 'bg-sky-500 text-white',
    description: 'v4로 업그레이드된 Tailwind를 CSS 변수 기반 테마로 관리. 설정 파일 없이 더 빠르게.',
    features: [
      'oklch 색상 시스템 (더 넓은 색 영역)',
      'CSS 파일에서 직접 테마 관리',
      '다크모드 CSS 변수 자동 전환',
      '유틸리티 우선으로 빠른 스타일링',
    ],
  },
  {
    name: 'shadcn/ui',
    tag: 'UI Components',
    color: 'bg-zinc-800 text-white dark:bg-zinc-100 dark:text-black',
    description: '접근성이 보장된 Radix UI 기반 컴포넌트를 프로젝트 코드베이스에 직접 소유하세요.',
    features: [
      '18개 컴포넌트 사전 설치',
      'Radix UI로 완전한 접근성 보장',
      '코드 소유 — 자유롭게 커스터마이징',
      'radix-nova 테마로 세련된 기본 스타일',
    ],
  },
  {
    name: 'Zustand + React Hook Form',
    tag: 'State & Form',
    color: 'bg-orange-500 text-white',
    description: '전역 상태는 Zustand로 간단하게, 복잡한 폼은 React Hook Form + Zod로 타입 안전하게.',
    features: [
      'Zustand persist로 상태 자동 저장',
      'React Hook Form으로 성능 최적화',
      'Zod 스키마로 폼 검증과 타입 추론 통합',
      'Server Actions와 자연스럽게 연동',
    ],
  },
  {
    name: 'next-themes + sonner',
    tag: 'DX & UX',
    color: 'bg-purple-600 text-white',
    description: '새로고침해도 깜빡임 없는 다크모드, 세련된 토스트 알림으로 UX를 완성하세요.',
    features: [
      'SSR 단계에서 FOUC(깜빡임) 완전 방지',
      '시스템 테마 자동 감지',
      'sonner로 액션 피드백 토스트',
      'usehooks-ts로 커스텀 훅 불필요',
    ],
  },
]

export function TechStackSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">기술 스택</Badge>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            검증된 기술로 구성된
            <span className="block mt-1 text-primary">최신 스택</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            각 라이브러리는 실무 프로젝트에서 검증된 것만 선별했습니다.
            처음부터 직접 고르고 설정할 필요가 없습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stacks.map((stack) => (
            <Card key={stack.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold mb-2 ${stack.color}`}>
                      {stack.tag}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{stack.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stack.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {stack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}