import { z } from 'zod'
import { AUTH_VALIDATION_MESSAGES } from '@/lib/constants/auth-messages'

// 로그인 폼 스키마
export const loginSchema = z.object({
  email: z.string().email(AUTH_VALIDATION_MESSAGES.EMAIL_INVALID).toLowerCase(),
  password: z
    .string()
    .min(8, AUTH_VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH)
    .regex(/[A-Z]/, AUTH_VALIDATION_MESSAGES.PASSWORD_UPPERCASE)
    .regex(/[0-9]/, AUTH_VALIDATION_MESSAGES.PASSWORD_NUMBER),
})

export type LoginInput = z.infer<typeof loginSchema>

// 회원가입 폼 스키마
export const signupSchema = z
  .object({
    name: z.string().min(2, AUTH_VALIDATION_MESSAGES.NAME_MIN_LENGTH).max(50),
    email: z.string().email(AUTH_VALIDATION_MESSAGES.EMAIL_INVALID).toLowerCase(),
    password: z
      .string()
      .min(8, AUTH_VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH)
      .regex(/[A-Z]/, AUTH_VALIDATION_MESSAGES.PASSWORD_UPPERCASE)
      .regex(/[0-9]/, AUTH_VALIDATION_MESSAGES.PASSWORD_NUMBER),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: AUTH_VALIDATION_MESSAGES.PASSWORD_MISMATCH,
    path: ['confirmPassword'],
  })

export type SignupInput = z.infer<typeof signupSchema>
