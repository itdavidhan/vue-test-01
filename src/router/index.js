import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import Chart from '@/pages/Chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    }
  ]
})
