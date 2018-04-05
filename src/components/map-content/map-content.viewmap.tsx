import * as React from 'react'
import { View } from 'react-native'
import AreaMarker from './map-content.areamarker'
import Polygon from './map-content.polygon'
import TagMarker from './map-content.tagmarker'
import { coordinatesFromArea } from '../../utils/area'
import { Area, Coordinate, Tag } from '../../config/types'

const identifier = (area?: Area): string => (area != null ? area.identifier.toString() : '-1')

export interface ViewMapContentProps {
  area?: Area
  areas: Area[]
  onAreaMarkerPress?: (area: Area) => void
  onTagMarkerPress?: (tag: Tag) => void
  tag?: Tag
}

export default function ViewMapContent(props: ViewMapContentProps) {
  const { area, areas, tag, onAreaMarkerPress, onTagMarkerPress } = props
  const coordinates: Coordinate[] = coordinatesFromArea(area)
  return (
    <View>
      {areas.map(area => (
        <AreaMarker area={area} key={area.id} onMarkerPress={onAreaMarkerPress(area)} />
      ))}
      {coordinates.length > 0 && (
        <Polygon coordinates={coordinates} identifier={identifier(area)} />
      )}
      {tag != null && <TagMarker tag={tag} onPress={onTagMarkerPress(tag)} />}
    </View>
  )
}
