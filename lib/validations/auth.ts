import { z } from 'zod'

// 로그인 폼 스키마
export const loginSchema = z.object({
  email: z.string().email('올바른 이메일을 입력해주세요').toLowerCase(),
  password: z
    .string()
    .min(8, '비밀번호는 8자 이상이어야 합니다')
    .regex(/[A-Z]/, '대문자를 포함해야 합니다')
    .regex(/[0-9]/, '숫자를 포함해야 합니다'),
})

export type LoginInput = z.infer<typeof loginSchema>

// 회원가입 폼 스키마
export const signupSchema = z
  .object({
    name: z.string().min(2, '이름은 2자 이상이어야 합니다').max(50),
    email: z.string().email('올바른 이메일을 입력해주세요').toLowerCase(),
    password: z
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다')
      .regex(/[A-Z]/, '대문자를 포함해야 합니다')
      .regex(/[0-9]/, '숫자를 포함해야 합니다'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  })

export type SignupInput = z.infer<typeof signupSchema>
