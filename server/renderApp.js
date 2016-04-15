import React from 'react'
import configureStore from 'store/configureStore'
import { renderToString } from 'react-dom/server'
import App from 'containers/Root'

export default function renderApp(renderProps) {
  // Create a new Redux store instance
  const store = configureStore()

  // Render the application to a string
  const content = renderToString(
    <App store={ store } { ...renderProps } />
  )

  // Render the initial application state to a json string.
  const initialState = JSON.stringify(store.getState())

  // Send the rendered page back to the client
  return {
    content,
    initialState
  }
}
