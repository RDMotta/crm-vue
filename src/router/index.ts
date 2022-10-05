import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: Login
  } 
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token-app')
    if (token) {
      return next()
    }

    return next('/login')
  }
  next()
})

export default router

