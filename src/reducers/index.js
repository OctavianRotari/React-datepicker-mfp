import { combineReducers } from 'redux';
import DataPointsReducer from './datapoints'

const rootReducer = combineReducers({
  dataPoints: DataPointsReducer
});

export default rootReducer;
