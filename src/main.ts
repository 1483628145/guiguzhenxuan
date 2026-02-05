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

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 使用element-plus
app.use(ElementPlus)

// 注册svg全局组件
app.component('SvgIcon', SvgIcon)

// 测试环境变量是否能拿到
// 得到的是一个对象
// console.log(import.meta.env)

app.mount('#app')
