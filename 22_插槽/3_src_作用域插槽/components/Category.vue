<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- 作用域插槽，数据存储在定义插槽的组件中，插槽组件的使用者可以根据需要决定插槽数据的使用格式 -->
        <slot :gamesData="games">这是插槽的默认内容，当组件的使用者没有往插槽内放东西时，展示这行内容</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
    data() {
        return {
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽']
        }
    }
}
</script>

<style>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: orange;
}

img {
    width: 100%;
}

video {
    width: 100%;
}
</style>