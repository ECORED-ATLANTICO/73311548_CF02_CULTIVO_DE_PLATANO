const titulo = require('./src/config/titulo')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/73311548_CF02_CULTIVO_DE_PLATANO/'
    : '/',
    
  css: {
    loaderOptions: {
      sass: {
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
  
  configureWebpack: {
    performance: {
      hints: false,
      maxAssetSize: 1048576 * 5, // 5MB
      maxEntrypointSize: 1048576 * 5
    }
  }
}