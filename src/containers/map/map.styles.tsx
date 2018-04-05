import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { metrics } from '../../themes'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

export const map: ViewStyle = {
  flex: 1,
  width: metrics.screenWidth,
  height: metrics.screenHeight,
}
