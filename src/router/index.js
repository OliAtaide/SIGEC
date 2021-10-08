import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Transparencia from '../views/Transparencia.vue'
import Busca from '../views/Busca.vue'
import AdicionarVinculo from '../views/AdicionarVinculo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/adicionar-vinculo',
    name: 'AdicionarVinculo',
    component: AdicionarVinculo
  },
  {
    path: '/transparencia',
    name: 'Transparencia',
    component: Transparencia
  },
  {
    path: '/busca',
    name: 'Busca',
    component: Busca
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
