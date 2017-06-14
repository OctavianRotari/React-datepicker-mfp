// @flow
import ActionTypes from '../constants/actionTypes'
import database from '../database'

export function getDatapoints() {
  return dispatch => {
    dispatch(getDatapointsRequestedAction());
    return database.ref('/datapoints').once('value', snap => {
      const datapoints = snap.val();
      dispatch(getDatapointsFulfilledAction(datapoints));
    })
      .catch((error) => {
        console.log(error);
        dispatch(getDatapointsRejectedAction());
      });
  }
}

function getDatapointsRequestedAction() {
  return {
    type: ActionTypes.GetDatapointsRequested
  }
}

function getDatapointsRejectedAction() {
  return {
    type: ActionTypes.GetDatapointsRejected
  }
}

function getDatapointsFulfilledAction(datapoints) {
  return {
    type: ActionTypes.GetDatapointsFulfilled,
    datapoints
  }
}
