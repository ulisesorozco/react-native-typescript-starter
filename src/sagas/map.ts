import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import { equals, isNil } from 'ramda'
import MapActions from '../actions/map'
import Parse from '../services/parse'

import { coordinatesFromArea } from '../utils/area'
import {
  Area,
  AreaChanges,
  Coordinate,
  Dispatch,
  GetState,
  MapAction,
  MapMode,
  MapState,
  Region,
  State,
  Tag,
  ThunkAction,
} from '../config/types'

const areaChanges = (area?: Area): AreaChanges => {
  if (area != null) {
    return {
      coordinates: coordinatesFromArea(area),
      id: area.id,
      name: area.name,
    }
  } else {
    return {
      coordinates: [],
      id: null,
      name: '',
    }
  }
}
const nextLastMode = (state: MapState, nextMode: MapMode): MapMode => {
  return nextMode !== state.mode ? state.mode : state.lastMode
}

export function* navigationRequest(api, action) {
  // action.routeName: DrawerOpen, DrawerClose, areaScreen, tagScreen, mapScreen
  yield put(MapActions.navigateSuccess('create'))
  // const { params, routeName } = action
  // if (equals(routeName, 'mapScreen') && !isNil(params)) {
  //   yield put(MapActions.navigateSuccess(params))
  // }

  // switch (action.routeName) {
  //   case 'mapScreen':
  //     if (action.params != null && action.params.mode === "create") {
  //       // Create mode
  //       const lastMode = nextLastMode(state, "create")
  //       const changes = areaChanges(null)
  //       return { ...state, lastMode, mode: "create", areaChanges: changes }
  //     } else if (action.params != null && action.params.mode === "edit") {
  //       // Create mode
  //       const lastMode = nextLastMode(state, "edit")
  //       const changes = areaChanges(state.area)
  //       return { ...state, lastMode, mode: "edit", areaChanges: changes }
  //     } else if (action.params != null && action.params.mode == "area") {
  //       // Area was selected to show on the map
  //       const area = action.params.area
  //       const lastMode: MapMode = nextLastMode(state, "area")
  //       return { ...state, area, lastMode, mode: "area", areaChanges: null }
  //     } else if (action.params != null && action.params.mode == "tag") {
  //       // Tag was selected to show on the map
  //       const tag = action.params.tag
  //       const lastMode: MapMode = nextLastMode(state, "tag")
  //       const area = tag.area
  //       return {
  //         ...state,
  //         area,
  //         tag,
  //         lastMode,
  //         mode: "tag",
  //         areaChanges: null
  //       }
  //     } else if (action.params != null) {
  //       // Nothing selected, just viewing the map
  //       const mode = action.params.mode || state.mode
  //       const lastMode: MapMode = nextLastMode(state, mode)
  //       return { ...state, lastMode, mode, areaChanges: null }
  //     } else {
  //       return state
  //     }
  //   default:
  //     return state
  // }
}
