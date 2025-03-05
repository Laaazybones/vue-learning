// 引入Vuex
import Vuex from 'vuex'
// 引入Vue
import Vue from 'vue'
// 使用Vuex
Vue.use(Vuex)

// 定义actions对象，用于响应组件中用户的行为
const actions = {
    /* increment(context, value){
        console.log('actions中的increment被调用了')
        context.commit('INCREMENT', value)
    },
    decrement(context, value){
        console.log('actions中的decrement被调用了')
        context.commit('DECREMENT', value)
    }, */
    incrementOdd(context, value){
        console.log('actions中的incrementOdd被调用了')
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait(context, value){
        console.log('actions中的incrementWait被调用了')
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500);
    }

}
// 定义mutations对象，用于修改state中的数据
// mutaions 中一般不写业务逻辑，只对数据进行操作
const mutations = {
    INCREMENT(state, value){
        console.log('mutations中的INCREMENT被调用了')
        state.sum += value
    },
    DECREMENT(state, value){
        console.log('mutations中的DECREMENT被调用了')
        state.sum -= value
    }

}
// 定义state对象，用于存储具体的数据
const state = {
    sum: 0, // 求和
}

// 定义store对象，并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state
})