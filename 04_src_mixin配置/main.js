// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 全局引入【混入】
import {mixin, mixin2} from './mixin'

// 关闭生产提示
Vue.config.productionTip = false

// 全局使用【混入】
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App)

})