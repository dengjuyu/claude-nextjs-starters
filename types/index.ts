// 네비게이션 링크 타입
export interface NavLink {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  external?: boolean
}

// 사이드바 아이템 타입
export interface SidebarItem extends NavLink {
  children?: ReadonlyArray<NavLink>
  active?: boolean
}

// 사용자 타입
export interface User {
  id: string
  email: string
  name: string
  avatarUrl: string | null
}

// 서버 액션 반환 타입
export type ActionResult<T = unknown> =
  | { success: true; data: T }
  | { success: false; error: string }
