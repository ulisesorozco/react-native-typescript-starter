import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { isNil } from 'ramda'
import { MapTypes } from '../actions/map'

import { defaultRegion } from '../config/app'
import { Area, AreaChanges } from '../config/types'
import { coordinatesFromArea } from '../utils/area'

const initialState = Immutable({
  status: '', // done, pending, error
  area: null,
  areaChanges: null,
  lastMode: 'view',
  lastRegion: defaultRegion,
  mode: 'view',
  region: null,
  tag: null,
})

const navigateRequest = (state, action) => state.merge({ ...state, status: 'pending' })
const navigateSuccess = (state, action) => {
  const { area, mode, tag } = action.params
  const lastMode = mode !== state.mode ? state.mode : state.lastMode
  const areaChanges = (_area?: Area): AreaChanges => {
    if (!isNil(_area)) {
      return {
        coordinates: coordinatesFromArea(_area),
        id: _area.id,
        name: _area.name,
      }
    } else {
      return {
        coordinates: [],
        id: null,
        name: '',
      }
    }
  }

  console.log('-------------->>>   ', mode)
  switch (mode) {
    case 'create': {
      const changes = areaChanges(null)
      return state.merge({ ...state, status: 'done', lastMode, mode, areaChanges: changes })
    }
    case 'edit': {
      const changes = areaChanges(state.area)
      return state.merge({ ...state, status: 'done', lastMode, mode, areaChanges: changes })
    }
    case 'area':
      return state.merge({ ...state, area, lastMode, mode, areaChanges: null })
    case 'tag': {
      const area = tag.area
      return state.merge({ ...state, area, tag, lastMode, mode, areaChanges: null })
    }
    default: {
      const _mode = mode || state.mode
      const _lastMode = _mode !== state.mode ? state.mode : state.lastMode
      return state.merge({ ...state, lastMode: _lastMode, mode, areaChanges: null })
    }
  }
}
const navigateFailure = (state, action) => state.merge({ ...state, status: 'error' })

export const reducer = createReducer(initialState, {
  [MapTypes.NAVIGATE_REQUEST]: navigateRequest,
  [MapTypes.NAVIGATE_SUCCESS]: navigateSuccess,
  [MapTypes.NAVIGATE_FAILURE]: navigateFailure,
})
