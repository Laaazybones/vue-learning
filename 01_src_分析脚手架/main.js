/* main.js 是整个项目的入口文件 */
// 引入Vue(默认引入的是运行时vue.runtime.esm.js，省略了vue中的模板解析器) ES Module
import Vue from 'vue'

/* 

  关于不同版本的Vue：
  1. vue.js与vue.runtime.xxx.js的区别：
    （1） vue.js是完整版vue，包含：核心功能+模板解析器
     (2) vue.runtime.xxx.js是运行版vue，只包含：核心功能，没有模板解析器

  2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数处理接收到的createElement函数去指定具体内容。
    子组件中的<template>标签由package.json中的vue-template-compiler编译处理
*/


// 引入App组件，他是所有子组件的父组件
import App from './App.vue'

// 关闭Vue的开发者提示
Vue.config.productionTip = false

let person  = {name: 'tom', age: 16}

// 创建Vue实例
new Vue({
  // 挂载容器，
  el: '#app',

  // template: `<h1>你好</h1>`,
  // 该行代码的作用是将App组件放入容器，当不使用render函数时，引入的运行时vue无法渲染模板
  render: h => h(App),
  // render 完整写法：
 /*  render(createElement){
    return createElement('h1', 'Hello world!')
  } */
})
// }).$mount('#app')
