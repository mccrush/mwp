import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'devel',
    component: () => import('../frames/Devel.vue')
  },
  {
    path: '/tz',
    name: 'tz',
    component: () => import('../frames/Tz.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../frames/Project.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../frames/Test.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../frames/Help.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
