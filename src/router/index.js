import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Searchs = () => import('views/search/Searchs.vue')
const Profile = () => import('views/profile/Profile.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    component : Searchs
  },
  {
    path: '/cart',
    component : Cart
  },
  {
    path: '/category',
    component : Category
  },
  {
    path: '/profile',
    component : Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router