<template>
    <div>
        <h1>求和结果为：{{ sum }}</h1>
        <!-- 使用.number强制转换为数字 -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">求和结果为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data() {
        return {
            sum: 0, // 求和
            n: 1    // 用户选择的加数
        }
    },
    methods: {
        increment() {
            this.sum += this.n
        },
        decrement() {
            this.sum -= this.n
        },
        incrementOdd() {
            if (this.sum % 2) {
                this.sum += this.n
            }
        },
        incrementWait() {
            setTimeout(()=>{
                this.sum += this.n
            }, 500)
        },
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>