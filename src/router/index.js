import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile/Profile.vue'

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
  path: '/transparansi',
  name: 'transparansi',
  component: () => import('../views/Profile/Content/Transparansi.vue')
}, {
  path: '/lembaga',
  name: 'lembaga',
  component: () => import('../views/Profile/Content/Lembaga.vue')
}, {
  path: '/penduduk',
  name: 'penduduk',
  component: () => import('../views/Profile/Content/Penduduk/Penduduk.vue'),
  children: [{
    path: '/datapenduduk',
    name: 'datapenduduk',
    component: () => import('../views/Profile/Content/Penduduk/DataPenduduk.vue')
  }, {
    path: '/',
    name: 'chartpenduduk',
    component: () => import('../views/Profile/Content/Penduduk/ChartPenduduk.vue')
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
