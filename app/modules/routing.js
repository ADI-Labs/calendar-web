import { createReducer } from 'redux-immutablejs'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = {
  locationBeforeTransitions: null
}

export default createReducer(initialState, {
  [LOCATION_CHANGE]: (state, action) => (
    state.merge({
      locationBeforeTransitions: action.payload
    })
  )
})
