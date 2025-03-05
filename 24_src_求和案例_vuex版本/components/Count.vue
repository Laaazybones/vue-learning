<template>
    <div>
        <h1>求和结果为：{{ $store.state.sum }}</h1>
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
            n: 1    // 用户选择的加数
        }
    },
    methods: {
        increment() {
            // 当actions中的业务逻辑十分简单且与mutations中的逻辑一致时，可以直接调用commit
            // this.$store.dispatch('increment', this.n)
            this.$store.commit('INCREMENT', this.n)
        },
        decrement() {
            // this.$store.dispatch('decrement', this.n)
            this.$store.commit('DECREMENT', this.n)
        },
        incrementOdd() {
            this.$store.dispatch('incrementOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('incrementWait', this.n)
        },
    },
    mounted() {
        console.log('Count', this)
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>