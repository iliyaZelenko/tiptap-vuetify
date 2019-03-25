const path = require('path')

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/vue-cool-select/'
  //   : '/',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    extract: false
  },

  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    }
  }
}
