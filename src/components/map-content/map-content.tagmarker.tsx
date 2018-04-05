// @flow
import * as React from 'react'
import { Marker } from 'react-native-maps'
import { tagAreaName, tagStatusColor } from '../../config/tag'
import { Tag } from '../../config/types'

export interface TagMarkerProps {
  tag: Tag
  onPress?: () => void
}

export default function TagMarker({ tag, onPress }: TagMarkerProps) {
  return (
    <Marker
      coordinate={tag.position}
      title={tag.name}
      description={tagAreaName(tag)}
      pinColor={tagStatusColor(tag)}
      onPress={onPress}
    />
  )
}
