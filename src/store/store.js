// @flow
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import InitialState from '../constants/InitialState';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  InitialState,
  compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  )
)

persistStore(store, { storage: AsyncStorage, blacklist: ['events', 'viewState', 'activeForm'] });

export default store;
// , logger
