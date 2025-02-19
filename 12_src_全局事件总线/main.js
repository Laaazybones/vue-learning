// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// 模拟事件总线：创建一个用于组件通信数据传递的vc
// 根据原型链的原理，一切组件通过this.x都会层层向上查找实例对象身上的x属性，直到找到Vue的原型对象身上
// 因此我们在Vue的原型对象身上设置一个属性x，作为所有组件都能访问的属性
// 普通的对象身上是没有$on, $off, $once, $emit的，只有vc和vm身上才有这些属性，
// 因此此处的x需要定义为一个vc或vm
/* const Demo = Vue.extend({})
const demoVC = new Demo()
Vue.prototype.x = demoVC */

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this   // 标准的安装全局事件总线的写法
    }
})