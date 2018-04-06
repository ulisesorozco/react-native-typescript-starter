import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import TagActions from '../actions/tag'
import Parse from '../services/parse'

export function* tagsRequest(api, action) {
  const response = yield Parse.getActiveBoundaries()

  if (response.ok) {
    yield put(TagActions.tagsSuccess(response.response))
  } else {
    yield put(TagActions.tagsFailure())
  }
}
