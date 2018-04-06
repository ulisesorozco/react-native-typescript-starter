import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Tag } from '../../config/types'
import { humanDateTime } from '../../utils/format'
import { tagAreaName, tagStatusColor } from '../../config/tag'
import * as screenStyles from './tag-item.styles'

export interface TagItemProps {
  tag: Tag
  onPress?: (tag: Tag) => void
}

const TagItem = ({ tag, onPress }: TagItemProps) => {
  const onPressThis = () => {
    onPress(tag)
  }

  return (
    <TouchableOpacity onPress={onPressThis}>
      <View style={screenStyles.tagListItem}>
        <View style={screenStyles.tagListItemIcon}>
          <Icon color={tagStatusColor(tag)} name="tag" size={30} />
        </View>
        <View style={screenStyles.tagListItemTitle}>
          <Text style={screenStyles.tagListItemTitleText}>{tag.name}</Text>
          <Text style={screenStyles.tagListItemSubtitleText}>{tagAreaName(tag)}</Text>
          <Text style={screenStyles.tagListItemTitleLastSeen}>
            Last seen {humanDateTime(tag.updatedAt)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TagItem
