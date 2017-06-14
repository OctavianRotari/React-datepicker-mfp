// @flow
import _ from 'lodash';
import ActionTypes from '../constants/actionTypes'

export default function( state = {}, action ) {
  switch(action.type) {
    case ActionTypes.GetFormRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      })
    }
    case ActionTypes.GetFormRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting form.',
      })
    }
    case ActionTypes.GetFormFulfilled: {
      const { children, name, type } = action.form;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got form',
        name,
        type
      });
      newState.sections = [];
      if( children ) {
        newState.sections = _.mapKeys(children, 'name')
      }
      return newState;
    }
    default:
      return state;
  }
}
