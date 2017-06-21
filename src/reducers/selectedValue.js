// @flow
import update from 'react-addons-update';
import _ from 'lodash';
import ActionTypes from '../constants/actionTypes';
import RowComponentTypes from '../constants/rowComponentTypes';

function buildEvent(state = [], action) {
  switch(action.type) {
    case ActionTypes.RegisterSelectAction: {
      return [
        ...state,
        {
          value: action.payload.value,
          timestamp: action.payload.timestamp
        }
      ]
    }
    default:
      return state;
  }
}

function buildValue(state, action) {
  switch(action.type) {
    case ActionTypes.RegisterSelectAction: {
      const { name, value, parentType } = action.payload;
      if(parentType === RowComponentTypes.SEGMENTED){
        const initialArray = state[name] ? state[name].value : [];
        const newArray = update(
          initialArray,
          {$push: [value]}
        );
        return newArray;
      }
      return value;
    }
  }
}

function discardValue(value, action){
  switch(action.type) {
    case ActionTypes.DiscardSelectAction: {
      const { name, value, parentType } = action.payload; 
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
  }
}

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.RegisterSelectAction: {
      let eventsArr;
      const { name } = action.payload;

      if(!state[name]) {
        eventsArr = [];
      } else {
        eventsArr = state[name].events;
      }

      return Object.assign({}, state, {
        ...state,
        [action.payload.name]: {
          value: buildValue(state, action),
          events: buildEvent(eventsArr, action)
        }
      })
    }
    case ActionTypes.DiscardSelectAction: {
      return Object.assign({}, state, {
        ...state,
        [action.payload.name]: {
          value: discardValue(state[name].value, action),
          events: state[name].events
        }
      })
    }
    default:
      return state;
  }
}
