import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AreaTypes } from '../actions/area'

const initialState = Immutable({
  status: '', // done, pending, error
  areas: [],
})

const areasRequest = (state, action) => state.merge({ ...state, status: 'pending' })
const areasSuccess = (state, action) =>
  state.merge({ ...state, status: 'done', areas: action.areas })
const areasFailure = (state, action) => state.merge({ ...state, status: 'error' })

export const reducer = createReducer(initialState, {
  [AreaTypes.AREAS_REQUEST]: areasRequest,
  [AreaTypes.AREAS_SUCCESS]: areasSuccess,
  [AreaTypes.AREAS_FAILURE]: areasFailure,
})
