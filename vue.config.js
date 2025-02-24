const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  // 关闭自动语法检查
  // 配置代理服务器（方式一）
  /* devServer: {
    proxy: 'http://localhost:8080'  // 被代理的服务器地址
  }, */
  // 配置代理服务器（方式二）
  devServer: {
    proxy: {
      '/test': {
        target: 'http://localhost:8080',  // 被代理的后端服务器地址
        pathRewrite: {'^/test':''},  // 路径重写，将代理的路径前缀去除
        ws: true, // websocket
        changeOrigin: true, // true: 将请求地址模拟成被代理的后端服务器的地址（用于控制请求头中的host值）
      },
    }
  }
})
