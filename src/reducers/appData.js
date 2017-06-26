// @flow
import ActionTypes from '../constants/ActionTypes';

export default function( state = {}, action ) {
  switch(action.type) {
    case ActionTypes.GetAppDataRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        success: '',
        error: ''
      });
    }
    case ActionTypes.GetAppDataRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error while getting App Data'
      })
    }
    case ActionTypes.GetAppDataFulfilled: {
      const payload = action.payload
      return Object.assign({}, state, {
        inProgress: false,
        error: '',
        success: 'Got App Data',
        datapoints: payload.datapoints,
        forms: payload.forms,
        topBar: payload.topBar,
        activeForm: payload.activeForm
      })
    }
    default:
      return state;
  }
}
