// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, logger)
)

export default store;
