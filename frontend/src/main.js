import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// import './mock'
import plugins from '@/plugins'


const app = createApp(App)

app.use(router)
  .use(store)
  .use(ViewUIPlus)
  .use(plugins) // 这里使用之前引入的插件
  //.use(piniaStore)
  //.use(i18n)
  //.use(directives)
  .mount('#app')
