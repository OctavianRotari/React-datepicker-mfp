import ActionTypes from '../constants/actionTypes';

export function setActiveForm(activeForm) {
  return dispatch => {
    dispatch(setActiveFormAction(activeForm))
  }
}

function setActiveFormAction(activeForm) {
  return {
    type: ActionTypes.SetActiveForm,
    activeForm
  }
}
