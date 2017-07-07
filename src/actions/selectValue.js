// @flow
import ActionTypes from '../constants/ActionTypes';

export function selectValue(props) {
  const payload = {
    name: props.name,
    value: props.value,
    control: props.control,
    selected: true
  }
  return {
    type: ActionTypes.RegisterSelectAction,
    payload
  }
}

export function discardValue(props) {
  const payload = {
    name: props.name,
    value: props.value,
    control: props.control,
    selected: false
  }
  return {
    type: ActionTypes.DiscardSelectAction,
    payload
  }
}
