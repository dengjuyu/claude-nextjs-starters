import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { FileText, LogIn, LayoutDashboard, Moon, Lock, Zap } from 'lucide-react'
import Link from 'next/link'

const examples = [
  {
    icon: LogIn,
    title: '인증 시스템',
    description: '로그인 및 회원가입 폼을 react-hook-form + Zod로 구현. Server Actions 연결 구조가 준비되어 있습니다.',
    links: [
      { label: '로그인 페이지', href: '/login' },
      { label: '회원가입 페이지', href: '/signup' },
    ],
  },
  {
    icon: LayoutDashboard,
    title: '대시보드 레이아웃',
    description: 'Sidebar + Header + Main 구조로 구성된 대시보드. Zustand로 사이드바 상태를 로컬에 저장합니다.',
    links: [
      { label: '대시보드 보기', href: '/dashboard' },
    ],
  },
  {
    icon: Moon,
    title: '다크모드',
    description: 'next-themes로 구현한 SSR 다크모드. 새로고침해도 깜빡임 없으며 시스템 설정을 자동으로 감지합니다.',
    links: [
      { label: '홈페이지에서 확인', href: '/' },
    ],
  },
  {
    icon: Lock,
    title: '타입 안전한 폼 검증',
    description: 'Zod 스키마에서 TypeScript 타입을 자동 추론. 클라이언트와 서버 양쪽에서 동일한 검증 로직을 재사용합니다.',
    links: [
      { label: '로그인 폼 예제', href: '/login' },
      { label: '회원가입 폼 예제', href: '/signup' },
    ],
  },
  {
    icon: Zap,
    title: 'Turbopack 빌드',
    description: 'Next.js 16의 Turbopack으로 HMR 속도와 빌드 시간을 대폭 단축했습니다. 개발 환경에서 빠른 응답 속도를 경험해보세요.',
    links: [
      { label: '프로젝트 문서 읽기', href: '/docs' },
    ],
  },
  {
    icon: FileText,
    title: '반응형 레이아웃',
    description: '모바일부터 데스크탑까지 완벽한 반응형 디자인. Sheet 기반 모바일 메뉴와 Sidebar 접기/펴기 기능이 포함되어 있습니다.',
    links: [
      { label: '홈페이지에서 확인', href: '/' },
    ],
  },
]

export default function ExamplesPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              스타터킷 예제
            </Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
              구현된 예제들
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              이 스타터킷에 미리 구현되어 있는 주요 예제들을 살펴보세요.
              각 예제는 프로덕션 수준의 품질로 준비되어 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examples.map(({ icon: Icon, title, description, links }) => (
              <Card
                key={title}
                className="p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {description}
                </p>

                <div className="flex flex-col gap-2">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-primary hover:underline transition-colors"
                    >
                      → {link.label}
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              더 알아보고 싶으신가요?
            </h2>
            <p className="text-muted-foreground mb-6">
              이 스타터킷의 전체 기능과 설정 방법을 알아보려면 문서를 읽어보세요.
            </p>
            <Link
              href="/docs"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              문서 읽기
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
