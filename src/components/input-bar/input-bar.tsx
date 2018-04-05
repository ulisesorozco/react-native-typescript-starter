import * as React from 'react'
import { TextInput, View } from 'react-native'
import * as screenStyles from './input-bar.styles'

export interface InputBarProps {
  title?: string
  placeholder?: string
  value?: string
  onChangeText?: (e: string) => void
}

export default function InputBar(props: InputBarProps) {
  return (
    <View style={screenStyles.inputBar}>
      <TextInput style={screenStyles.inputBarTextField} {...props} />
    </View>
  )
}
