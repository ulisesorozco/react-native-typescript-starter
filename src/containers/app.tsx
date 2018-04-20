import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootContainer from './root-container'
import { store, persistor } from '../reducers'

export interface Props {}

export interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
