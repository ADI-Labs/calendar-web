module.exports = process.env.NODE_ENV === 'production' ?
  require('./configureStore.prod').default
: require('./configureStore.dev').default
