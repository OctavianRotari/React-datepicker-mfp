// @flow
import ActionTypes from '../constants/actionTypes'

export default function( state = {}, action ) {
  switch(action.type) {
    case ActionTypes.GetDatapointsRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        success: '',
        error: ''
      });
    }
    case ActionTypes.GetFormRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error while getting datapoints'
      })
    }
    case ActionTypes.GetDatapointFulfilled: {
      let { datapoint } = action;
      const { name } = datapoint;
      const newState = Object.assign({}, state, {
        inProgress: false,
        error: '',
        success: 'Got datapoint',
      });
      newState.collection = {};
      if( datapoint ) {
        if( state.collection ) {
          newState.collection = {
            ...state.collection,
              [name]: datapoint
          };
        } else {
          newState.collection = {
              [name]: datapoint
          };
        }
      }
      return newState;
    }
    default:
      return state;
  }
}
