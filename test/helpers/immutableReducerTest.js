import { fromJS } from 'immutable'
export default (reducer, state, action, newState) => t => {
  t.truthy(reducer(state, action).equals(fromJS(newState)))
}
