import { combineReducers } from 'redux';
import DataPointsReducer form './datapoints'

const rootReducer = combineReducers({
  dataPoints: DataPointsReducer
});
