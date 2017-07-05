// @flow
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import InitialState from '../constants/InitialState';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  InitialState,
  compose(
    applyMiddleware(thunk, sagaMiddleware),
    autoRehydrate()
  )
)

sagaMiddleware.run(rootSaga);

persistStore(store, { storage: AsyncStorage, blacklist: ['events', 'viewState', 'activeForm', 'activePrompts'] });

export default store;
// , logger
