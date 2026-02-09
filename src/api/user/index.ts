//统一管理咱们项目用户相关的接口

import request from '@/utils/request'

import type { loginFormData, LoginResponse } from '@/api/user/type'

//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/acl/index/login',

  USERINFO_URL = '/acl/index/info',

  LOGOUT_URL = '/acl/index/logout',
}

/**
 * 登陆接口
 * *** */
export const reqLogin = (data: loginFormData) => {
  // 这个泛型第一个是结果第二个是data类型
  return request<loginFormData, LoginResponse>({
    url: API.LOGIN_URL,
    method: 'post',
    data: data,
  })
}
