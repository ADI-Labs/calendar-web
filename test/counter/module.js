import test from 'ava'

/* Reducers */
import reducerTest from 'immutableReducerTest'
import reducer from 'app/modules/counter.js'

const num = 4

test('reducer handles increment', reducerTest(
  reducer,
  { value: num },
  increment(),
  { value: num + 1 },
  'handle increment'
))

test('reducer handles decrement', reducerTest(
  reducer,
  { value: num },
  decrement(),
  { value: num - 1 }
))

/* Actions */
import { actionTest } from 'redux-ava'
import { increment, decrement } from 'app/modules/counter.js'

test('action increment', actionTest(
  increment,
  null,
  {
    type: 'counter/INCREMENT',
    payload: undefined
  }
))

test('action decrement', actionTest(
  decrement,
  null,
  {
    type: 'counter/DECREMENT',
    payload: undefined
  }
))
