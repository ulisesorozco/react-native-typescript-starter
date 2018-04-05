import * as React from 'react'
import { Marker } from 'react-native-maps'
import { colors } from '../../themes'
import { Area } from '../../config/types'

export interface AreaMarkerProps {
  area: Area
  onMarkerPress?: () => void
}

export default function AreaMarker({ area, onMarkerPress }: AreaMarkerProps) {
  return (
    <Marker
      coordinate={area.centroid}
      title={area.name}
      onPress={onMarkerPress}
      pinColor={colors.logoBlue}
    />
  )
}
