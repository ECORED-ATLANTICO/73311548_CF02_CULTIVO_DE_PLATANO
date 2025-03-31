const titulo = require('./src/config/titulo')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/73311548_CF02_CULTIVO_DE_PLATANO/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        additionalData: `@import "@/styles/_styles.sass";`
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = titulo
      return args
    })
  },
}
