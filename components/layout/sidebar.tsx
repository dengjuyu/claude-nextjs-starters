'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useUIStore } from '@/lib/stores/ui-store'
import { DASHBOARD_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUIStore()

  return (
    <aside
      className={cn(
        'border-r bg-muted/50 transition-all duration-300 ease-in-out',
        sidebarOpen ? 'w-64' : 'w-16',
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {sidebarOpen && <span className="font-bold text-sm truncate">메뉴</span>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8 flex-shrink-0">
          <ChevronLeft className={cn('w-4 h-4 transition-transform', sidebarOpen ? '' : 'rotate-180')} />
        </Button>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        {DASHBOARD_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              'hover:bg-primary/10 text-foreground',
              sidebarOpen ? '' : 'justify-center',
            )}
            title={sidebarOpen ? '' : link.label}
          >
            {sidebarOpen && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
