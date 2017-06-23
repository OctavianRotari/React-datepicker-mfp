// @flow
import ActionTypes from '../constants/actionTypes';
import database from '../database';
import { createViewState } from './createViewState';

export function getAppData() {
  return dispatch => {
    dispatch(getAppDataRequestedAction());
    return database.ref('/appData').once('value', span => {
      const payload = span.val();
      dispatch(getAppDataFulfilledAction(payload));
      dispatch(createViewState(payload.datapoints));
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
