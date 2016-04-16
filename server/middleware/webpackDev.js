import compiler from 'compiler'
import webpackDevMiddleware from 'webpack-dev-middleware'

export default webpackDevMiddleware(compiler, {
  publicPath: '/', // todo
  stats: {
    chunks: false,
    colors: true
  }
})
