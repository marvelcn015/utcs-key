import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import StatusView from '@/views/StatusView.vue'
import ReturnView from '@/views/ReturnView.vue'
import BorrowView from '@/views/BorrowView.vue'
import AdminView from '@/views/AdminView.vue'
import KeyView from '@/views/KeyView.vue'

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
      path: '/return',
      name: 'return',
      component: ReturnView,
    },
    {
      path: '/status',
      name: 'status',
      component: StatusView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/admin_key',
      name: 'admin_key',
      component: KeyView,
    },
  ],
})

export default router
