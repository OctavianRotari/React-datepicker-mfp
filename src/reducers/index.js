// @flow
import { combineReducers } from 'redux';
import SelectedValuesReducer from './selectedValue';
import AppDataReducer from './appData';

const rootReducer = combineReducers({
  selectedValues: SelectedValuesReducer,
  appData: AppDataReducer
});

export default rootReducer;
