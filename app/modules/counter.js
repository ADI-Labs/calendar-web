import { createReducer } from 'redux-immutablejs'
import { createAction } from 'redux-actions'

/* Constants */
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

const initialState = {
  value: 0
}

/* Reducer */
export default createReducer(initialState, {
  [INCREMENT]: state => (
    state.update('value', value => value + 1)
  ),
  [DECREMENT]: state => (
    state.update('value', value => value - 1)
  )
})

/* Actions */
export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)

