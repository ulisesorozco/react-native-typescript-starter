import * as React from 'react'
import { Polygon as MapViewPolygon } from 'react-native-maps'
import { colors } from '../../themes'
import { Coordinate } from '../../config/types'

const fillColor = colors.statusGreenAlpha50
const strokeColor = colors.logoBlue
const strokeWidth = 3

export interface PolygonProps {
  coordinates: Coordinate[]
  identifier: string
}

export default function Polygon({ identifier, coordinates }: PolygonProps) {
  return (
    <MapViewPolygon
      coordinates={coordinates}
      fillColor={fillColor}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
    />
  )
}
