import ActionTypes from '../constants/ActionTypes';

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
