import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/practice-one',
      name: 'practice-one',
      component: () => import('../views/PracticeOneView.vue')
    },
    {
      path: '/text01',
      name: 'text01',
      component: () => import('../views/text01.vue')
    },
    {
      path: '/text02',
      name: 'text02',
      component: () => import('../views/text02.vue')
    },
    {
      path: '/text03',
      name: 'text03',
      component: () => import('../views/text03.vue')
    },
  ],
});

export default router;
