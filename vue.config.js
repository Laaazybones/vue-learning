const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  // 关闭自动语法检查
  devServer: {
    proxy: 'http://localhost:8080'  // 代理服务器地址
  }
})
