// @flow
import { combineReducers } from 'redux';
import SelectedValuesReducer from './selectedValue';
import AppDataReducer from './appData';

export default function reducer(state = {}, action) {
  return {
    appData: AppDataReducer(state.appData, action),
    viewState: SelectedValuesReducer(state.viewState, action)
  }
}
