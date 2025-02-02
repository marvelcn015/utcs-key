import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BorrowView from '@/views/BorrowView.vue'
import ExternalBorrowView from '@/views/ExternalBorrowView.vue'
import ReturnView from '@/views/ReturnView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      redirect: '/home',
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/borrow',
      name: 'borrow',
      component: BorrowView,
    },
    {
      path: '/externalborrow',
      name: 'externalborrow',
      component: ExternalBorrowView,
    },
    {
      path: '/return',
      name: 'return',
      component: ReturnView,
    },
  ],
})

export default router
