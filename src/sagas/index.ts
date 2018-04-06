import { takeLatest, all } from 'redux-saga/effects'

/**
 * Types of actions
 */
import { AppTypes } from '../actions/app'
import { AreaTypes } from '../actions/area'

/**
 * Sagas
 */
import { loginRequest } from './app'
import { areasRequest } from './area'

/**
 * API
 */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = () => {}

/**
 * Connect Types to Sagas
 */
export default function* root() {
  yield all([
    // some sagas receive extra parameters in addition to an action
    takeLatest(AppTypes.LOGIN_REQUEST, loginRequest, api),
    // Get areas
    takeLatest(AreaTypes.AREAS_REQUEST, areasRequest, api),
  ])
}
