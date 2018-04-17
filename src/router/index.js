import Vue from 'vue'
import Router from 'vue-router'
import ListHouse from '@/components/ListHouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListHouse',
      component: ListHouse
    }
  ]
})
