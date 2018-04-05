// @flow
import * as React from 'react'
import { Polyline } from 'react-native-maps'
import { colors } from '../../themes'
import { Coordinate } from '../../config/types'

const strokeWidth = 3

export interface EditingPolylineProps {
  coordinates: Coordinate[]
}

const EditingPolyline = (props: EditingPolylineProps) => {
  return (
    <Polyline
      coordinates={props.coordinates}
      strokeColor={colors.logoBlue}
      strokeWidth={strokeWidth}
    />
  )
}

export default EditingPolyline
