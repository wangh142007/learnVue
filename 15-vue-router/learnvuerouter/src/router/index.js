//配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'

// 1.通过vue.use(插件)，安装插件
Vue.use(Router)

const routes = 
  [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
    ,
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    }
  ]



// 3.将router对象传入vue实例
// 2.创建Router对象
export default new Router({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

