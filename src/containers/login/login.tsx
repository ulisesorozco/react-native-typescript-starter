import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import AppActions from '../../actions/app'
import * as screenStyles from './login.styles'

export interface LoginScreenProps {
  navigation: NavigationParams
  status: boolean
  loginRequest?: () => void
}

export interface LoginScreenState {
  isBusy: boolean
}

class Login extends React.Component<LoginScreenProps, LoginScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }
  toLogin = () => {
    this.props.navigation.navigate('launch')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity onPress={this.toLogin}>
          <Text>TO LAUNCH</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
