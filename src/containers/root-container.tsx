import * as React from 'react'
import { View } from 'react-native'
import ReduxNavigation from '../navigation/redux-navigation'

interface RootProps {}

interface RootState {
  isReady: boolean
}

class RootContainer extends React.Component<RootProps, RootState> {
  constructor(props) {
    super(props)
    this.state = { isReady: false }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  render() {
    const { isReady } = this.state
    return <View style={{ flex: 1 }}>{isReady && <ReduxNavigation />}</View>
  }
}

export default RootContainer
