<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button>按钮</button>
        <Cpn/>
    </div>
    
</template>

<script>

import Cpn from './Cpn.vue'

export default {
    name:"App",
    data() {
        return{
            message: "你好"
        }
    },
    components:{
        Cpn
    }
}
</script>

<style scoped>
    .title{
        color: green;
    }
</style>