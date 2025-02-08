<template>
    <div class="school">
        <h2>学校名称： {{ name }}</h2>
        <h2>学校地址： {{ address }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'MySchool',
        data() {
            return {
                name: '圣布鲁斯学校',
                address: 'SanFolopia'
            }
        },
    }
</script>

<style>
    .school {
        background-color: gray;
    }
</style>