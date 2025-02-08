<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名： {{ name }}</h2>
        <h2>学生性别： {{ gender }}</h2>
        <h2>学生年龄： {{ myAge }}</h2>
        <button @click="updateAge">点击尝试修改年龄</button>
    </div>
</template>

<script>
    export default {
        name: 'MyStudent',
        data() {
            return {
                msg: '学生信息如下：',
                myAge: this.age
            }
        },
        methods: {
            updateAge() {
                this.myAge++
            }
        },
        // 简单声明接收
        props: ['name', 'age', 'gender'] 

        // 接收的同时对数据进行类型限制
        // props: {
        //     name: String,
        //     age: Number,
        //     gender: String
        // }

        // 接收的同时对数据：进行数据类型限制、必要性限制、默认值设定
        /* props: {
            name: {
                type: String,   // name的类型为字符串
                required: true  // name的值是必须的
            },
            age: {
                type: Number,
                default: 99     // 默认值
            },
            gender: {
                type: String,
                required: true
            }
        } */

    }
</script>