import { Region } from './types'
import { calculateLongitudeDelta } from '../utils/map'

const PARSE_APPLICATION_ID = 'ROkx97AeQ43jyd5fI25P4bK4mdUr19pH'
const PARSE_SERVER_URL = 'https://fido-staging.skyshepherd.com/1'
// HACK: Pending proper login
// Normal user
const PARSE_EMAIL = 'eric+brianblue@citizen.io'
const PARSE_PASSWORD = 'secret123'

const defaultLatitudeDelta = 0.00922
const defaultRegion: Region = {
  latitude: 44.906005,
  longitude: -93.198442,
  latitudeDelta: defaultLatitudeDelta,
  longitudeDelta: calculateLongitudeDelta(defaultLatitudeDelta),
}

export {
  PARSE_APPLICATION_ID,
  PARSE_SERVER_URL,
  PARSE_EMAIL,
  PARSE_PASSWORD,
  // font scaling override - RN default is on
  defaultLatitudeDelta,
  defaultRegion,
}
