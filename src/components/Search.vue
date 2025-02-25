<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
        <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
        <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Search',
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        searchUsers() {
            // 发起请求
            this.$bus.$emit('getInfo', {isFirst:false, isLoading:true, errMsg:'', users:[]})
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    console.log('请求成功了')
                    // 请求到数据
                    this.$bus.$emit('getInfo', {isLoading:false, errMsg:'', users:response.data.items})
                },
                error => {
                    console.log('请求失败了')
                    // 请求数据失败
                    this.$bus.$emit('getInfo', {isLoading:false, errMsg:error.message, users:[]})
                }
            )
        }
    }
}
</script>

<style>

</style>