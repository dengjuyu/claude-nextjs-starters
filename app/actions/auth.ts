'use server'

import { loginSchema, signupSchema } from '@/lib/validations/auth'
import { AUTH_ACTION_MESSAGES } from '@/lib/constants/auth-messages'
import type { ActionResult } from '@/types'

/**
 * 사용자 로그인을 처리합니다
 * @param formData - 검증할 로그인 데이터 (email, password)
 * @returns 성공/실패 결과 및 리다이렉트 URL
 */
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
      error: AUTH_ACTION_MESSAGES.LOGIN_ERROR,
    }
  }
}

/**
 * 사용자 회원가입을 처리합니다
 * @param formData - 검증할 회원가입 데이터 (name, email, password, confirmPassword)
 * @returns 성공/실패 결과 및 리다이렉트 URL
 */
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
      error: AUTH_ACTION_MESSAGES.SIGNUP_ERROR,
    }
  }
}

/**
 * 사용자 로그아웃을 처리합니다
 * @returns 성공/실패 결과
 */
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
      error: AUTH_ACTION_MESSAGES.LOGOUT_ERROR,
    }
  }
}
