module.exports = {
  productionSourceMap:false,
    lintOnSave:false,
    devServer: {
        proxy: {
          '/api':{
            target:'http://gmall-h5-api.atguigu.cn'
          }
        }
      },
    /*  devServer: {
        proxy: {
          '^/lzy': {
            target: 'http://localhost:4000',
            pathRewrite:{'^/lzy':''},
            ws: true,
            //服务器说谎
            changeOrigin: true
          },
          '^/foo': {
            target: '<other_url>'
          }
        }
      }*/
      configureWebpack:{
        name:'尚品汇'
      }
} 