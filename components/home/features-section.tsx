import { Badge } from '@/components/ui/badge'
import { Moon, Smartphone, Shield, LayoutDashboard, FormInput, Zap } from 'lucide-react'

const features = [
  {
    icon: Moon,
    title: 'SSR 다크모드',
    description: 'next-themes로 새로고침해도 깜빡임 없는 완벽한 다크모드. 시스템 설정을 자동으로 감지합니다.',
  },
  {
    icon: Smartphone,
    title: '반응형 레이아웃',
    description: '모바일부터 데스크탑까지 완벽한 반응형. Sheet 기반 모바일 메뉴, 사이드바 접기/펴기 지원.',
  },
  {
    icon: Shield,
    title: '인증 시스템 골격',
    description: 'react-hook-form + Zod 기반 로그인·회원가입 폼. Server Actions 연결 구조가 이미 준비됐습니다.',
  },
  {
    icon: LayoutDashboard,
    title: '대시보드 레이아웃',
    description: 'Sidebar + Header + Main 구조의 대시보드 레이아웃. Zustand로 사이드바 상태를 로컬에 저장합니다.',
  },
  {
    icon: FormInput,
    title: '타입 안전한 폼',
    description: 'Zod 스키마에서 TypeScript 타입을 자동 추론. 클라이언트·서버 양쪽에서 동일한 검증 로직을 재사용합니다.',
  },
  {
    icon: Zap,
    title: 'Turbopack 빌드',
    description: 'Next.js 16의 기본 빌드 도구인 Turbopack으로 HMR 속도와 빌드 시간을 대폭 단축했습니다.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">이미 구현된 기능</Badge>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            반복 작업은 이미 해뒀습니다
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            프로젝트마다 매번 구현하던 공통 기능들을 미리 설정해뒀습니다.
            비즈니스 로직에만 집중하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group flex gap-4">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}