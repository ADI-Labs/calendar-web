import LOCATION_CHANGE from 'react-router-redux'
import { createReducer } from 'redux-immutablejs'

const initialState = {
  locationBeforeTransitions: null
}

export default createReducer(initialState, {
  [LOCATION_CHANGE]: (state, payload) => ({
    'locationBeforeTransitions': payload
  })
})
