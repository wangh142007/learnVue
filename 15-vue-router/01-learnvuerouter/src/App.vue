<template>
  <div id="app">
    <!-- to 跳转的路径  tag 标签 replace 不能返回  active-class 标签属性重命名 -->
    
    <!-- <router-link to="/home" tag = "button" replace active-class = "active" >首页</router-link>
    <router-link to="/about" tag = "button" replace active-class = "active">关于</router-link> -->

    <!-- <router-link to="/home" tag = "button" replace >首页</router-link>
    <router-link to="/about" tag = "button" replace >关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <!-- <router-link :to="'/user/'+ userId">用户</router-link> -->
    <button @click="userClick">用户</button>

    <!-- <router-link to="/profile">关于</router-link> -->
    <!-- <router-link :to="{path: '/profile' , query: {name : 'wh' ,age: 18}}">档案</router-link> -->
    <button @click="profileClick">档案</button> 
    
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
          userId: 'zhangsan',
          imageURL: 'http://www.baidu.com/logo.png'
      }
  },
  methods: {
  //   homeClick(){
  //     //通过代码的方法修改路由 vue-router
  //     //push => pushState
  //     // this.$router.push('/home')
  //     this.$router.replace('/home')
  //   },
  //   aboutClick(){
  //     // this.$router.push('/about')
  //     this.$router.replace('/about')
  //   }
      profileClick(){
         this.$router.push({
           path: '/profile',
           query: {
             name: 'kobe',
             age: 22
           }
         })
      },
      userClick(){
        this.$router.push('/user/' + this.userId)
      }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* .router-link-active{
  color: #f00;
} */

.active{
  color: #f00;
}
</style>
