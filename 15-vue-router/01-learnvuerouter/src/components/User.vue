<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户界面</p>
        <p>{{userId}}</p>
        <p>{{$route.params.userId}}</p>
    </div>
</template>

<script>
export default {
    name:"User",
    computed: {
        userId() {
            return this.$route.params.userId
        }
    },
    created() {
        console.log('User created');
    }
}
</script>

<style scoped>

</style>