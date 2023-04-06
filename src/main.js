import { createApp } from 'vue'

import App from './App.vue'
import './index.css'
import PrimeVue from 'primevue/config';
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.mount('#app')

// createApp(App).mount('#app').use(PrimeVue).use(router);
