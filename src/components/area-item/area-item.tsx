import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Area } from '../../config/types'
import * as screenStyles from './area-item.styles'

export interface AreaItemProps {
  area: Area
  onPress?: (area: Area) => void
}

const AreaItem = ({ area, onPress }: AreaItemProps) => {
  const onPressThis = () => {
    onPress(area)
  }

  return (
    <TouchableOpacity onPress={onPressThis}>
      <View style={screenStyles.listItem}>
        <Text style={screenStyles.listItemText}>{area.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default AreaItem
