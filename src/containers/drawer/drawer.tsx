import * as React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import { DrawerItems, NavigationScreenProps } from 'react-navigation'

export interface AreaScreenProps extends NavigationScreenProps<{}> {
  status: boolean
  loginRequest?: () => void
}

export interface AreaScreenState {
  isBusy: boolean
}

export default class AreaScreen extends React.Component<AreaScreenProps, AreaScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  toMap = () => {
    this.props.navigation.navigate('map')
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView>
          <Text>TAG</Text>
          <DrawerItems {...this.props} />
          <Text>Version 1.0</Text>
        </SafeAreaView>
      </ScrollView>
    )
  }
}
