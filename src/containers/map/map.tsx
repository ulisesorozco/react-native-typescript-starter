import * as React from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { equals } from 'ramda'
import MapView from 'react-native-maps'
import { InputBar, SlideDown } from '../../components'
import AppActions from '../../actions/app'
import Map from './map.content'
import {
  Area,
  AreaChanges,
  Dispatch,
  Region,
  MapMode,
  MapType,
  PressEvent,
  State,
  Tag,
} from '../../config/types'
import { inputBarHeight } from '../../themes/metrics'
import * as screenStyles from './map.styles'

export interface MapScreenProps extends NavigationScreenProps {
  area?: Area
  areas?: Area[]
  lastRegion?: Region
  mapType?: MapType
  mode?: MapMode
  areaChanges?: AreaChanges
  areaChangesName?: string
  tag?: Tag
  status?: boolean
  navigateToArea?: (area: Area) => void
  navigateToTag?: (tag: Tag) => void
  modifyAreaCoordinate?: (PressEventHandler: number) => void
  onAreaNameChanged?: (name: string) => void
  onLongPress?: (PressEventHandler: MapScreen) => void
  onPress?: (PressEventHandler: MapScreen) => void
  saveRegion?: (region: Region) => void
  loginRequest?: () => void
}

export interface MapScreenState {
  isBusy: boolean
}

class MapScreen extends React.Component<MapScreenProps, MapScreenState> {
  public static defaultProps: Partial<MapScreenProps> = {
    mode: 'default',
    navigateToArea: (e: Area) => {},
    navigateToTag: (e: Tag) => {},
    modifyAreaCoordinate: (e: number) => {},
    onAreaNameChanged: (e: string) => {},
    onLongPress: (e: MapScreen) => {},
    onPress: (e: MapScreen) => {},
    saveRegion: (e: Region) => {},
  }

  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  inputBarPlaceholder = (mode: MapMode) => {
    if (equals(mode, 'edit')) {
      return 'Edit area'
    }
    return 'New area'
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <StatusBar />
        {(equals(this.props.mode, 'create') || equals(this.props.mode, 'edit')) && (
          <SlideDown height={inputBarHeight}>
            <InputBar
              onChangeText={this.props.onAreaNameChanged}
              placeholder={this.inputBarPlaceholder(this.props.mode)}
              value={this.props.areaChangesName}
            />
          </SlideDown>
        )}
        <Map
          area={this.props.area}
          areas={this.props.areas}
          lastRegion={this.props.lastRegion}
          mapType={this.props.mapType}
          mode={this.props.mode}
          navigateToArea={this.props.navigateToArea}
          navigateToTag={this.props.navigateToTag}
          areaChanges={this.props.areaChanges}
          modifyAreaCoordinate={this.props.modifyAreaCoordinate}
          onLongPress={this.props.onLongPress}
          onPress={this.props.onPress}
          saveRegion={this.props.saveRegion}
          tag={this.props.tag}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  status: state.app.status,
  area: state.map.area,
  areas: state.map.areas,
  areaChanges: state.map.areaChanges,
  lastRegion: state.map.lastRegion,
  mode: state.map.mode,
})

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(AppActions.loginRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
