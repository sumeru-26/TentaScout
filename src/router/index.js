import { createMemoryHistory, createRouter } from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Entry.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
