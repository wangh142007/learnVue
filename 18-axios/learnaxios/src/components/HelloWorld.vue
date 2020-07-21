<template>
    <h2>{{result}}</h2>
</template>

<script>

import axios from 'axios'

export default {
    name: 'HelloWorld',
    data(){
        return{
            result: ''
        }
    },
    // created(){
    //     axios({
    //         url: 'http://106.54.54.237:8000/api/mn/home/multidata'
    //     }).then(res =>{
    //         this.result = res
    //     })
    // }
}
</script>

<style  scoped>

</style>