import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueDevTools(),
      // 全局svg组件注册
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 生成的 symbolId 规则：icon-子目录-文件名
        symbolId: 'icon-[name]',
      }),
    ],
    // 使用@来查找文件
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // 全局css样式注册
    css: {
      preprocessorOptions: {
        scss: {
          // ✅ 让每个 <style lang="scss"> 自动注入变量文件
          additionalData: `@use "@/styles/variable.scss" as *;`,
        },
      },
    },

    // ✅ 跨域：开发环境代理
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVER,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
      },
    },
  }
})
