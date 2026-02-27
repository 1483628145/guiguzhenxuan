import type { RouteRecordRaw } from 'vue-router'

// 定义用户模块state的类型
export interface userState {
  token: string | null
  menuRouters: RouteRecordRaw[]
}
