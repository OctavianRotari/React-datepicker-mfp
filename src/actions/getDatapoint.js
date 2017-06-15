// @flow
import ActionTypes from '../constants/actionTypes'
import database from '../database'

export function getDatapoint(datapoint: string) {
  return dispatch => {
    dispatch(getDatapointRequestedAction());
    return database.ref(`/datapoints/${datapoint}`).once('value', snap => {
      const datapoint = snap.val();
      dispatch(getDatapointFulfilledAction(datapoint));
    })
      .catch((error) => {
        console.log(error);
        dispatch(getDatapointRejectedAction());
      });
  }
}

function getDatapointRequestedAction() {
  return {
    type: ActionTypes.GetDatapointRequested
  }
}

function getDatapointRejectedAction() {
  return {
    type: ActionTypes.GetDatapointRejected
  }
}

function getDatapointFulfilledAction(datapoint) {
  return {
    type: ActionTypes.GetDatapointFulfilled,
    datapoint
  }
}
