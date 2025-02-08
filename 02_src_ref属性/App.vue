<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我弹出上方DOM元素</button>
    <MySchool ref="sch"/>
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue';

export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue!'
        }
    },
    components: {MySchool},
    methods: {
        showDOM() {
            // this 指代的是vc VueComponent
            // console.log(this)    // 获取App组件的实例对象vc
            // console.log(this.$refs.title)    // 获取h1 DOM元素
            // console.log(this.$refs.btn)      // 获取button DOM 元素
            console.log(this.$refs.sch)         // 获取子组件MySchool的实例对象vc
        }
    },

}
</script>