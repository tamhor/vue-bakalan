import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile/Profile.vue'
import ContentProfile from '../views/Profile/Content.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/profile',
  name: 'profile',
  component: Profile
}, {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}, {
  path: '/content/:index',
  name: 'content',
  component: ContentProfile
}, {
  path: '/transparansi',
  name: 'transparansi',
  component: () => import('@/components/Content/Transparansi.vue')
}, {
  path: '/lembaga',
  name: 'lembaga',
  component: () => import('@/components/Content/Lembaga.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
