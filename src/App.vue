<template>
  <div>
    <!-- :age 表示v-bind:age, 添加冒号后，引号中的内容就作为js表达式进行计算处理了，不再单纯作为字符串 -->
    <MyStudent name="张三" gender="女" :age="18"/>
  </div>
</template>

<script>
import MyStudent from './components/MyStudent.vue';

export default {
    name: 'App',
    components: {MyStudent}
}
</script>