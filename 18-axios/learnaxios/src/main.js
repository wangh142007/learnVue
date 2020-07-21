import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// // 1.基本使用
// axios({
//   url: 'http://106.54.54.237:8000/api/mn/home/multidata',
//   method: 'get'
// }).then(res =>{
//   console.log(res);
// })

// axios({
//   url: 'http://106.54.54.237:8000/api/mn/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(res =>{
//   console.log(res);
// })

// 3.使用全局的配置行进网络请求
// axios.defaults.baseURL = 'http://106.54.54.237:8000/api/mn'
// axios.defaults.timeout = 5000
// // 2.axios发送并发请求
// axios.all([axios({
//   url: '/home/multidata'
// }),axios({
//   url: '/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// })])
//   // .then(results =>{
//   //   console.log(results);
//   // })
//   .then(axios.spread((res1, res2)=>{
//     console.log(res1);
//     console.log(res2);
//   }))

// 4.创建对应的axios的实例
// const instance1 =  axios.create({
//   baseURL: 'http://106.54.54.237:8000/api/mn',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res =>{
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// })

// 5.封装request模块
import {request} from './network/request'


// 1.方法一：普通分装
// request({
//   url: '/home/multidata'
// }, res =>{
//   console.log(res);
// }, err => {
//   console.log(err);
// })


// 2.方法二：封装函数
// request({
//   baseConfig:{
//     url: '/home/multidata'
//   },
//   success:function (res) {

//   },
//   failure: function (err){

//   }
// })


// 3.方法三：封装promies
// request({
//   url: '/home/multidata'
// }).then(res =>{
//   console.log(res);
// }).catch(err =>{
//   console.log(err);
// })


// 4.方法四
request({
  url: '/home/multidata'
}).then(res =>{
  // console.log(res);
}).catch(err =>{
  // console.log(err);
})
