import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'devel',
  //   component: () => import('../frames/Devel.vue')
  // },
  // {
  //   path: '/tz',
  //   name: 'tz',
  //   component: () => import('../frames/Tz.vue')
  // },
  // {
  //   path: '/project',
  //   name: 'project',
  //   component: () => import('../frames/Project.vue')
  // },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: () => import('../frames/Test.vue')
  // },
  // {
  //   path: '/help',
  //   name: 'help',
  //   component: () => import('../frames/Help.vue')
  // },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // 3
  if (requiresAuth) {
    if (currentUser) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

export default router
