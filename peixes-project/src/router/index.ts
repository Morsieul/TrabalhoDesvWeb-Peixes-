import { createRouter, createWebHistory } from 'vue-router'
import HomePeixes from '../pages/HomePeixes.vue'
import LoginPeixes from '../pages/LoginPeixes.vue'
import SignUpPeixes from '../pages/SignUpPeixes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePeixes
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPeixes
    }, 
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpPeixes
    }
  ]
})

export { router } 