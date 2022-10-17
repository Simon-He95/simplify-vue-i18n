import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { useLocale } from '../../src'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const messages = {
  zh: {
    message: {
      hello: '你好，世界',
    },
  },
  en: {
    message: {
      hello: 'hello world',
    },
  },
  jp: {
    message: {
      hello: 'こんにちは、世界',
    },
  },
}
const i18n = useLocale(messages)
app.use(router)
app.use(i18n)
app.mount('#app')
