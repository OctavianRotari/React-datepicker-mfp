// @flow
import update from 'react-addons-update';
import _ from 'lodash';
import ActionTypes from '../constants/actionTypes';
import RowComponentTypes from '../constants/rowComponentTypes';

function buildEvent(state = [], action) {
  return [
    ...state,
    {
      value: action.payload.value,
      timestamp: action.payload.timestamp
    }
  ]
}

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
    case ActionTypes.CreateNodeAction: {
      let newObject = {};
      for(datapoint in action.payload.datapoints){
        newObject[datapoint] = {};
      }
      return Object.assign({}, state, newObject)
    }
    case ActionTypes.RegisterSelectAction: {
      let eventsArr;
      const { name } = action.payload;
      if(!state[name].events) {
        eventsArr = [];
      } else {
        eventsArr = state[name].events;
      }
      const newObject = {
        value: buildValue(state, action),
        events: buildEvent(eventsArr, action)
      };
      return { ...state,  [name]: newObject };
    }
    case ActionTypes.DiscardSelectAction: {
      const { name } = action.payload;
      const newObject = {
        value: discardValue(state[name].value, action),
        events: state[name].events
      }
      return { ...state, [name]: newObject };
    }
    default:
      return state;
  }
}
