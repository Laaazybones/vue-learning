<template>
    <div class="student">
        <h2>学生姓名： {{ name }}</h2>
        <h2>学生性别： {{ gender }}</h2>
        <h2>number: {{ number }}</h2>
        <button @click="add">number++</button>
        <button @click="sendStudentName">点我发送学生名</button>
        <button @click="unbind">点我解绑组件自定义事件</button>
        <button @click="destroyVC">点击销毁MyStudent组件实例vc</button>
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
        add() {
            console.log('add number回调被调用了')
            this.number++
        },
        // 发送学生名字到APP
        sendStudentName() {
            // 触发MyStudent组件实例对象身上的getStudentName事件
            // this.$emit('getStudentName', this.name);
            // 可以传递多个参数
            this.$emit('getStudentName', this.name, 666, 999, 888);
            this.$emit('demo');
        },
        // 解绑组件自定义事件
        unbind() {
            // 解绑一个自定义事件
            // this.$off('getStudentName')
            // 解绑多个自定义事件
            // this.$off(['getStudentName', 'demo'])
            // 解绑所有自定义事件
            this.$off()
        },
        destroyVC() {
            // 销毁了当前MyStudent组件的实例，销毁后所有组件实例的自定义事件都不奏效了。
            this.$destroy()
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