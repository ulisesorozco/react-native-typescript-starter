import * as React from 'react'
import { FlatList, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Tag } from '../../config/types'
import { ItemSeparator, TagItem } from '../../components'
import TagActions from '../../actions/tag'
import * as screenStyles from './tag.styles'

const keyExtractor = (item: Tag) => item.id

export interface TagScreenProps extends NavigationScreenProps {
  data: Tag[]
  status: boolean
  tagsRequest?: () => void
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

  componentDidMount() {
    this.props.tagsRequest()
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
  data: state.tag.tags,
})

const mapDispatchToProps = dispatch => ({
  tagsRequest: () => dispatch(TagActions.tagsRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TagScreen)
