import { Region } from './types'
import { calculateLongitudeDelta } from '../utils/map'

const defaultLatitudeDelta = 0.00922
const defaultRegion: Region = {
  latitude: 44.906005,
  longitude: -93.198442,
  latitudeDelta: defaultLatitudeDelta,
  longitudeDelta: calculateLongitudeDelta(defaultLatitudeDelta),
}

export {
  // font scaling override - RN default is on
  defaultLatitudeDelta,
  defaultRegion,
}
