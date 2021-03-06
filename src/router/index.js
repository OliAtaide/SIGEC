import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Transparencia from '../views/Transparencia.vue'
import Busca from '../views/Busca.vue'
import AdicionarVinculo from '../views/AdicionarVinculo.vue'
import Perfil from '../views/Perfil.vue'
import AutoCadastro from '../views/AutoCadastro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auto-cadastro',
    name: 'AutoCadastro',
    component: AutoCadastro
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
    path: '/:id/busca',
    name: 'Busca',
    component: Busca
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
