import * as React from 'react'
import AreaChangesMapContent from './map-content.areachanges'
import ViewMapContent from './map-content.viewmap'
import { Area, AreaChanges, MapMode, PressEvent, Tag } from '../../config/types'

export interface MapContentProps {
  area?: Area
  areas: Area[]
  mode: MapMode
  areaChanges?: AreaChanges
  modifyAreaCoordinate?: (PressEvent: number) => void
  onAreaMarkerPress?: (Area) => void
  onTagMarkerPress?: (Tag) => void
  tag?: Tag
}

export default function MapContent(props: MapContentProps) {
  const {
    area,
    areas,
    mode,
    areaChanges,
    onAreaMarkerPress,
    modifyAreaCoordinate,
    onTagMarkerPress,
    tag,
  } = props

  switch (mode) {
    case 'create':
    case 'edit':
      return (
        <AreaChangesMapContent
          areaChanges={areaChanges}
          modifyAreaCoordinate={modifyAreaCoordinate}
        />
      )
    default:
      return (
        <ViewMapContent
          area={area}
          areas={areas}
          tag={tag}
          onAreaMarkerPress={onAreaMarkerPress}
          onTagMarkerPress={onTagMarkerPress}
        />
      )
  }
}
