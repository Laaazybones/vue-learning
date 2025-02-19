<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo"/>
                <MyList :todoList="todoList"/>
                <MyFooter :todoList="todoList" @checkAllTodo="checkAllTodo" @clearCompletedTodo="clearCompletedTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyList from './components/MyList'

export default {
    name: 'App',
    components: {MyHeader, MyFooter, MyList},
    data() {
        return {
            // 初始化时取本地存储数据
            todoList: JSON.parse(localStorage.getItem('todoList')) || []
        }
    },
    methods: {
        // 添加一个todo
        addTodo(todoObj) {
            // console.log('App组件方法调用，传入参数：', x);
            this.todoList.unshift(todoObj);
        },
        // 勾选或取消勾选一个todo
        checkTodo(id) {
            this.todoList.forEach((todo) => {
                if (todo.id === id) todo.completed = !todo.completed
            })
        },
        // 删除一个todo
        deleteTodo(id) {
            this.todoList = this.todoList.filter((todo) => {
                return todo.id !== id
            })
        },
        // 勾选或取消勾选所有todo
        checkAllTodo(completedFlag) {
            this.todoList.forEach((todo) => {
                todo.completed = completedFlag
            })
        },
        // 清除所有勾选已完成的todo
        clearCompletedTodo() {
            this.todoList = this.todoList.filter((todo) => {
                return !todo.completed
            })
        }
    },
    watch: {
        // 使用监视属性监视todoList的改变
        todoList: {
            // 开启深度监视
            deep:true,
            handler(value) {
                localStorage.setItem('todoList', JSON.stringify(value))
            }
        }
    },
    mounted() {
        // 使用全局事件总线绑定自定义组件事件
        this.$bus.$on('checkTodo', this.checkTodo)
        this.$bus.$on('deleteTodo', this.deleteTodo)
    },
    beforeDestroy() {
        this.$bus.$off(['checkTodo', 'deleteTodo'])
    }
}
</script>

<style>
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>