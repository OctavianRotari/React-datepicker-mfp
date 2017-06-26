import ActionTypes from '../constants/ActionTypes';

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
