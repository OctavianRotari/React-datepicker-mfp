// @flow
import update from 'react-addons-update';
import _ from 'lodash';
import ActionTypes from '../constants/actionTypes';

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.RegisterSelectAction: {
      return _.omit(state, action.payload.name)
    }
    case ActionTypes.DiscardSelectAction: {
      const values = state[action.payload.name];
      const index = values.indexOf(action.payload.value)
      const newValues = update(
        state[action.payload.name],
        {$splice: [[index, 1]]}
      )
      return {
        ...state, [action.payload.name]: newValues
      }
    }
    default:
      return state;
  }
}
