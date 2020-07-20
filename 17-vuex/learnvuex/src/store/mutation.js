import {INCREMENT} from './mutation-type';

export default{
    
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
}