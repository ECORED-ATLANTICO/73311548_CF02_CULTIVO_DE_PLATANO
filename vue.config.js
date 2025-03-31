const titulo = require('./src/config/titulo')

module.exports = {
  publicPath: '/73311548_CF02_CULTIVO_DE_PLATANO/', // Nombre exacto de tu repositorio
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_styles.sass";` // Asegúrate de importar tu archivo de fuentes
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
      maxAssetSize: 1048576, // 1 MiB (ajusta según necesites)
      maxEntrypointSize: 1048576
    }
  }
}