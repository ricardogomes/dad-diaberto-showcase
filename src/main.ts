import './assets/main.css'

import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'
import data from '../data.json'

const app = createApp(App)

app.provide('data',data)

app.use(router)

app.mount('#app')
