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
import { signupSchema, type SignupInput } from '@/lib/validations/auth'
import { AUTH_ACTION_MESSAGES } from '@/lib/constants/auth-messages'
import { signupAction } from '@/app/actions/auth'
import Link from 'next/link'

/**
 * 회원가입 폼 컴포넌트
 * 이름, 이메일, 비밀번호로 새 사용자를 생성합니다
 */
export function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(data: SignupInput) {
    setIsLoading(true)
    try {
      const result = await signupAction(data)

      if (!result.success) {
        toast.error(result.error)
        return
      }

      toast.success(AUTH_ACTION_MESSAGES.SIGNUP_SUCCESS)
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
          name="name"
          render={({ field: fieldProps }) => (
            <FormItem>
              <Label htmlFor="name">이름</Label>
              <FormControl>
                <Input id="name" placeholder="홍길동" disabled={isLoading} {...fieldProps} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field: fieldProps }) => (
            <FormItem>
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
              <FormControl>
                <Input id="confirmPassword" type="password" placeholder="••••••••" disabled={isLoading} {...fieldProps} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? '회원가입 중...' : '회원가입'}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          이미 계정이 있으신가요?{' '}
          <Link href="/login" className="text-primary hover:underline">
            로그인
          </Link>
        </p>
      </form>
    </Form>
  )
}
