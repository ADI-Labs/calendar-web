import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { fromJS } from 'immutable'
import reducers from 'modules'
import DevTools from 'containers/DevTools'

export default function configureStore(initialState) {

  const store = createStore(
    reducers,
    fromJS(initialState),
    compose(
      applyMiddleware(thunk, promiseMiddleware),
      DevTools.instrument()
    )
  )

  // Enable Webpack hot module replacement for reducers
  if (module.hot)
    module.hot.accept('modules', () => {
      const nextRootReducer = require('modules').default
      store.replaceReducer(nextRootReducer)
    })

  return store
}
