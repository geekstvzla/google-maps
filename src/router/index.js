import { createRouter, createWebHistory } from 'vue-router'
import Map from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Map
    }
  ]
})

export default router
