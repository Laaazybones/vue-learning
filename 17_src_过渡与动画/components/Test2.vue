<template>
    <div>
        <button @click="isShow = !isShow">显示/撤回</button>
        <!-- 当一个transition中需要包含多个元素（即一个列表）时，需要使用transition-group，并且要给每个元素添加key值 -->
        <transition-group name="animeDemo2" appear>
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="!isShow" key="2">啦啦啦！</h1>
        </transition-group>
    </div>
</template>

<script>
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

/* 不使用动画，而使用过渡来实现效果 */
/* 进入的起点、离开的终点 */
.animeDemo2-enter, .animeDemo2-leave-to {
    transform: translate(-100%);
}

/* 控制进入、离开过渡动画 */
.animeDemo2-enter-active, .animeDemo2-leave-active {
    transition: 0.5s linear;    /* transition 控制过渡效果 linear表示线性的 */
}
/* 离开的终点、进入的起点 */
.animeDemo2-enter-to, .animeDemo2-leave {
    transform: translate(0);
}
</style>