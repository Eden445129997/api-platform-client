module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port:'8081',
    open: true,
    disableHostCheck: true,
    https:false,
    hotOnly: false,
    // 代理
    proxy: {
      // 本地环境
      '/localhost': {
        // 最终目标服务器的url
        target:'http://localhost:9998',
        // target:'http://10.113.248.203',
        // 代理 websockets，配置这个参数
        ws: true,
        // https则需要设置
        secure: false,
        // 接口跨域设置
        changeOrigin: true,
        // 和changeOrigin一起使用，目标是为了将请求到代理的url进行字符串替换
        // 比如匹配规则http://localhost:9998/localhost/test请求到代理，pathRewrite将该url参数替换成http://localhost:9998/test
        pathRewrite:{
          '^/localhost': ''
        },
      }
    }
  }
}
