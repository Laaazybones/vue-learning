export default {
    install(Vue, x, y, z) {
        // 插件可以接收自定义传入的参数
        console.log(x, y, z);

        // 配置全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        });

        // 配置全局指令
        Vue.directive('fbind', {
            // 指令与元素首次成功绑定时
            bind(element, binding) {
                console.log('fbind-bind', this);    // 指令中的this是Window，不是vm
                element.value = binding.value;
            },

            // 指令绑定的元素被插入到页面时
            // 有些标签元素操作需要卡插入页面的时点，使用函数式书写不能实现这么细的操作
            inserted(element, binding) {
                console.log('fbind-inserted', this);
                element.focus();
            },

            // 指令所在的模板被重新解析时
            update(element, binding) {
                console.log('fbind-update', this);
                element.value = binding.value;
                element.focus();
            },
        });

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        });

        // 配置原型方法(配置后vm和vc都能使用)
        Vue.prototype.hello = () => {alert('Hellooooo')}
    }
}