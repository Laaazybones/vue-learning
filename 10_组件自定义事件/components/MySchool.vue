<template>
    <div class="school">
        <h2>学校名称： {{ name }}</h2>
        <h2>学校地址： {{ address }}</h2>
        <button @click="sendSchoolName">点我发送学校名</button>
    </div>
</template>

<script>
    export default {
        name: 'MySchool',
        props: ['getSchoolName'],
        data() {
            return {
                name: '圣蒙特斯男子高级学校',
                address: 'St. Stemenls'
            }
        },
        methods: {
            // 发送学校名称给APP
            sendSchoolName() {
                this.getSchoolName(this.name);
            }
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