export const baseFontSize = 16
export const typeScale = [3, 2.25, 1.5, 1.25, 1, 0.875, 0.75]
export const baseSpacingUnit = baseFontSize

export const fontSize = {
  one: baseFontSize * typeScale[0],
  two: baseFontSize * typeScale[1],
  three: baseFontSize * typeScale[2],
  four: baseFontSize * typeScale[3],
  five: baseFontSize * typeScale[4],
  six: baseFontSize * typeScale[5],
  seven: baseFontSize * typeScale[6],
}

// Spacing scale after
export const spacing = {
  zero: 0,
  one: baseSpacingUnit * 0.25,
  two: baseSpacingUnit * 0.5,
  three: baseSpacingUnit * 1,
  four: baseSpacingUnit * 2,
  five: baseSpacingUnit * 4,
  six: baseSpacingUnit * 8,
  seven: baseSpacingUnit * 16,
}

// View-specific values
export const modificationMarkerSize = 20

export const inputBarPadding = spacing.three
export const inputBarLabelFontSize = fontSize.six
export const inputBarTextFieldPadding = spacing.two
export const inputBarTextFieldBottomPadding = spacing.zero
export const inputBarTextFieldBorderBottomWidth = 1
export const inputBarTextFieldFontSize = fontSize.three
export const inputBarHeight =
  inputBarTextFieldFontSize +
  2 * inputBarPadding +
  inputBarTextFieldBorderBottomWidth +
  inputBarTextFieldBottomPadding +
  spacing.one // fudge factor
