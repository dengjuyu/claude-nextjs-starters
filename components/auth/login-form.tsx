'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { AUTH_ACTION_MESSAGES } from '@/lib/constants/auth-messages'
import { loginAction } from '@/app/actions/auth'
import Link from 'next/link'

/**
 * 로그인 폼 컴포넌트
 * 이메일과 비밀번호로 사용자를 인증합니다
 */
export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginInput) {
    setIsLoading(true)
    try {
      const result = await loginAction(data)

      if (!result.success) {
        toast.error(result.error)
        return
      }

      toast.success(AUTH_ACTION_MESSAGES.LOGIN_SUCCESS)
      router.push(result.data.redirectUrl)
    } catch {
      toast.error(AUTH_ACTION_MESSAGES.GENERIC_ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field: fieldProps }) => (
            <FormItem>
              <Label htmlFor="email">이메일</Label>
              <FormControl>
                <Input id="email" type="email" placeholder="user@example.com" disabled={isLoading} {...fieldProps} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field: fieldProps }) => (
            <FormItem>
              <Label htmlFor="password">비밀번호</Label>
              <FormControl>
                <Input id="password" type="password" placeholder="••••••••" disabled={isLoading} {...fieldProps} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? '로그인 중...' : '로그인'}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            회원가입
          </Link>
        </p>
      </form>
    </Form>
  )
}
