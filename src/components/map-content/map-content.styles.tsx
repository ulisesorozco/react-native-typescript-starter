import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { colors, metrics } from '../../themes'

export const ROOT: ViewStyle = {
  flex: 1,
}

export const mapAreaCoordinateMarker: ViewStyle = {
  backgroundColor: colors.white,
  borderColor: colors.logoBlue,
  borderWidth: 2,
  borderRadius: metrics.modificationMarkerSize * 0.5,
  height: metrics.modificationMarkerSize,
  width: metrics.modificationMarkerSize,
}
