import Vue from 'vue'
import Router from 'vue-router'

const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const Home = () =>import('@/views/home/Home') 
const Category = () =>import('@/views/category/Category') 
const Cart = () =>import('@/views/cart/Cart') 
const Profile = () =>import('@/views/profile/Profile') 

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