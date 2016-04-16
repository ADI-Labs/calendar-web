/* eslint-disable no-console */
import webpack from 'webpack'

const webpackConfig = process.env.NODE_ENV === 'production' ?
  require('./webpack.config.prod')
: require('./webpack.config.dev')

export default webpack(webpackConfig)

