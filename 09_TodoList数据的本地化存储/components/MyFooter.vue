<template>
  <div class="todo-footer" v-show="totalTodo">
    <label>
        <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
         <!-- 写法二：v-model双向绑定数据 -->
        <input type="checkbox" v-model="isAll"/>
    </label>
    <span>已完成{{ completedTodo }}</span> / 全部{{ totalTodo }}
    <button class="btn btn-danger" @click="clearCompleted">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todoList', 'checkAllTodo', 'clearCompletedTodo'],
    computed: {
        totalTodo() {
            return this.todoList.length
        },
        // 计算已完成的todo数量
        completedTodo() {
            /* const completedCount = this.todoList.reduce((pre, todo) => {
                console.log('@', pre)
                return pre + (todo.completed ? 1 : 0)
            }, 0)
            console.log('completedCount = ', completedCount)
            return completedCount */

            // 简写
            return this.todoList.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
        },
        // 全选时，底部复选框自动勾选
        /* isAll() {
            return this.completedTodo === this.totalTodo && this.totalTodo > 0
        }, */
        isAll: {
            get() {
                return this.completedTodo === this.totalTodo && this.totalTodo > 0
            },
            set(value) {
                // 修改全选状态
                this.checkAllTodo(value)
            }
        }
    },
    methods: {
        // 勾选或取消勾选全部选项
        /* checkAll(e) {
            this.checkAllTodo(e.target.checked)
        } */
       // 清除已经完成的选项
        clearCompleted() {
            if (this.completedTodo > 0 && confirm('确认清除已完成的选项吗？')) {
                this.clearCompletedTodo()
            }
            if (this.completedTodo <= 0) {
                alert('尚不存在已完成的选项！')
            }
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