import { createRouter, createWebHistory } from 'vue-router'
import HomePeixes from '../pages/HomePeixes.vue'
import LoginPeixes from '../pages/LoginPeixes.vue'
import SignUpPeixes from '../pages/SignUpPeixes.vue'
import HomePeixesUser from '../pages/HomePeixesUser.vue'
import { useUserStore } from '@/stores/userStore'
import { api } from '@/api'
import Error from '../pages/Error/GenericError.vue'
import NotFound from '@/pages/Error/NotFound.vue'
import SemPermissao from '@/pages/Error/SemPermissao.vue'
import ServerError from '@/pages/Error/ServerError.vue'
import ImagePage from '@/pages/ImagePage.vue'

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
      path: '/user/:username',
      name: 'User',
      component: HomePeixesUser
    },
    {
      path: '/image/:id',
      name: 'ImageDetail',
      component: ImagePage,
      props: true, // Permite passar o ID como propriedade para o componente
    },
    {
      path: '/erroNoServidor',
      name: '500',
      component: ServerError,
    },
    {
      path: '/semPermissao',
      name: '403',
      component: SemPermissao
    },
    {
      path: '/semPermissao',
      name: '401',
      component: SemPermissao
    },
    {
      path: '/notFound',
      name: '404',
      component: NotFound
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'error', 
      component: Error, 
    },
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