<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todoObjName" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid';

export default {
    name: 'MyHeader',
    // 父组件向子组件进行数据传递，子组件向父组件进行数据传递都可以使用props，
    // 不同之处在于，当子组件想要传递数据给父组件时，需要父组件事先定义一个方法，然后将该方法传递给子组件，让子组件调用
    // props: ['addTodo'], 
    data() {
      return {
        todoObjName: ''
      }
    },
    methods: {
      // 写法一：手动操作DOM
      /* add(event) {
        if (event.target.value == '') return alert('输入数据不能为空');
        // 创建数据
        const todoObj = {id: nanoid(), name: event.target.value, completed: false};
        // 添加数据
        this.addTodo(todoObj);
        // 输入数据后，将输入框内容置空 (手动操作了DOM)
        event.target.value = '';
      } */

      // 写法二：不手动操作DOM
      add() {
        if (this.todoObjName == '') return alert('输入数据不能为空哦！');
        const todoObj = {id: nanoid(), name: this.todoObjName, completed: false};
        // this.addTodo(todoObj);
        this.$emit('addTodo', todoObj);
        this.todoObjName = '';
      }
    }
}
</script>

<style scoped>
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>