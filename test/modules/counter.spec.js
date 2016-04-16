import test from 'ava'

/* Reducers */
import reducerTest from 'immutableReducerTest'
import counterReducer from 'app/modules/counter.js'

const num = 4

test('reducer handles increment', reducerTest(
  counterReducer,
  { value: num },
  increment(),
  { value: num + 1 },
  'handle increment'
))

test('reducer handles decrement', reducerTest(
  counterReducer,
  { value: num },
  decrement(),
  { value: num - 1 }
))

/* Actions */
import { actionTest } from 'redux-ava'
import { increment, decrement } from 'app/modules/counter.js'

test('action increment', actionTest(
  increment,
  {
    type: 'counter/INCREMENT',
    payload: undefined
  }
))

test('action decrement', actionTest(
  decrement,
  {
    type: 'counter/DECREMENT',
    payload: undefined
  }
))
