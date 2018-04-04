import { Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Launch from '../containers/launch'
import Login from '../containers/login'

const MyTransitionSpec = {
  duration: 500,
  easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: Animated.timing,
}

const ViewTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const translateX = position.interpolate({
    inputRange,
    outputRange: [50, 0, 0, 0],
  })

  return { transform: [{ translateX }] }
}

const ModalTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const translateX = 0
  const translateY = position.interpolate({
    inputRange,
    outputRange: [50, 0, 0, 0],
  })

  return {
    transform: [{ translateX }, { translateY }],
  }
}

const FadeTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1, 0],
  })

  return { opacity }
}

const TransitionConfiguration = () => {
  return {
    // Define scene interpolation, eq. custom transition
    screenInterpolator: sceneProps => {
      const { position, scene } = sceneProps
      const { index, route } = scene
      const params = route.params || {}
      const transition = params.transition || 'default'

      return {
        viewTransition: ViewTransition(index, position),
        modalTransition: ModalTransition(index, position),
        fadeTransition: FadeTransition(index, position),
        default: ViewTransition(index, position),
      }[transition]
    },
  }
}

const AppNavigation = StackNavigator(
  {
    launch: {
      screen: Launch,
      navigationOptions: {
        header: null,
      },
    },
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    // Default config for all screens
    // headerMode: 'none',
    initialRouteName: 'launch',
    mode: 'card',
    navigationOptions: {},
    transitionConfig: TransitionConfiguration,
  },
)

export default AppNavigation
