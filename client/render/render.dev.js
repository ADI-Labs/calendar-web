import React from 'react'
import ReactDOM from 'react-dom'
import { match, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import DevTools from 'app/containers/DevTools'
import configureStore from 'app/store/configureStore'
import routes from 'app/routes'

let render = (rootElement = 'root', devElement = 'dev-tools') => {
  const App = require('app').default
  const store = configureStore(window.__INITIAL_STATE__)
  const history = syncHistoryWithStore(
    browserHistory,
    store,
    { selectLocationState: state => state.get('routing') }
  )
  const appMountNode = document.getElementById(rootElement)
  const devToolsMountNode = document.getElementById(devElement)
  match({ history, routes }, (error, redirectLocation, renderProps) => {
    ReactDOM.render(<App store={ store } { ...renderProps } />, appMountNode)
    ReactDOM.render(<DevTools store={ store } />, devToolsMountNode)
  })
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render

  const renderError = (error, rootElement = 'root') => {
    const RedBox = require('redbox-react').default
    const mountNode = document.getElementById(rootElement)
    ReactDOM.render(
      <RedBox error={ error } />,
      mountNode
    )
  }

  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }

  module.hot.accept('app', render)
}

export default render
