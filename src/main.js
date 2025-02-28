// 引入Vue
import Vue from 'vue'
// 引入vueResource
import vueResource from 'vue-resource'
// 引入App
import App from './App.vue'

// 引入store
import store from './store/index'

// 关闭生产提示
Vue.config.productionTip = false
Vue.use(vueResource)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this   // 安装全局事件总线
    }
})