import ActionTypes from '../constants/ActionTypes';
import moment from 'moment';

export function createEvent(props) {
  const payload = {
    name: props.name,
    value: props.value,
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a")
  }
  return dispatch => {
    dispatch(createEventAction(payload));
  }
}

function createEventAction(payload) {
  return {
    type: ActionTypes.CreateEvent,
    payload
  }
}
