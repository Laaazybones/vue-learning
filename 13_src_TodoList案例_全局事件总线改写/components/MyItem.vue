<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.completed" @click="handleCheck(todo.id)" />
            <!-- 以下使用v-model双向绑定也可以实现修改复选框数据的功能，但是不推荐这样操作，因为这会修改props的数据，
                原则上props只允许单项数据传递。 -->
            <!-- 使用下面的方法控制台不报错是因为，vue的props只能检测到对象地址级别的数据更改，对象中属性的更改检测不到 -->
            <!-- <input type="checkbox" v-model="todo.completed"/> -->
            <span>{{ todo.name }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    // 声明组件间数据传递
    props: ['todo'],
    methods: {
        // 处理复选框勾选
        handleCheck(id) {
            // 调用App组件方法
            // this.checkTodo(id);
            this.$bus.$emit('checkTodo', id);
        },
        // 处理删除
        handleDelete(id) {
            if (confirm('确认删除吗？')) {
                // this.deleteTodo(id)
                this.$bus.$emit('deleteTodo', id)
            }
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>