// @flow
import ActionTypes from '../constants/actionTypes';
import RowComponentTypes from '../constants/rowComponentTypes';

export function selectValue(name, value, parentType) {
  const payload = {
    name: name,
    value: value,
    parentType: parentType
  }
  return dispatch => {
    return dispatch(registerSelectAction(payload));
  }
}

export function discardValue(name, value, parentType) {
  const payload = {
    name: name,
    value: value,
    parentType: parentType
  }
  return dispatch => {
    return dispatch(discardSelectAction(payload));
  }
}

function registerSelectAction(payload) {
  return {
    type: ActionTypes.RegisterSelectAction,
    payload
  }
}

function discardSelectAction(payload){
  return {
    type: ActionTypes.DiscardSelectAction,
    payload
  }
}