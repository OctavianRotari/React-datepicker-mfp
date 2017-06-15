// @flow
import { combineReducers } from 'redux';
import DatapointReducer from './datapoint'
import FormReducer from './form';
import SelectedValuesReducer from './selectedValue';

const rootReducer = combineReducers({
  datapoints: DatapointReducer,
  forms: FormReducer,
  selectedValues: SelectedValuesReducer
});

export default rootReducer;
