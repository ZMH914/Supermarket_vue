import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import("../views/home/Home.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Catgory = () => import("../views/catgory/Catgory.vue")
const Profile = () => import("../views/profile/Profile.vue")

const routes = [
  {
   path: '' ,
   component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catgory',
    component: Catgory
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
