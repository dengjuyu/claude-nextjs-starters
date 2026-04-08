'use server'

import { loginSchema, signupSchema } from '@/lib/validations/auth'
import type { ActionResult } from '@/types'

export async function loginAction(formData: unknown): Promise<ActionResult<{ redirectUrl: string }>> {
  try {
    const validatedData = loginSchema.parse(formData)

    // TODO: 실제 인증 로직 구현
    // - DB에서 사용자 확인
    // - 비밀번호 검증
    // - 세션/토큰 생성

    return {
      success: true,
      data: {
        redirectUrl: '/dashboard',
      },
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      }
    }
    return {
      success: false,
      error: '로그인 실패',
    }
  }
}

export async function signupAction(formData: unknown): Promise<ActionResult<{ redirectUrl: string }>> {
  try {
    const validatedData = signupSchema.parse(formData)

    // TODO: 실제 회원가입 로직 구현
    // - 이메일 중복 확인
    // - 비밀번호 해싱
    // - 사용자 생성
    // - 확인 이메일 전송

    return {
      success: true,
      data: {
        redirectUrl: '/login',
      },
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      }
    }
    return {
      success: false,
      error: '회원가입 실패',
    }
  }
}

export async function logoutAction(): Promise<ActionResult<void>> {
  try {
    // TODO: 실제 로그아웃 로직
    // - 세션 삭제
    // - 쿠키 제거

    return {
      success: true,
      data: undefined,
    }
  } catch (error) {
    return {
      success: false,
      error: '로그아웃 실패',
    }
  }
}
