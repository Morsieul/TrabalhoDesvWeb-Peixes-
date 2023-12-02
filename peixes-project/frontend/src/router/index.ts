import { createRouter, createWebHistory } from 'vue-router'
import HomePeixes from '../pages/HomePeixes.vue'
import LoginPeixes from '../pages/LoginPeixes.vue'
import SignUpPeixes from '../pages/SignUpPeixes.vue'
import HomePeixesUser from '../pages/HomePeixesUser.vue'
import { useUserStore } from '@/stores/userStore'
import { api } from '@/api'

const routes = [
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
    },
    {
      path: '/user/:id',
      name: 'User',
      component: HomePeixesUser
    }
  ]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const userStore = useUserStore()
  const user = userStore.user.username
  const papel = userStore.user.role

  console.log(`quero ir pra ${to.path}. É protegida? ${to.meta.requireAuth}. Eu sou o ${user} com o papel ${papel}`)
  if(to.meta.requireAuth && user == null) {
    return { path: "/login" }
  }
})

api.interceptors.response.use(response => response, error => {
  const { response } = error
  if(response && response.status != 400) {
    router.push({
      name: `${response.status}`
    })
  } else {
    return Promise.reject(error)
  }
})