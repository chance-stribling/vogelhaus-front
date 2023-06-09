import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateHausView from '../views/CreateHausView.vue'
import HausView from '../views/HausView.vue'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hauses',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createHaus',
      name: 'createHaus',
      component: CreateHausView
    },
    {
      path: '/',
      name: 'landing',
      component: LandingView
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
