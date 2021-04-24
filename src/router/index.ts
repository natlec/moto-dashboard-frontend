import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login | EWB Moto Dashboard',
      metaTags: [
        {
          name: 'description',
          content: 'Dashboard for the Accessible Moto project run by Engineers Without Borders Australia (EWB).'
        }
      ]
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      title: 'EWB Moto Dashboard'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: {
      title: 'Settings | EWB Moto Dashboard'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
