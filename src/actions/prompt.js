import ActionTypes from '../constants/ActionTypes';

export function markDone(name) {
  const payload = {
    name: name
  }
  return {
    type: ActionTypes.RemovePrompt,
    payload
  }
}
