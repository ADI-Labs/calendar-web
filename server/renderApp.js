import ejs from 'ejs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import getDocument from 'server/getDocument'
import configureStore from 'app/store/configureStore'
import App from 'app'

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
  return ejs.render(getDocument(), { content, initialState })
}
