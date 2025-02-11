<template>
    <div class="demo">
        <h2>学校名称： {{ name }}</h2>
        <h2>学校地址： {{ address }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'MySchool',
        data() {
            return {
                name: '圣蒙特斯男子高级学校',
                address: 'St. Stemenls'
            }
        }
    }
</script>

<style scoped>
.demo{
    background-color: orange;
}
</style>