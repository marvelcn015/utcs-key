import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import StatusView from '@/views/StatusView.vue'
import ReturnView from '@/views/ReturnView.vue'
import BorrowView from '@/views/BorrowView.vue'
import ReturnRecord from '@/views/ReturnRecord.vue'
import ControlData from '@/views/ControlData.vue'
import FixItems from '@/views/FixItems.vue'

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
      path: '/record',
      name: 'record',
      component: ReturnRecord,
    },
    {
      path: '/control',
      name: 'control',
      component: ControlData,
    },
    {
      path: '/fix',
      name: 'fix',
      component: FixItems,
    },
  ],
})

export default router
