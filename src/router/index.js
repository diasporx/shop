import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LikeView from '../views/LikeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      breadcrumbLabel: 'Главная',
    },
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: LikeView,
    meta: {
      breadcrumbLabel: 'Избранное',
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
