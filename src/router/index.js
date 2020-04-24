import Vue from 'vue'
import Router from 'vue-router'

import HOME from '@/views/HOME/Index.vue'
import ABOUT from '@/views/ABOUT/Index.vue'
import Profile from '@/views/Profile/Index.vue'
import Hero from '@/views/Hero/Index.vue'
import ERROR from '@/views/ERROR/Index.vue'

Vue.use(Router)

// Configuración rutas
const routes = [
  {
    path: '/',
    name: 'HOME',
    component: HOME
  },
  {
    path: '/profile/:battleTag',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile/:battleTag/hero/:heroId',
    name: 'Hero',
    component: Hero
  },
  {
    path: '/about',
    name: 'ABOUT',
    component: ABOUT
  },
  {
    path: '/error',
    name: 'ERROR',
    component: ERROR
  },
  {
    path: '*',
    redirect: { name: 'HOME' }
  }
]

const router = new Router({
  routes
})

export default router
