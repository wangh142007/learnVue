export default{
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