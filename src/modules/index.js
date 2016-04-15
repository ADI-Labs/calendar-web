import { combineReducers } from 'redux-immutablejs'
import routing from './routing'
import counter from './counter'

const rootReducer = combineReducers({
  routing,
  counter
})

export default rootReducer
