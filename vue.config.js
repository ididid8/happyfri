module.exports = {
  chainWebpack: config => {
    config.resolve
      .extensions
      .add('.less')
  }
}