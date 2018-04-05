import * as React from 'react'
import { Animated } from 'react-native'

export interface SlideDownProps {
  duration?: number
  height?: number
  marginTop?: number
  children?: React.ReactNode
}

export interface SlideDownState {
  marginTop: Animated.Value
}

export default class SlideDown extends React.Component<SlideDownProps, SlideDownState> {
  public static defaultProps: Partial<SlideDownProps> = {
    duration: 500,
    marginTop: 0,
  }

  constructor(props) {
    super(props)
    this.state = {
      marginTop: new Animated.Value(-props.height),
    }
  }

  componentDidMount() {
    Animated.spring(this.state.marginTop, {
      toValue: 0,
      duration: this.props.duration,
    }).start()
  }

  render() {
    return (
      <Animated.View style={{ marginTop: this.state.marginTop }}>
        {this.props.children}
      </Animated.View>
    )
  }
}
