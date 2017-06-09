// @flow
import { createStore } from 'redux'
import RootReducer from '../reducers/'

export default function configureStore () {
  return createStore(RootReducer)
};
