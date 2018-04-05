import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { colors, metrics } from '../../themes'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

export const inputBar: ViewStyle = {
  flex: 0,
  flexDirection: 'column-reverse',
  alignItems: 'flex-start',
  backgroundColor: colors.nearlyWhite,
  padding: metrics.inputBarPadding,
}

export const inputBarTextField: TextStyle = {
  flex: 0,
  borderBottomWidth: metrics.inputBarTextFieldBorderBottomWidth,
  borderBottomColor: colors.lightGray,
  color: colors.logoGray,
  fontSize: metrics.inputBarTextFieldFontSize,
  marginRight: metrics.inputBarTextFieldPadding,
  width: '100%',
}
