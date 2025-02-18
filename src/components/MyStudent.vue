<template>
    <div class="student">
        <h2>学生姓名： {{ name }}</h2>
        <h2>学生性别： {{ gender }}</h2>
        <button @click="sendStudentName">点我发送学生名</button>
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
        // 发送学生名字到APP
        sendStudentName() {
            // 触发MyStudent组件实例对象身上的getStudentName事件
            // this.$emit('getStudentName', this.name);
            // 可以传递多个参数
            this.$emit('getStudentName', this.name, 666, 999, 888);
        }
    }
}
</script>

<style scoped>
.student {
    background-color: aqua;
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 40px;
    margin-bottom: 10px;
}
</style>