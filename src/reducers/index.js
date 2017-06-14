import { combineReducers } from 'redux';
import DatapointReducer from './datapoint'
import FormReducer from './form'

const rootReducer = combineReducers({
  datapoints: DatapointReducer,
  forms: FormReducer
});

export default rootReducer;
