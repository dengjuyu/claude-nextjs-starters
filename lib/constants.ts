import type { NavLink, SidebarItem } from '@/types'

export const SITE_CONFIG = {
  name: 'Next.js Starter Kit',
  description: 'Next.js 16 + React 19 + Tailwind CSS + shadcn/ui 모던 웹 스타터킷',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
} as const

// 공개 영역 네비게이션
export const NAV_LINKS = [
  { label: '예제', href: '/examples' },
  { label: '문서', href: '/docs' },
] as const satisfies ReadonlyArray<NavLink>

// 대시보드 사이드바 메뉴
export const DASHBOARD_LINKS = [
  {
    label: '대시보드',
    href: '/dashboard',
  },
  {
    label: '설정',
    href: '/dashboard/settings',
  },
] as const satisfies ReadonlyArray<SidebarItem>
