# vue_cli_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## vue.config.js配置文件 
 - 使用 vue inspect > output.js 可以将默认配置输出到output.js文件中
 - 使用 vue.config.js 可以对脚手架进行个性化定制，例如关闭自动语法检查等，详见vue2官网

## ref 属性
 1. 被用来给元素或子组件注册引用信息（id的替代者）
 2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
 3. 使用方式：
    打标识：`<h1 ref="xxx"> ... </h1>` 或 `<MySchool ref="xxx"></MySchool>`
    获取：this.$refs.xxx 

## props配置项
功能：让组件接收外部传过来的数据，步骤：
1. 传递数据：
    `<Demo name="xxx"/>`
2. 接收数据：
    - 方式一（只接收）
    props: ['name']
    - 方式二（限制类型）
    props: {
        name: String
    }
    - 方式三（限制类型、限定必要性、制定默认值）
    props: {
        name: {
            type: String,
            default: '张三',
            required: true
        }
    }
备注：props是只读的，Vue底层会监测我们对props的修改，如果进行了修改，就会发出警告，如果业务需求确实需要对props传参进行修改，那么就需要复制一份props数据到data中，然后对data中复制后的数据进行操作。