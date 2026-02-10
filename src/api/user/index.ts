//统一管理咱们项目用户相关的接口

import request from '@/utils/request'

import type { loginFormData, LoginResponse,UserInfo } from '@/api/user/type'

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
  // 第一个是请求数据类型第二个是接口响应结果类型 
  return request<loginFormData, LoginResponse>({
    url: API.LOGIN_URL,
    method: 'post',
    data: data,
  })
}

/**
 * 获取用户信息
 * */
export const reqUserInfo = () => {
  // UserInfo 用户信息响应结果 
  return request<UserInfo>({
    url: API.USERINFO_URL,
    method: 'get',
  })
}

