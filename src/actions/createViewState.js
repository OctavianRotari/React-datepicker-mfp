import ActionTypes from '../constants/actionTypes';

export function createViewState(datapoints) {
  return dispatch => {
    dispatch(createViewStateAction(datapoints))
  }
}

function createViewStateAction(datapoints) {
  return {
    type: ActionTypes.CreateViewStateAction,
    datapoints
  }
}
