import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './createStore'
import rootSaga from '../sagas'
import ReduxPersist from '../config/redux-persist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./navigation').reducer,
  app: require('./app').reducer,
  area: require('./area').reducer,
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
