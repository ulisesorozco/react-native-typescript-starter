import { TextStyle } from 'react-native'
import { colors } from '../../../themes'

/**
 * All text will start off looking like this.
 */
const PRIMARY: TextStyle = {
  fontFamily: 'montserrat',
  color: colors.white,
  textAlign: 'center',
}
const SECONDARY: TextStyle = {
  fontFamily: 'omnes',
  color: colors.white,
  textAlign: 'center',
}

/**
 * All the variations of text styling within the app.
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  default: { ...PRIMARY, fontSize: 18 } as TextStyle,

  primaryTiny: { ...PRIMARY, fontSize: 10 } as TextStyle,
  primarySmall: { ...PRIMARY, fontSize: 12 } as TextStyle,
  primaryMedium: { ...PRIMARY, fontSize: 14 } as TextStyle,
  primaryMediumPlus: { ...PRIMARY, fontSize: 16 } as TextStyle,
  primaryRegular: { ...PRIMARY, fontSize: 18 } as TextStyle,
  primaryExRegular: { ...PRIMARY, fontSize: 20 } as TextStyle,
  primaryLarge: { ...PRIMARY, fontSize: 22 } as TextStyle,
  primaryExLarge: { ...PRIMARY, fontSize: 24 } as TextStyle,
  primaryXXLarge: { ...PRIMARY, fontSize: 30 } as TextStyle,

  secondaryTiny: { ...SECONDARY, fontSize: 10 } as TextStyle,
  secondarySmall: { ...SECONDARY, fontSize: 12 } as TextStyle,
  secondaryMedium: { ...SECONDARY, fontSize: 14 } as TextStyle,
  secondaryMediumPlus: { ...SECONDARY, fontSize: 16 } as TextStyle,
  secondaryRegular: { ...SECONDARY, fontSize: 18 } as TextStyle,
  secondaryExRegular: { ...SECONDARY, fontSize: 20 } as TextStyle,
  secondaryLarge: { ...SECONDARY, fontSize: 22 } as TextStyle,
  secondaryExLarge: { ...SECONDARY, fontSize: 24 } as TextStyle,
  secondaryXXLarge: { ...SECONDARY, fontSize: 30 } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresetNames = keyof typeof presets
