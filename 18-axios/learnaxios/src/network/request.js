import axios from 'axios'

export function request(config, success, failure){
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://106.54.54.237:8000/api/mn/',
        timeout: 5000
    })

    // 2.axios拦截器
    // 2.1请求拦截器
    instance.interceptors.request.use(config =>{
        // console.log(config);
        // 1.比如config中的一些信息不符合服务器的要求

        // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

        // 3.某些网络请求（比如登陆（token）），必须携带一些特殊的信息

        return config
    }, err => {
        //  console.log(err);
    })

    // 2.2 响应拦截器
    instance.interceptors.response.use(res =>{
        console.log(res);
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
          
    
    // 3.方法三：封装promies
    // return new Promise((resolve, reject) =>{
    //     const instance = axios.create({
    //         baseURL: 'http://106.54.54.237:8000/api/mn/',
    //         timeout: 5000
    //     })

    //     //发送真正的网络请求
    //     instance(config)
    //         .then(res => {
    //             resolve(res)
    //         })
    //         .catch(err =>{
    //             reject(err)
    //         })    
    // })


    
    // 2.方法二：封装函数   
    // // 1.创建axios的实例
    // const instance = axios.create({
    //     baseURL: 'http://106.54.54.237:8000/api/mn/',
    //     timeout: 5000
    // })

    // //发送真正的网络请求
    // instance(config.baseConfig)
    //     .then(res => {
    //         config.success(res)
    //         console.log(res);
    //     })
    //     .catch(err =>{
    //         config.failure(err)
    //         console.log(err);
    //     })    


    // 1.方法一：普通分装
    //     // 1.创建axios的实例
    // const instance = axios.create({
    //     baseURL: 'http://106.54.54.237:8000/api/mn/',
    //     timeout: 5000
    // })

    // //发送真正的网络请求
    // instance(config)
    //     .then(res => {
    //         success(res)
    //         console.log(res);
    //     })
    //     .catch(err =>{
    //         failure(err)
    //         console.log(err);
    //     })    
}