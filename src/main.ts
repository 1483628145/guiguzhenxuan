import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// element-plus 引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局注册SVG组件
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

// 全局引入sass默认样式
import '@/styles/index.scss'

const app = createApp(App)

// 创建pinia
app.use(createPinia())
app.use(router)

// 使用element-plus
app.use(ElementPlus)

// 注册svg全局组件
app.component('SvgIcon', SvgIcon)

app.mount('#app')
