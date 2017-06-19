// @flow
import update from 'react-addons-update';
import _ from 'lodash';
import ActionTypes from '../constants/actionTypes';
import RowComponentTypes from '../constants/rowComponentTypes';

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.RegisterSelectAction: {
      const { name, value, parentType } = action.payload; 
      if(parentType === RowComponentTypes.SEGMENTED){
        const initialArray = state[name] || [];
        const newArray = update(
          initialArray,
          {$push: [value]}
        );
        return {
          ...state, [name]: newArray
        }
      }
      return {
        ...state, [name]: value
      }
    }
    case ActionTypes.DiscardSelectAction: {
      const { name, value, parentType } = action.payload; 
      if(parentType === RowComponentTypes.SEGMENTED){
        const values = state[name];
        const index = values.indexOf(value)
        const newValues = update(
          state[name],
          {$splice: [[index, 1]]}
        )
        return {
          ...state, [name]: newValues
        }
      }
      return {
        ...state, [name]: null
      }
    }
    default:
      return state;
  }
}
