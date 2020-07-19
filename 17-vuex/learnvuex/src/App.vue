<template>
  <div id="app">

    <h2>--------app内容---------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h2>--------app内容：getters相关内容---------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>

    <h2>--------hello vuex内容---------</h2>
    <hello-vuex />
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data(){
    return{ 
      message:'我是app组件'
    }
  },
  methods: {
    addition() {
      console.log('addition');
      this.$store.commit('increment')
    },
    subtraction() {
      console.log('subtraction');
      this.$store.commit('decrement')
    }
  }
  
}
</script>

<style>
</style>
