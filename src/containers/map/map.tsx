import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
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
    this.props.navigation.navigate('areaScreen')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity onPress={this.toArea}>
          <Text>MAP SCREEN</Text>
        </TouchableOpacity>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            width: 300,
            height: 500,
          }}
        />
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
