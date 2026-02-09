// 用户仓库
import { defineStore } from 'pinia'
import type { loginFormData } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/token'
import { ElMessage } from 'element-plus'

export const useUserStore = defineStore('counter', {
  //  状态（必须是函数）
  state: () => ({
    token: getToken() || '',
  }),

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
        setToken(res.data)
        // 登陆成功提示
        ElMessage({
          message: '登陆成功！',
          type: 'success',
        })
      } else {
        // 登陆失败提示
        ElMessage({
          message: res.message,
          type: 'error',
        })
      }
    },
  },
})
