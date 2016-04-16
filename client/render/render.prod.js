import React from 'react'
import ReactDOM from 'react-dom'
import { match, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'app/store/configureStore'
import routes from 'app/routes'
import App from 'app'

export default function render(rootElement = 'root') {
  const mountNode = document.getElementById(rootElement)
  const store = configureStore(window.__INITIAL_STATE__)
  const history = syncHistoryWithStore(
    browserHistory,
    store,
    { selectLocationState: state => state.get('routing') }
  )
  match({ history, routes }, (error, redirectLocation, renderProps) => {
    ReactDOM.render(<App store={ store } { ...renderProps } />, mountNode)
  })
}
