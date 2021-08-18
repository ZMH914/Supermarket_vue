import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/home.vue'
// import About from '../components/about.vue'
// import User from '../components/\/User.vue'

//路由懒加载
const Home = () => import('../components/home.vue')
const About = () => import('../components/about.vue')
const User = () => import('../components/user.vue')
const News = () => import('../components/news.vue')
const Message = () => import('../components/message.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [           //嵌套路由
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message
        }
      ]
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
