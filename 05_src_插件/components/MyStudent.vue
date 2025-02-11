<template>
    <div>
        <h2>学生姓名： {{ name }}</h2>
        <h2>学生性别： {{ gender }}</h2>
        <input type="text" v-fbind:value="name">
        <br>
        <button @click="test">点我测试一下hello原型方法</button>
    </div>
</template>

<script>
    export default {
        name: 'MyStudent',
        data() {
            return {
                name: '张三',
                gender: '男'
            }
        },
        methods: {
            test(){
                this.hello()
            }
        }
    }
</script>