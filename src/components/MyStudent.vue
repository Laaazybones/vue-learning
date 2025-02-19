<template>
    <div class="student">
        <h2>学生姓名： {{ name }}</h2>
        <h2>学生性别： {{ gender }}</h2>
        <button @click="sendStuName">将学生姓名传递给MySchool组件</button>
    </div>
</template>

<script>
export default {
    name: 'MyStudent',
    data() {
        return {
            name: '张三',
            gender: '男',
            number: 0
        }
    },
    methods: {
        sendStuName() {
            this.$bus.$emit('getStuName', this.name);
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