// @flow
import update from 'react-addons-update';
import _ from 'lodash';
import ActionTypes from '../constants/actionTypes';
import RowComponentTypes from '../constants/rowComponentTypes';

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.RegisterSelectAction: {
      if(action.payload.parentType === RowComponentTypes.TOGGLE){
        return {
          ...state, [action.payload.name]: action.payload.value
        }
      }
      const initialArray = state[action.payload.name] || [];
      const newArray = update(
        initialArray,
        {$push: [action.payload.value]}
      );
      return {
        ...state, [action.payload.name]: newArray
      }
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
