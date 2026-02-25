// 用户仓库
import { defineStore } from 'pinia'
import type { loginFormData } from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user'
import { getToken, setToken } from '@/utils/token'
import type { userToken } from '@/stores/modules/user/types/type'

export const useUserStore = defineStore('counter', {
  //  状态（必须是函数）
  state: (): userToken => {
    return {
      token: getToken() || null,
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
