import ActionTypes from '../constants/ActionTypes';

export function setActiveForm(activeForm, forms) {
  payload = forms[activeForm];
  return {
    type: ActionTypes.SetActiveForm,
    payload
  }
}
