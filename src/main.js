import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

//实例化Vuex
// const store = new Vuex.Store({
//   state:{
//     count:0,
//     fixedNum:0
//   },
//   mutations: {
//     countIncrease(state){
//       state.count++ 
//     },
//     fixedNumIncrease(state , v){
//       state.fixedNum = v
//     }
//   }
// }) 

Vue.prototype.$store = store

//全局导航守卫
router.beforeEach((to,from,next) => {
  // console.log('store.state:',store.state)
  // console.log("to:",to)
  // console.log('from:',from)
  if(store.state.userInfo || to.path === "/login"){
    next()
  }else{
    next({
      path:'/login'
    })
  }

  next()
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
