import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { BookOpen, Settings, Folder, Package, Code, GitBranch } from 'lucide-react'
import Link from 'next/link'

const docSections = [
  {
    icon: Settings,
    title: '시작하기',
    description: '프로젝트 설정 및 설치 방법',
    content: [
      {
        heading: '필수 사항',
        items: [
          'Node.js 18 이상',
          'npm, yarn, pnpm 중 하나',
        ],
      },
      {
        heading: '설치',
        items: [
          'git clone으로 이 리포지토리를 복제',
          'npm install (또는 yarn install / pnpm install)',
          'npm run dev로 개발 서버 시작',
          'http://localhost:3000 접속',
        ],
      },
    ],
  },
  {
    icon: Folder,
    title: '프로젝트 구조',
    description: '주요 디렉토리 및 파일 구성',
    content: [
      {
        heading: 'app/',
        items: [
          'page.tsx - 홈페이지',
          '(public)/ - 공개 페이지 그룹 (로그인, 회원가입)',
          '(dashboard)/ - 대시보드 페이지 그룹 (인증 필요)',
          'layout.tsx - 루트 레이아웃',
        ],
      },
      {
        heading: 'components/',
        items: [
          'layout/ - Header, Footer, Sidebar 등 레이아웃 컴포넌트',
          'home/ - 홈페이지 섹션 컴포넌트',
          'auth/ - 인증 관련 폼 컴포넌트',
          'ui/ - shadcn/ui 기본 컴포넌트',
        ],
      },
      {
        heading: 'lib/',
        items: [
          'constants.ts - 네비게이션 링크, 사이드바 메뉴 등',
          'validations/ - Zod 검증 스키마',
          'stores/ - Zustand 상태 관리',
        ],
      },
    ],
  },
  {
    icon: Package,
    title: '기술 스택',
    description: '프로젝트에 사용된 주요 라이브러리',
    content: [
      {
        heading: '프레임워크',
        items: [
          'Next.js 16 - React 기반 풀스택 프레임워크',
          'React 19 - UI 라이브러리',
        ],
      },
      {
        heading: 'UI & 스타일링',
        items: [
          'Tailwind CSS - 유틸리티 기반 CSS',
          'shadcn/ui - 컴포넌트 라이브러리',
          'lucide-react - 아이콘 라이브러리',
          'next-themes - 다크모드 지원',
        ],
      },
      {
        heading: '폼 & 검증',
        items: [
          'react-hook-form - 폼 상태 관리',
          'zod - 타입 안전한 검증',
        ],
      },
      {
        heading: '상태관리',
        items: [
          'zustand - 가벼운 상태 관리',
        ],
      },
    ],
  },
  {
    icon: Code,
    title: '개발 가이드',
    description: '일반적인 개발 작업 방법',
    content: [
      {
        heading: '새로운 페이지 추가',
        items: [
          'app 폴더 내 원하는 경로에 page.tsx 생성',
          '공개 페이지: app/(public)/ 하위에 생성',
          '대시보드 페이지: app/(dashboard)/ 하위에 생성',
        ],
      },
      {
        heading: '컴포넌트 추가',
        items: [
          'components/ 폴더에 적절한 카테고리 폴더 생성',
          'PascalCase 네이밍 사용 (예: MyComponent.tsx)',
          'export function으로 명시적 export',
        ],
      },
      {
        heading: '환경 변수',
        items: [
          '.env.local 파일 생성',
          'NEXT_PUBLIC_* 접두사로 클라이언트에 노출',
          'Git에 .env.local은 커밋하지 않음',
        ],
      },
    ],
  },
  {
    icon: GitBranch,
    title: '배포',
    description: '프로덕션 배포 방법',
    content: [
      {
        heading: 'Vercel 배포 (권장)',
        items: [
          'Vercel에서 GitHub 연결',
          '자동 빌드 및 배포 구성',
          'Zero-config 배포 경험',
        ],
      },
      {
        heading: '셀프 호스팅',
        items: [
          'npm run build로 프로덕션 빌드 생성',
          'npm start로 프로덕션 서버 실행',
          'Node.js 런타임 환경 필요',
        ],
      },
    ],
  },
  {
    icon: BookOpen,
    title: '더 읽어보기',
    description: '추가 리소스 및 참고자료',
    content: [
      {
        heading: '공식 문서',
        items: [
          'Next.js 공식 문서',
          'React 공식 문서',
          'Tailwind CSS 문서',
          'shadcn/ui 컴포넌트 라이브러리',
        ],
      },
    ],
  },
]

export default function DocsPage() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              문서
            </Badge>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
              스타터킷 설명서
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              이 Next.js 스타터킷을 사용하기 위한 모든 정보를 제공합니다.
              설치부터 배포까지 단계별로 안내합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {docSections.map(({ icon: Icon, title, description, content }) => (
              <Card key={title} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 ml-13">
                  {content.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-sm text-foreground mb-2">
                        {section.heading}
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              질문이 있으신가요?
            </h2>
            <p className="text-muted-foreground mb-6">
              이 문서에 없는 정보는 공식 문서를 참고하거나,
              구현된 예제들을 직접 확인해보세요.
            </p>
            <Link
              href="/examples"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              예제 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
