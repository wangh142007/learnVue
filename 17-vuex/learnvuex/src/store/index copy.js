import Vue from  'vue'
import Vuex from 'vuex'

import {INCREMENT} from './mutation-type'

// 1.安装插件
Vue.use(Vuex)

const modulesA = {
    state:{
        name: 'zhangsan'
    },
    mutations:{
        updateName(state,name){
            state.name = name
        }
    },
    getters:{
        fullName(state){
            return state.name + '111'
        },
        
        fullName1(state, getters){
            return getters.fullName + '222'
        }, 

        fullName2(state, getters, rootState){
            return getters.fullName1 + rootState.counter
        }

    },
    actions:{
        aUpdateName(context){
            console.log(context);
            setTimeout(()=>{
                context.commit('updateName', 'wangwu')
            }, 1000)
        }
    }
    

}

// 2.创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {id: 1, name: 'rose', age:18},
            {id: 2, name: 'kobe', age:24},
            {id: 3, name: 'james', age:30},
            {id: 4, name: 'curry', age:18}
        ],
        info: {
            name: 'kebo',
            age: 42,
            height: 1.98
        }
    },
    mutations: {
        //方法
        [INCREMENT](state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        incrementCount(state, count){
            console.log(count);
            // state.counter += count
            state.counter += count.count
        },
        addStudent(state, stu){
            state.students.push(stu)
        },
        updateInfo(state){
            state.info.name = 'wh'
            // state.info['address'] = '洛杉矶'
            // Vue.set(state.info, 'address', '洛杉矶')

            // 错误代码  模拟异步请求（mutations中不能进行异步操作）
            // setTimeout(()=>{
            //     state.info.name = 'wh'
            // }, 1000)

            // 该方法做不到响应式
            // delete state.info.age
            // 该方法可以做到响应式
            // Vue.delete(state.info, 'age')
        }
    },
    actions: {
        // context:上下文
        // aUpdateInfo(context, payload){
        //     // 模拟异步操作
        //     setTimeout(()=>{
        //         context.commit('updateInfo')
        //         console.log(payload.message);
        //         payload.success()
        //     }, 1000)
        // }

        aUpdateInfo(context, payload){
            // 模拟异步操作
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
               
                    context.commit('updateInfo');
                    console.log(payload);  
                    
                    resolve('1111111') 
                }, 1000)
            })
        }
    },
    getters: {
        powerCounter(state){
           return state.counter * state.counter
        },
        more20stu(state){
            return state.students.filter(s => {return s.age > 20})
        },
        more20stuLength(state, getters){
            return getters.more20stu.length
        },
        moreAgeStu(state){
            // return function (age) {
            //     return state.students.filter(s => {return s.age > age})
            // }

            return  age => {
                return state.students.filter(s => {return s.age > age})
            }
        }
    },

    modules: {
        a: modulesA
    }
})

// 3.导出store独享
export default store