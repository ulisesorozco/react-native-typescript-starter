import * as React from 'react'
import { Provider } from 'react-redux'
import RootContainer from './root-container'
import createStore from '../reducers'

// create our store
const store = createStore()

export interface Props {}

export interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
