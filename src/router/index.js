import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutViewVue from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ViewProduct',
      name: 'ViewProduct',
      component: () => import('../views/ViewProduct.vue')
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },

  ]
})

export default router
