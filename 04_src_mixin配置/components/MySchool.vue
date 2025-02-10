<template>
    <div>
        <h2 @click="showName">学校名称： {{ name }}</h2>
        <h2>学校地址： {{ address }}</h2>
    </div>
</template>

<script>
    // import { mixin, mixin2 } from '../mixin';

    export default {
        name: 'MySchool',
        data() {
            return {
                name: '圣蒙特斯男子高级学校',
                address: 'St. Stemenls'
            }
        },
        // mixins: [mixin, mixin2]
    }
</script>