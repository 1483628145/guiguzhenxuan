// src/utils/token.ts
const TOKEN_KEY = 'TOKEN_KEY'

/**
 * 设置 token
 * @param token string
 */
export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

/**
 * 获取 token
 * @returns string | null
 */
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

/**
 * 删除 token
 */
export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}
