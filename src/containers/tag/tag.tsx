import * as React from 'react'
import { FlatList, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Tag } from '../../config/types'
import { ItemSeparator, TagItem } from '../../components'
import AppActions from '../../actions/app'
import * as screenStyles from './tag.styles'

const keyExtractor = (item: Tag) => item.id

export interface TagScreenProps extends NavigationScreenProps {
  data: Tag[]
  status: boolean
  loginRequest?: () => void
  onPressItem?: (tag: Tag) => void
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
    this.props.navigation.navigate('mapScreen')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <FlatList
          data={this.props.data}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => {
            return <TagItem tag={item} onPress={this.props.onPressItem} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TagScreen)
