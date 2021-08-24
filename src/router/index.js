import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import("../views/home/Home.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Catgory = () => import("../views/catgory/Catgory.vue")
const Profile = () => import("../views/profile/Profile.vue")

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
    component: Home
  },
  {
    path: '/catgory',
    meta: {
      title: '分类'
    },
    component: Catgory
  },
  {
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: Cart
  },
  {
    path: '/profile',
    meta: {
      title: '我的'
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
