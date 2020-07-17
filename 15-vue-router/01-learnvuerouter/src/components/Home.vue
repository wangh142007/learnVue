<template>
    <div>
        <h2>我是首页</h2>
        <p>我是首页内容</p>

        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>

        <h2>{{message}}</h2>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            message: '你好',
            path: '/home/news'
        }
    },
    methods: {

    },
    created() {
        console.log('home created');
    },
    mounted() {
        console.log('mounted');
    },
    updated() {
        console.log('updated');
    },
    destroyed() {
        console.log('destroyed');
    },
    activated () {
        console.log('activated');
        this.$router.push(this.path)
    },
    deactivated () {
        console.log('deactivated');
    },
    beforeRouteLeave( to, from, next){
        this.path = this.$route.path;
        next()
    } 
}
</script>

<style scoped>

</style>