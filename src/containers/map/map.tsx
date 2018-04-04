import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import AppActions from '../../actions/app'
import * as screenStyles from './map.styles'

export interface MapScreenProps extends NavigationScreenProps {
  status: boolean
  loginRequest?: () => void
}

export interface MapScreenState {
  isBusy: boolean
}

class MapScreen extends React.Component<MapScreenProps, MapScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  toArea = () => {
    this.props.navigation.navigate('areas')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity onPress={this.toArea}>
          <Text>TO AREA</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  status: state.app.status,
})

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(AppActions.loginRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
