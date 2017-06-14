import { combineReducers } from 'redux';
import DatapointsReducer from './datapoints'
import FormReducer from './form'

const rootReducer = combineReducers({
  datapoints: DatapointsReducer,
  form: FormReducer
});

export default rootReducer;
