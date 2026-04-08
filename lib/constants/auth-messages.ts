// 인증 관련 검증 메시지 상수

export const AUTH_VALIDATION_MESSAGES = {
  // 이메일
  EMAIL_INVALID: '올바른 이메일을 입력해주세요',

  // 비밀번호
  PASSWORD_MIN_LENGTH: '비밀번호는 8자 이상이어야 합니다',
  PASSWORD_UPPERCASE: '대문자를 포함해야 합니다',
  PASSWORD_NUMBER: '숫자를 포함해야 합니다',
  PASSWORD_MISMATCH: '비밀번호가 일치하지 않습니다',

  // 이름
  NAME_MIN_LENGTH: '이름은 2자 이상이어야 합니다',
} as const

export const AUTH_ACTION_MESSAGES = {
  LOGIN_SUCCESS: '로그인되었습니다',
  LOGIN_ERROR: '로그인 실패',
  SIGNUP_SUCCESS: '회원가입되었습니다. 로그인 페이지로 이동합니다.',
  SIGNUP_ERROR: '회원가입 실패',
  LOGOUT_ERROR: '로그아웃 실패',
  GENERIC_ERROR: '요청 처리 중 오류가 발생했습니다',
} as const