<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.completed" @click="handleCheck(todo.id)" />
            <!-- 以下使用v-model双向绑定也可以实现修改复选框数据的功能，但是不推荐这样操作，因为这会修改props的数据，
                原则上props只允许单项数据传递。 -->
            <!-- 使用下面的方法控制台不报错是因为，vue的props只能检测到对象地址级别的数据更改，对象中属性的更改检测不到 -->
            <!-- <input type="checkbox" v-model="todo.completed"/> -->
            <span v-show="!todo.isEdit">{{ todo.name }}</span>
            <input 
                v-show="todo.isEdit" 
                type="text" 
                :value="todo.name"
                @blur="handleBlur(todo, $event)"
                ref="inputName"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
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
                // this.$bus.$emit('deleteTodo', id)
                pubsub.publish('deleteTodo', id)
            }
        },
        // 处理编辑
        handleEdit(todo) {
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                // 当需要给对象后添加一个新属性时，需要使用this.$set来补全属性的getter和setter
                // console.log('handleEdit, todo上没有isEdit属性，追加一个')
                this.$set(todo, 'isEdit', true)
            }
            // 点击编辑的时候，自动触发输入框焦点，使用$nextTick可以使得DOM重新选然后再执行内部的回调
            this.$nextTick(function(){
                this.$refs.inputName.focus()
            })
        },
        // 处理输入框焦点，当输入框丢失焦点时，将输入框变为真正的文字，此时需要在这里真实处理数据修改操作
        // $event用于接收输入框输入的文字
        handleBlur(todo, event) {
            if (event.target.value.trim() === '') return alert('不允许输入为空！')
            todo.isEdit = false
            this.$bus.$emit('updateTodoName', todo.id, event.target.value)
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