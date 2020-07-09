export default {
    login(state, v) {
        state.userInfo = v
    },

    countIncrease(state){
      state.count++ 
    },
    fixedNumIncrease(state , v){
      state.fixedNum = v
    },

    setMemberInfo( state , v){
      state.userStatus = v.userStatus
      state.vipLevel = v.vipLevel
    },



}