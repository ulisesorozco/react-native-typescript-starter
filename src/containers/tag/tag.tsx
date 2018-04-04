import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import AppActions from '../../actions/app'
import * as screenStyles from './tag.styles'

export interface TagScreenProps extends NavigationScreenProps {
  status: boolean
  loginRequest?: () => void
}

export interface TagScreenState {
  isBusy: boolean
}

class TagScreen extends React.Component<TagScreenProps, TagScreenState> {
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
          <Text>TO MAP</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(TagScreen)
