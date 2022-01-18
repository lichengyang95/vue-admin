import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const state = {
    //用于存放数据
    login:{}
}
const mutations = {
    //用于存放直接进行的事件
    SET_ADD_LOGIN(state,data){
        state.login = data
    }
}
const actions = {
    //用于存放需要进一步判断的事件
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})