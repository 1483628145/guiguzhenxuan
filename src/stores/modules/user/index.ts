// stores/counter.ts
import { defineStore } from 'pinia'
import type { loginFormData } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/token'

export const useUserStore = defineStore('counter', {
  // ① 状态（必须是函数）
  state: () => ({
    token: getToken() || '',
  }),

  // ② 计算属性（可选）
  getters: {},

  // ③ 行为（重点：action）
  actions: {
    // 登陆请求
    async loginReq(loginForm: loginFormData) {
      const { data } = await reqLogin(loginForm)
      this.token = data
      // 本地存储token
      setToken(data)
      // console.log(getToken())
    },
  },
})
