'use client'

import { useAuthStore } from '@/lib/stores/auth-store'

export function useAuth() {
  const { user, isLoading, setUser, logout } = useAuthStore()

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    setUser,
    logout,
  }
}
