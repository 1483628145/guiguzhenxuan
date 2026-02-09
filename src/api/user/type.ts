// 用户登陆接口
export interface loginFormData {
  username: string
  password: string
}

// 用户登陆响应结果
export interface LoginResponse {
  code: number
  message: string
  data: string // token
}
