import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LikeView from '../views/LikeView.vue'
import ProductDetail from '../components/ProductDetail.vue'

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
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetail,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
