<template>
  <ul class="todo-main">
    <MyItem v-for="item in todoList" :key="item.id" :todo="item"/>
  </ul>
</template>

<script>
import MyItem from './MyItem';

export default {
    name: 'MyList',
    components: {MyItem},
    data() {
        return {
            todoList: [
                {id: '001', name: '吃饭', completed: true},
                {id: '002', name: '睡觉', completed: false},
                {id: '003', name: '打豆豆', completed: true}
            ]
        }
    }
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
</style>