import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>import('@/views/Home/Home') 
const Category = () =>import('@/views/Category/Category') 
const Cart = () =>import('@/views/Cart/Cart') 
const Profile = () =>import('@/views/Profile/Profile') 

Vue.use(Router)

const routes =  [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  }
]

const router =  new Router({
  routes,
  mode: 'history'
})


export default router