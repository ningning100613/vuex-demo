<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <span>count:{{this.$store.state.count}}</span>
    <button @click="countIncrease">count自增</button>

    <span>fixedNum:{{this.$store.state.fixedNum}}</span>
    <button @click="fixedNumIncrease">fixedNum固定值</button>


    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  computed: {
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    countIncrease() {
      this.$store.commit("countIncrease")
    },
    fixedNumIncrease() {
      const v = 100
      this.$store.commit("fixedNumIncrease",v)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  border: 1px solid #eeeeee;
}
</style>
