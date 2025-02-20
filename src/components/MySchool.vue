<template>
    <div class="school">
        <h2>学校名称： {{ name }}</h2>
        <h2>学校地址： {{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'MySchool',
    data() {
        return {
            name: '圣蒙特斯男子高级学校',
            address: 'St. Stemenls'
        }
    },
    mounted() {
        // this.$bus.$on('getStuName', (value) => {
        //     console.log('MySchool组件的getStuName事件被触发，接收到参数：', value)
        // })
        // 订阅消息
        this.pubId = pubsub.subscribe('msgDemo', (msgName, value) => {
            console.log('接收到订阅的消息：', value)
        })
    },
    beforeDestroy() {
        // this.$bus.$off('getStuName')
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
.school {
    background-color: orange;
    margin-left: 10px;
    margin-right: 10px;
}
</style>