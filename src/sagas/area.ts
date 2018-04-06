import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import AreaActions from '../actions/area'
import Parse from '../services/parse'

export function* areasRequest(api, action) {
  const response = yield Parse.getAreas()

  if (response.ok) {
    yield put(AreaActions.areasSuccess(response.response))
  } else {
    yield put(AreaActions.areasFailure())
  }
}
