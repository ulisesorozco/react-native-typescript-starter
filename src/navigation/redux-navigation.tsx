import * as React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigation from './app-navigation'

// here is our redux-aware our smart component
function ReduxNavigation(props) {
  const { dispatch, nav } = props
  const middleware = createReactNavigationReduxMiddleware('root', state => nav)
  const addListener = createReduxBoundAddListener('root')
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav,
    addListener,
  })

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
