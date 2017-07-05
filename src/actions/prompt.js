import ActionTypes from '../constants/ActionTypes';

export function markDone(name) {
  const payload = {
    name: name
  }

  return dispatch => {
    return dispatch(markDoneAction(payload));
  }
}

function markDoneAction(payload) {
  return {
    type: ActionTypes.RemovePrompt,
    payload
  }
}
