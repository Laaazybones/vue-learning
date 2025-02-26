<template>
    <div class="container">

        <Category title="游戏">
            <!-- scope获取的是插槽组件中存储的【数据对象】，scope的对象名是任意的（用任意的对象名来接收插槽数据对象） -->
            <template scope="getData">
                <ul>
                    <li v-for="(game, index) in getData.gamesData" :key="index">{{ game }}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="{gamesData}">
                <ol>
                    <li v-for="(game, index) in gamesData" :key="index">{{ game }}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="getData">
                <h4 v-for="(game, index) in getData.gamesData" :key="index">
                    {{ game }}
                </h4>
            </template>
        </Category>

    </div>
</template>

<script>
import Category from './components/Category';

export default {
    name: 'App',
    components: { Category }
}
</script>

<style>
.container,
.text,
h4 {
    display: flex;
    justify-content: space-around;
}
</style>