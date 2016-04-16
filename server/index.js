/* eslint-disable no-console */
require('../register')

process.env.NODE_ENV === 'production' ?
  require('./server.prod')
: require('./server.dev')



  // function ready(fn, req) {
  //   if(state) return fn();
  //   console.log("webpack: wait until bundle finished: " + (req.url || fn.name));
  //   callbacks.push(fn);
  // }

  //     // execute callback that are delayed
  //     var cbs = callbacks;
  //     callbacks = [];
  //     cbs.forEach(function continueBecauseBundleAvailible(cb) {
  //       cb();
  //     });

