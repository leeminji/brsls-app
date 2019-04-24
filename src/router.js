import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: () => import(/* webpackChunkName: "about" */ './views/Analysis.vue'),
      children : [
        { path : 'alarm', component : () => import('./views/Alarm.vue')}
      ]
    },
    {
      path: '/role',
      name: 'role',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
