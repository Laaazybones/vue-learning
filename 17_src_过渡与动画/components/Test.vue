<template>
    <div>
        <button @click="isShow = !isShow">显示/撤回</button>
        <!-- :appear="true" 表示刷新页面时就触发一次动画 -->
        <transition name="animeDemo" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
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

.animeDemo-enter-active {
    /* 调用动画 */
    animation: anime 0.5s linear;
}

.animeDemo-leave-active {
    /* 翻转动画方向 */
    animation: anime 0.5s linear reverse;
}

/* 定义动画关键帧 */
@keyframes anime {
    /* 从屏幕外部来 */
    from {
        transform: translate(-100%);
    }

    /* 到屏幕中去 */
    to {
        transform: translate(0px);
    }
}
</style>