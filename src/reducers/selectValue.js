// @flow
import update from 'react-addons-update';
import _ from 'lodash';
import ActionTypes from '../constants/actionTypes';
import RowComponentTypes from '../constants/rowComponentTypes';

function buildValue(state, action) {
  const { name, value, parentType } = action.payload;
  if(parentType === RowComponentTypes.SEGMENTED){
    const initialArray = state[name].value ? state[name].value : [];
    const newArray = update(
      initialArray,
      {$push: [value]}
    );
    return newArray;
  }
  return value;
}

function discardValue(value, action){
  const { parentType } = action.payload;
  if(parentType === RowComponentTypes.SEGMENTED){
    const index = value.indexOf(value)
    const newValues = update(
      value,
      {$splice: [[index, 1]]}
    )
    return newValues;
  }
  return null
}

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.RegisterSelectAction: {
      const { name } = action.payload;
      const newObject = {
        value: buildValue(state, action),
      };
      console.log(newObject);
      console.log('state', state);
      return { ...state,  [name]: newObject };
    }
    case ActionTypes.DiscardSelectAction: {
      const { name } = action.payload;
      const newObject = {
        value: discardValue(state[name].value, action)
      }
      return { ...state, [name]: newObject };
    }
    default:
      return state;
  }
}
