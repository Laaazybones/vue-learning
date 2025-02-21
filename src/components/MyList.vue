<template>
  <ul class="todo-main">
    <transition-group name="animeDemo" appear>
      <MyItem 
          v-for="item in todoList" 
          :key="item.id" 
          :todo="item" 
      />
    </transition-group>
  </ul>
</template>

<script>
import MyItem from './MyItem';

export default {
    name: 'MyList',
    components: {MyItem},
    props: ['todoList']
}
</script>

<style scoped>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
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
        transform: translate(100%);
    }

    /* 到屏幕中去 */
    to {
        transform: translate(0px);
    }
}
</style>