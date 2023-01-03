import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persistedstate'
import imgLazy from '@utils/lazyload'
import svgIcon from '@/components/BaseSvgIcon.vue'
import naive from './naive'
import App from './App.vue'
import I18n from './lang/i18n'
import router from './router/index'
import 'normalize.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register' // eslint-disable-line

const pinia = createPinia()
pinia.use(piniaPluginPersist)
const app = createApp(App)

imgLazy(app)
app.use(I18n)
app.use(pinia)
app.use(naive)
app.component('SvgIcon', svgIcon)
app.use(router)
app.mount('#app')
