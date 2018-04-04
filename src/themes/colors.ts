const colorWithAlpha = (color: string, alpha: string): string => `${color}${alpha}`

const colors = {
  lightGray: '#aaaaaa',
  logoBlue: '#00A9E0',
  logoGray: '#505050',
  statusBlue: '#0074D9',
  statusGreen: '#2ECC40',
  statusGreenAlpha50: colorWithAlpha('#2ECC40', '80'),
  statusRed: '#FF4136',
  statusYellow: '#FFDC00',
  white: '#ffffff',
  nearlyWhite: '#f8f8f8',
}

export default colors
