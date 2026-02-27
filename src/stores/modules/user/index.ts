// 用户仓库
import { defineStore } from 'pinia'
import type { loginFormData } from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user'
import { getToken, setToken } from '@/utils/token'
import type { userState } from '@/stores/modules/user/types/type'

import { constantRoute } from '@/router/routers'
export const useUserStore = defineStore('counter', {
  //  状态（必须是函数）
  state: (): userState => {
    return {
      // 用户token
      token: getToken() || null,
      // 路由表
      menuRouters: constantRoute,
    }
  },

  //  计算属性（可选）
  getters: {},

  //  行为（重点：action）
  actions: {
    // 登陆请求
    async loginReq(loginForm: loginFormData) {
      const res = await reqLogin(loginForm)
      if (res.code === 200) {
        // 存储在pinia
        this.token = res.data
        // 本地存储token
        setToken(this.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
  },
})
