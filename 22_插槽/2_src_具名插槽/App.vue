<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
            <a class="text" slot="footer" href="http://www.baidu.com">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(game, index) in games" :key="index">{{ game }}</li>
            </ul>
            <div slot="footer">
                <a class="text" href="http://www.baidu.com">单机游戏</a>
                <a class="text" href="http://www.baidu.com">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template v-slot:footer>
                <div>
                    <a class="text" href="http://www.baidu.com">经典</a>
                    <a class="text" href="http://www.baidu.com">动作</a>
                    <a class="text" href="http://www.baidu.com">喜剧</a>
                </div>
                <h4>欢迎观看！</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category';

export default {
    name: 'App',
    components: {Category},
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
        }
    }
}
</script>

<style>
    .container, .text, h4 {
        display: flex;
        justify-content: space-around;
    }
</style>