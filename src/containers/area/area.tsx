import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import AppActions from '../../actions/app'
import * as screenStyles from './area.styles'

export interface AreaScreenProps extends NavigationScreenProps {
  status: boolean
  loginRequest?: () => void
}

export interface AreaScreenState {
  isBusy: boolean
}

class AreaScreen extends React.Component<AreaScreenProps, AreaScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  toMap = () => {
    this.props.navigation.navigate('map')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity onPress={this.toMap}>
          <Text>AREA SCREEN</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AreaScreen)
