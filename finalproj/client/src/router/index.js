import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//Defining paths
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/CreateComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../components/FAQComponent')
  }
]

//Constructor for router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router