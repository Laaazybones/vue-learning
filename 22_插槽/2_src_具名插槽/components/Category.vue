<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- 引入插槽，插槽作用是：先在组件某个位置占位，等待组件的使用者放入内容后展示。插槽具有默认值。 -->
        <slot name="center">这是插槽的默认内容，当组件的使用者没有往插槽内放东西时，展示这行内容1</slot>
        <slot name="footer">这是插槽的默认内容，当组件的使用者没有往插槽内放东西时，展示这行内容2</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title']
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