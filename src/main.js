import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/routes/index.js'

// Components
import Page from '@/components/Page.vue'
import {Icon} from '@iconify/vue'

const app = createApp(App);

//VueRouter import
app.use(router);

// Global Components
app.component('Page', Page)
app.component('Icon', Icon)

app.mount('#app');