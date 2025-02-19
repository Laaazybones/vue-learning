<template>
    <div class="school">
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
        },
        mounted() {
            this.$bus.$on('getStuName', (value) => {
                console.log('MySchool组件的getStuName事件被触发，接收到参数：', value)
            })
        },
        beforeDestroy() {
            this.$bus.$off('getStuName')
        }
    }
</script>

<style scoped>
.school{
    background-color: orange;
    margin-left: 10px;
    margin-right: 10px;
}
</style>