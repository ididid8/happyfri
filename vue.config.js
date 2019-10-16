const path = require('path')

module.exports = {
  outputDir: process.env.NODE_ENV === 'production'? path.resolve(__dirname, './docs'): 'dist',
  assetsDir: process.env.NODE_ENV === 'production'? './.': '',
  publicPath: process.env.NODE_ENV === 'production'? './.': '/',
  
  chainWebpack: config => {
    
    const types =  ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    
    config.resolve
      .extensions
      .add('.less')
      
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
        .options({
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        })
  }
  
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resource-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/style/common.less')
      ]
    })
}

