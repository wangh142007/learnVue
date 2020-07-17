//配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'


// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'


const Home = () => import('@/components/Home')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')

const About = () => import('@/components/About')
const User = () => import('@/components/User')

const Proflie = () => import('@/components/Profile')

// 1.通过vue.use(插件)，安装插件
Vue.use(Router)

const routes = 
  [
    {
      path: '',
      //redirect 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '关于'
      },
      beforeEnter:(to, from, next) =>{
        console.log('about beforeEnter');
        next()
      }
    }
    ,
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      name: 'Proflie',
      component: Proflie,
      meta: {
        title: '档案'
      }
    }
  ]



// 2.创建Router对象
const router = new Router({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//前置首位 （guard）
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log('+++');
  next()
})

//后置钩子（hook）
router.afterEach((to, from) =>{
  // console.log('---');
})

// 3.将router对象传入vue实例
export default  router