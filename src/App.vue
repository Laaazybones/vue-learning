<template>
    <div>
        <button @click="getData">点击发送请求</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    methods: {
        getData() {
            axios.get('http://localhost:8081/blog/208').then(
                response => {
                    console.log('请求成功了', response.data)
                },
                error => {
                    console.log('请求失败了', error.message)
                }
            )
        }
    }
}
</script>