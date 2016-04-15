import { createReducer } from 'redux-immutablejs'
import { createAction } from 'redux-actions'

/* Constants */
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

const initialState = {
  value: 0
}

/* Reducer */
export default createReducer(initialState, {
  [INCREMENT_COUNTER]: state => (
    state.update('value', value => value + 1)
  ),
  [DECREMENT_COUNTER]: state => (
    state.update('value', value => value - 1)
  )
})

/* Actions */
export const increment = createAction(INCREMENT_COUNTER)
export const decrement = createAction(DECREMENT_COUNTER)

