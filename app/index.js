/* Global styles */
import 'assets/css/normalize.css'
import 'assets/css/skeleton.css'
import 'assets/css/custom.css'

import React from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'

export default function Root({ store, ...renderProps }) {
  return (
    <Provider store={ store }>
      <RouterContext { ...renderProps } />
    </Provider>
  )
}
