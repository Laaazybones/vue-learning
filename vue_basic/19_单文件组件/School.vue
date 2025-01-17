<template>
    <div>
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学习地址：{{ schoolAddress }}</h2>
        <button @click="show">点击提示学校名称</button>
    </div>
</template>

<script>

// 1.
// 分别暴露：export school = Vue.extend({
// const school = Vue.extend({
//     data() {
//         return {
//             schoolName: '唧唧歪歪',
//             schoolAddress: '四川成都'
//         }
//     },
//     methods: {
//         show() {
//             alert(this.schoolName);
//         }
//     },
// });

// 统一暴露： exprot {school}
// export default school;  // 默认暴露

// 当使用默认暴露方式时，引入的时候直接用：import xxx from xxx
// 当使用另外两种暴露方式时，引入的时候需要用：import {xxx} from xxx

// 2. 上面还可以写成以下方式：
// export default Vue.extend({
//     data() {
//         return {
//             schoolName: '唧唧歪歪',
//             schoolAddress: '四川成都'
//         }
//     },
//     methods: {
//         show() {
//             alert(this.schoolName);
//         }
//     },
// });

// 3. 由于Vue.extend()可以省略，因此可以直接暴露配置项
export default {
    name: 'School', // 定义组件的名称，最好和文件名称一致。开发者工具中显示的是这里定义的名称。
    data() {
        return {
            schoolName: '唧唧歪歪',
            schoolAddress: '四川成都'
        }
    },
    methods: {
        show() {
            alert(this.schoolName);
        }
    },
}

</script>

<style>
/* zhushi */
</style>