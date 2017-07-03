// @flow
import ActionTypes from '../constants/ActionTypes';

export function selectValue(props) {
  const payload = {
    name: props.name,
    value: props.value,
    unit: props.unit,
    control: props.control,
    selected: true
  }
  return dispatch => {
    return dispatch(registerSelectAction(payload));
  }
}

export function discardValue(props) {
  const payload = {
    name: props.name,
    value: props.value,
    unit: props.unit,
    control: props.control,
    selected: false
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
