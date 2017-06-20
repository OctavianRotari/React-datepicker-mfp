// @flow
const actionTypes = {
  GetDatapointRequested: 'GET_DATAPOINTS_REQUESTED',
  GetDatapointRejected: 'GET_DATAPOINTS_REJECTED',
  GetDatapointFulfilled: 'GET_DATAPOINTS_FULFILLED',

  GetAppDataRequested: 'GET_APP_DATA_REQUESTED',
  GetAppDataRejected: 'GET_APP_DATA_REJECTED',
  GetAppDataFulfilled: 'GET_APP_DATA_FULFILLED',

  GetFormRequested: 'GET_FORM_REQUESTED',
  GetFormRejected: 'GET_FORM_REJECTED',
  GetFormFulfilled: 'GET_FORM_FULFILLED',

  RegisterSelectAction: 'REGISTER_SELECT_ACTION',
  DiscardSelectAction: 'DISCARD_SELECT_ACTION',
}

export default actionTypes;
