import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { colors, metrics } from '../../themes'

export const ROOT: ViewStyle = {
  flex: 1,
}

export const tagListItem: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: metrics.spacing.three,
  width: metrics.screenWidth,
}

export const tagListItemIcon: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: metrics.spacing.three,
}

export const tagListItemTitle: ViewStyle = {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'flex-start',
}

export const tagListItemTitleText: TextStyle = {
  fontSize: metrics.fontSize.four,
}

export const tagListItemSubtitleText: TextStyle = {
  color: colors.logoGray,
  fontSize: metrics.fontSize.five,
  marginBottom: metrics.spacing.one,
}

export const tagListItemTitleLastSeen: TextStyle = {
  color: colors.logoGray,
  fontSize: metrics.fontSize.six,
}
