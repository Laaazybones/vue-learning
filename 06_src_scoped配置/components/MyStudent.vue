<template>
    <div class="demo">
        <h2 class="fontStyle">学生姓名： {{ name }}</h2>
        <h2>学生性别： {{ gender }}</h2>
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
    }
}
</script>

<!-- <style scoped>
.demo{
    background-color: aqua;
}
</style> -->


<style lang="less">
.demo {
    background-color: aqua;
    .fontStyle {
        font-size: 40px;
    }
}
</style>