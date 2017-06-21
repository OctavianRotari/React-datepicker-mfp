// @flow
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';

const InitialState = {
  appData: {},
  viewState: {}
}

const store = createStore(
  rootReducer,
  InitialState,
  compose(
    // autoRehydrate(),
    applyMiddleware(thunk, logger)
  )
)

persistStore(store, { storage: AsyncStorage });

export default store;
