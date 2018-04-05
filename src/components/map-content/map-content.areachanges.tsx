import * as React from 'react'
import { View } from 'react-native'
import Polygon from './map-content.polygon'
import AreaCoordinateMarker from './map-content.areacoordinate'
import { AreaChanges, Coordinate, PressEvent } from '../../config/types'

const coordinateKey = ({ latitude, longitude }: Coordinate, index: number): string =>
  index.toString() + '(' + latitude.toString() + ',' + longitude.toString() + ')'

const coordinatesKey = (coordinates: Coordinate[]): string =>
  '[' + coordinates.map(coordinateKey).join(',') + ']'

export interface AreaChangesMapContentProps {
  areaChanges?: AreaChanges
  modifyAreaCoordinate?: (PressEvent: number) => void
}

export interface AreaChangesMapContentState {
  polygonCoordinates: Coordinate[]
}

export default class AreaChangesMapContent extends React.Component<
  AreaChangesMapContentProps,
  AreaChangesMapContentState
> {
  constructor(props) {
    super(props)
    const polygonCoordinates = props.areaChanges != null ? props.areaChanges.coordinates : []
    this.state = { polygonCoordinates }
  }

  modifyPolygonCoordinate(index: number, coordinate: Coordinate) {
    const polygonCoordinates = [
      ...this.state.polygonCoordinates.slice(0, index),
      coordinate,
      ...this.state.polygonCoordinates.slice(index + 1),
    ]
    console.log(polygonCoordinates)
    this.setState({
      polygonCoordinates,
    })
  }

  render() {
    const { modifyAreaCoordinate, areaChanges } = this.props
    const { polygonCoordinates } = this.state
    const coordinates = areaChanges != null ? areaChanges.coordinates : []
    // Google Maps crashes if a polygon has no coordinates
    if (coordinates.length > 0) {
      return (
        <View>
          <Polygon
            coordinates={polygonCoordinates}
            identifier={coordinatesKey(polygonCoordinates)}
          />
          {coordinates.map((coordinate, index) => (
            <AreaCoordinateMarker
              coordinate={coordinate}
              key={coordinateKey(coordinate, index)}
              onDragEnd={modifyAreaCoordinate(index)}
              onDrag={({ nativeEvent: { coordinate: coordinate } }) => {
                console.log({ index, coordinate })
                this.modifyPolygonCoordinate(index, coordinate)
              }}
            />
          ))}
        </View>
      )
    } else {
      return <View />
    }
  }
}
