module.exports = process.env.NODE_ENV === 'production' ?
  require('./getDocument.prod')
: require('./getDocument.dev')
