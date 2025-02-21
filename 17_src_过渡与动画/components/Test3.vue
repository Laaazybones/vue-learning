<template>
    <div>
        <button @click="isShow = !isShow">显示/撤回</button>
        <!-- 当一个transition中需要包含多个元素（即一个列表）时，需要使用transition-group，并且要给每个元素添加key值 -->
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__zoomInUp"
            leave-active-class="animate__zoomOutUp"
        >
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="!isShow" key="2">啦啦啦！</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'

export default {
    name: 'Test',
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: orange;
}
</style>