import { createAction } from 'redux-actions'
import { NEXT_MONTH, PREV_MONTH } from './constants'

export const nextMonth = createAction(NEXT_MONTH)
export const prevMonth = createAction(PREV_MONTH)
export const selectDate = createAction()
