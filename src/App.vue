<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"/>
                <MyList :todoList="todoList" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter/>
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
            todoList: [
                {id: '001', name: '吃饭', completed: true},
                {id: '002', name: '睡觉', completed: false},
                {id: '003', name: '打豆豆', completed: true}
            ]
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
        }
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