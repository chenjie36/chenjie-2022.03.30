import Vue from 'vue'
import VueRouter from 'vue-router'
// import AnimateEx from '../views/AnimateEx.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: AnimateEx
  // },
  {
    path: '/animateEx',
    name: 'animateEx',
    component: () => import(/* webpackChunkName: "about" */ '../views/AnimateEx.vue')
  },
  {
    path: '/staticPage',
    name: 'staticPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/StaticPage.vue')
  },
  {
    path: '/dynamicPage',
    name: 'dynamicPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/DynamicPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
