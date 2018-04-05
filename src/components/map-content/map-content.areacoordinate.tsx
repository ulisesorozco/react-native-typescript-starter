import * as React from 'react'
import { View } from 'react-native'
import { Marker } from 'react-native-maps'
import { Coordinate } from '../../config/types'
import * as screenStyles from './map-content.styles'

export interface AreaCoordinateMarkerProps {
  coordinate: Coordinate
}

export default function AreaCoordinateMarker(props: AreaCoordinateMarkerProps) {
  return (
    <Marker draggable anchor={{ x: 0.5, y: 0.5 }} {...props}>
      <View style={screenStyles.mapAreaCoordinateMarker} />
    </Marker>
  )
}
