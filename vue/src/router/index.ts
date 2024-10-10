import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import CompetitionView from '@/views/CompetitionView.vue'
import LoginView from '@/views/LoginView.vue'
import AccountView from '@/views/AccountView.vue'
import NotFoundVue from '@/views/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'competittions',
    component: CompetitionView
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  {
    path: '/login',
    name: 'login',
    component: () => LoginView
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundVue
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
