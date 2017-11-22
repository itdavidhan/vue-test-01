import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Books from '@/pages/Books'
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
      component: Books
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    }
  ]
})
