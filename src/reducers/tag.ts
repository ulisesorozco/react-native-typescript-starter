import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { TagTypes } from '../actions/tag'

const initialState = Immutable({
  status: '', // done, pending, error
  tags: [],
})

const tagsRequest = (state, action) => state.merge({ ...state, status: 'pending' })
const tagsSuccess = (state, action) => state.merge({ ...state, status: 'done', tags: action.tags })
const tagsFailure = (state, action) => state.merge({ ...state, status: 'error' })

export const reducer = createReducer(initialState, {
  [TagTypes.TAGS_REQUEST]: tagsRequest,
  [TagTypes.TAGS_SUCCESS]: tagsSuccess,
  [TagTypes.TAGS_FAILURE]: tagsFailure,
})
