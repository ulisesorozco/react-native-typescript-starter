import * as React from 'react'
import { FlatList, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { AreaItem, ItemSeparator } from '../../components'
import AreaActions from '../../actions/area'
import { Area, State } from '../../config/types'
import * as screenStyles from './area.styles'

const keyExtractor = (item: Area) => item.id

export interface AreaScreenProps extends NavigationScreenProps {
  areas: Area[]
  status: boolean
  areasRequest?: () => void
  onPressItem?: (area: Area) => void
}

export interface AreaScreenState {
  isBusy: boolean
}

class AreaScreen extends React.Component<AreaScreenProps, AreaScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  componentDidMount() {
    this.props.areasRequest()
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <FlatList
          data={this.props.areas}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => {
            return <AreaItem area={item} onPress={this.props.onPressItem} />
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  status: state.area.status,
  areas: state.area.areas,
})

const mapDispatchToProps = dispatch => ({
  areasRequest: () => dispatch(AreaActions.areasRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AreaScreen)
