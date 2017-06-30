import ActionTypes from '../constants/ActionTypes';

export function setActiveForm(activeForm, forms) {
  return dispatch => {
    payload = forms[activeForm];
    dispatch(setActiveFormAction(payload))
  }
}

function setActiveFormAction(payload) {
  return {
    type: ActionTypes.SetActiveForm,
    payload
  }
}
