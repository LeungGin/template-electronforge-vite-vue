import { createApp } from 'vue'
import App from './views/App.vue'

const startup = () => {
  createApp(App).mount('#app')
}

export {
  startup
}