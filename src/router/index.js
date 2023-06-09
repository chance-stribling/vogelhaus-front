import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateHausView from '../views/CreateHausView.vue'
import HausView from '../views/HausView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createHaus',
      name: 'createHaus',
      component: CreateHausView
    },
    {
      path: '/haus/:id',
      name: 'haus',
      component: HausView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
