import { createRouter, createWebHashHistory } from 'vue-router'
import UnihubHome from '../views/UnihubHome.vue'
import LogIn from '../views/LogIn.vue'
import NewRegister from '../views/NewRegister.vue'
import UserHome from '../views/UserHome.vue'
import HomeLoading from '../views/HomeLoading.vue'
import FileManager from '../views/FileManager.vue'
import DdlManager from '../views/DdlManager.vue'
import FileHome from '../views/FileHome.vue'
import NewHome from '../views/NewHome.vue'

const routes = [
  {path: '/', name: 'unihubhome',component: UnihubHome},
  {path: '/home/login', name: 'login', component: LogIn},
  {path: '/home/newregister', name: 'newregister', component : NewRegister},
  {path: '/home/userhome', name: 'userhome', component : UserHome},
  {path: '/home/homeloading', name: 'homeloading', component : HomeLoading},
  {path: '/home/file-manager', name: 'file-manager', component : FileManager},
  {path: '/home/ddl-manager', name: 'ddl-manager', component : DdlManager},
  {path: '/home/file-home', name: 'file-home', component : FileHome},
  {path: '/home/newhome', name: 'newhome', component : NewHome},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
