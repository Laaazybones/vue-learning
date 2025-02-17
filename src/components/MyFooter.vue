<template>
  <div class="todo-footer">
    <label>
        <input type="checkbox"/>
    </label>
    <span>已完成{{ completedTodo }}</span> / 全部{{ todoList.length }}
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todoList'],
    computed: {
        // 计算已完成的todo
        completedTodo() {
            /* const completedCount = this.todoList.reduce((pre, todo) => {
                console.log('@', pre)
                return pre + (todo.completed ? 1 : 0)
            }, 0)
            console.log('completedCount = ', completedCount)
            return completedCount */

            // 简写
            return this.todoList.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
        }
    }
}
</script>

<style scoped>
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>