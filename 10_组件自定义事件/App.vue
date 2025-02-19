<template>
  <div class="app">
    <h1>{{ msg }}, 学生姓名为：{{ studentName }}</h1>

    <!-- 通过父组件向子组件传递函数类型的props来实现：子给父传递数据 -->
    <MySchool :getSchoolName="getSchoolName" />

    <!-- 通过父组件向子组件自定义绑定事件来实现：子给父传递数据（第一种写法：通过v-on或@） -->
    <!-- <MyStudent v-on:getStudentName="onGetStudentName"/> -->
    <!-- <MyStudent @getStudentName="onGetStudentName"/> -->
    <!-- 只允许触发一次 -->
    <!-- <MyStudent @getStudentName.once="onGetStudentName" /> -->


    <!-- 通过父组件向子组件自定义绑定事件来实现：子给父传递数据（第二种写法：通过ref，通过mounted钩子函数，更灵活） -->
    <!-- 想要使用原生事件，需要在其后加上“.native” -->
    <MyStudent ref="student" @demo="m1" @click.native="showName" />
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue'
import MyStudent from './components/MyStudent.vue';

export default {
  name: 'App',
  components: { MySchool, MyStudent },
  data() {
    return {
      msg: '你好啊！',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('APP接收到学校名称：', name);
    },
    onGetStudentName(name, ...params) {
      // console.log('APP接收到学生名称：', name);
      // 可以接收多个参数
      console.log('APP接收到学生名称：', name, params);
      this.studentName = name;
    },
    m1() {
      console.log('demo自定义组件被调用了！')
    },
    showName() {
      alert('触发了原生点击事件！')
    }
  },
  mounted() {
    // this.$refs.student 可以拿到被student标记的组件实例对象
    // $on() 可以调用该组件实例对象身上的自定义事件，然后调用方法
    // this.$refs.student.$on('getStudentName', this.onGetStudentName)

    // 可以直接在事件触发里写回调函数，但是需要注意的是，此处回调函数中的this指代的对象，
    // 如果是function()=>{}这种形式，内部的this指代的是触发该自定义事件的组件实例，也就是MyStudent
    // 而箭头函数中写this会自动指向其外部包裹对象，因此内部的this指代的是mounted()所在实例
    this.$refs.student.$on('getStudentName', (name, ...params) => {
      // console.log('APP接收到学生名称：', name);
      // 可以接收多个参数
      console.log('APP接收到学生名称：', name, params);
      console.log(this)
      this.studentName = name;
    })


    // 只能调用一次
    // this.$refs.student.$once('getStudentName', this.onGetStudentName)

    // 需求：等待3秒后再绑定事件
    /* setTimeout(() => {
      this.$refs.student.$on('getStudentName', this.onGetStudentName)
    }, 3000); */
  }

}
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>