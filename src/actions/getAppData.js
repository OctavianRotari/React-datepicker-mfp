// @flow
import ActionTypes from '../constants/ActionTypes';
import database from '../database';
import { createViewState } from './createViewState';
import { setActiveForm } from './setActiveForm';

export function getAppData() {
  return dispatch => {
    dispatch(getAppDataRequestedAction());
    return database.ref('/appData').once('value', span => {
      const payload = span.val();
      dispatch(getAppDataFulfilledAction(payload));
      dispatch(createViewState(payload.datapoints));
      dispatch(setActiveForm(payload.activeForm))
    })
      .catch((error) => {
        console.log(error);
        dispatch(getAppDataRejectedAction());
      })
  }
}

function getAppDataRequestedAction() {
  return {
    type: ActionTypes.GetAppDataRequested
  }
}

function getAppDataRejectedAction() {
  return {
    type: ActionTypes.GetAppDataRejected
  }
}

function getAppDataFulfilledAction(payload) {
  return {
    type: ActionTypes.GetAppDataFulfilled,
    payload
  }
}
