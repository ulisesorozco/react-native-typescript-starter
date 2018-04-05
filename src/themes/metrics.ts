const baseFontSize = 16
const typeScale = [3, 2.25, 1.5, 1.25, 1, 0.875, 0.75]
const baseSpacingUnit = baseFontSize

const fontSize = {
  one: baseFontSize * typeScale[0],
  two: baseFontSize * typeScale[1],
  three: baseFontSize * typeScale[2],
  four: baseFontSize * typeScale[3],
  five: baseFontSize * typeScale[4],
  six: baseFontSize * typeScale[5],
  seven: baseFontSize * typeScale[6],
}

// Spacing scale after
const spacing = {
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
const modificationMarkerSize = 20

const inputBarPadding = spacing.three
const inputBarLabelFontSize = fontSize.six
const inputBarTextFieldPadding = spacing.two
const inputBarTextFieldBottomPadding = spacing.zero
const inputBarTextFieldBorderBottomWidth = 1
const inputBarTextFieldFontSize = fontSize.three
const inputBarHeight =
  inputBarTextFieldFontSize +
  2 * inputBarPadding +
  inputBarTextFieldBorderBottomWidth +
  inputBarTextFieldBottomPadding +
  spacing.one // fudge factor

export default {
  baseFontSize,
  typeScale,
  baseSpacingUnit,
  fontSize,
  spacing,
  modificationMarkerSize,
  inputBarPadding,
  inputBarLabelFontSize,
  inputBarTextFieldPadding,
  inputBarTextFieldBottomPadding,
  inputBarTextFieldBorderBottomWidth,
  inputBarTextFieldFontSize,
  inputBarHeight,
}
