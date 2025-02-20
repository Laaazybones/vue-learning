<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <MySchool/>
    <MyStudent/>
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
    }
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>