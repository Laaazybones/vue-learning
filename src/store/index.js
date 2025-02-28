// 引入Vuex
import Vuex from 'vuex'
// 引入Vue
import Vue from 'vue'
// 使用Vuex
Vue.use(Vuex)

// 定义actions对象，用于响应组件中用户的行为
const actions = {}
// 定义mutations对象，用于修改state中的数据
const mutations = {}
// 定义state对象，用于存储具体的数据
const state = {}

// 定义store对象，并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state
})