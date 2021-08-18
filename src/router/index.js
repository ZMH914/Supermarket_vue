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
const Profile = () => import('../components/profile.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: '首页'
    },
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
    meta: {
      title: '关于'
    },
    component: About
  },
  {
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]

const router = new Router({
  routes,
  mode: 'history'
})


//全局守卫，路由跳转时改变参数
//router必须实例化才可调用函数
router.beforeEach((to,from,next) =>{
  //从from跳转到to
  document.title = to.matched[0].meta.title
  next()
  })


export default router
 
