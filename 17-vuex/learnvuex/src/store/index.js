import Vue from  'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import actions from './actions'
import getters from './getters'
import modulesA from './module/moduleA'

// 1.安装插件
Vue.use(Vuex)

const state ={
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
}

// 2.创建对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: modulesA
    }
})

// 3.导出store独享
export default store