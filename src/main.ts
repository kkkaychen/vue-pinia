import './assets/main.css'

import { createApp } from 'vue'
// 第一步：引入 pinia
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 第二步：創建 pinia，建議在 createApp 之後創建
const pinia = createPinia()

// 第三步：安裝 pinia
app.use(pinia)
app.use(router)

app.mount('#app')
