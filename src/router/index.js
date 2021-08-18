import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'
import User from '../components/\/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    }
  ],
  mode: 'history'
})
