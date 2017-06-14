// @flow
import ActionTypes from '../constants/actionTypes'
import database from '../database'

export function getForm(name) {
  return dispatch => {
    dispatch(getFormRequestedAction());
    return database.ref(`/forms/${name}`).once('value', snap => {
      const form = snap.val()
      dispatch(getFormFulfilledAction(form));
    })
      .catch((error) => {
        console.log(error);
        dispatch(getFormRejectedAction());
      });
  }
}

function getFormRequestedAction() {
  return {
    type: ActionTypes.GetFormRequested
  }
}

function getFormRejectedAction() {
  return {
    type: ActionTypes.GetFormRejected
  }
}

function getFormFulfilledAction(form) {
  return {
    type: ActionTypes.GetFormFulfilled,
    form
  }
}
