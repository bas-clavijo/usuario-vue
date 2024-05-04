import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsuarioNew from '../views/UsuarioNew.vue'
import UsuarioEdit from '../views/UsuarioEdit.vue'
import UsuarioView from '../views/UsuarioView.vue'
import TablaView from '../views/TablaView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/tabla',
    name: 'tabla',
    component: TablaView
  },

  {
    path: '/createUsuario',
    name: 'createUsuario',
    component: UsuarioNew
  },

  {
    path: '/editUsuario/:id',
    name: 'editUsuario',
    component: UsuarioEdit
  },

  {
    path: '/viewUsuario/:id',
    name: 'viewUsuario',
    component: UsuarioView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
