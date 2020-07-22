import axios from 'axios'

export function request(config, success, failure){
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://106.54.54.237:8000/api/mn',
        timeout: 5000
    })

    // 2.axios拦截器
    // 2.1请求拦截器
    instance.interceptors.request.use(config =>{
        return config
    }, err => {
        //  console.log(err);
    })

    // 2.2 响应拦截器
    instance.interceptors.response.use(res =>{
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
          
}