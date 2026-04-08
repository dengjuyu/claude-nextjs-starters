import Link from 'next/link'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import { MobileMenu } from './mobile-menu'
import { ThemeToggle } from '@/components/common/theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="font-bold text-lg text-foreground hover:text-primary transition-colors">
            {SITE_CONFIG.name.split(' ')[0]}
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 오른쪽 아이콘 영역 */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu links={NAV_LINKS} />
          </div>
        </div>
      </div>
    </header>
  )
}
