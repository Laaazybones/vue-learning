<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <CustomSchool></CustomSchool>
    <CustomStudent></CustomStudent>
  </div>
</template>

<script>
// 引入组件
import CustomSchool from './components/SchoolName.vue'
import CustomStudent from './components/StudentName.vue'

export default {
  name: 'App',
  template: `<App></App>`,
  // 注册组件
  components: {
    CustomSchool,
    CustomStudent
  }
}
</script>