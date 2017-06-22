import ActionTypes from '../constants/actionTypes';
import moment from 'moment';

export function createEvent(name, value) {
  const payload = {
    name: name,
    value: value,
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
