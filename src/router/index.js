import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostDetail from '@/components/PostDetail'
import NewPost from '@/components/NewPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new_post',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/:post_id',
      name: 'PostDetail',
      component: PostDetail
    }
  ]
})
