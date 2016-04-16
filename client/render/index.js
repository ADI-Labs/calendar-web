module.exports = process.env.NODE_ENV === 'production' ?
  require('./render.prod').default
: require('./render.dev').default
