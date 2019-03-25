import Router from 'vue-router'
import Index from './pages/Index'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

export default new Router({
  base: '/tiptap-vuetify/',
  routes
})
