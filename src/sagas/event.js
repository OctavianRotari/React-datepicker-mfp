import { takeEvery, put, select } from 'redux-saga/effects';
import _ from 'lodash';
import ActionTypes from '../constants/ActionTypes';
import operations from '../config/operations';
import { prompts } from './selectors';

export function* checkForPrompt(action) {
  const state = yield select();
  const prompts = state.appData.prompts;
  const { selected } = action.payload;
  const eventValue = action.payload.value;
  const eventName = action.payload.name;
  if( prompts[eventName] && selected ) {
    const { name, comparison, value, message } = prompts[eventName];
    const rule = operations([eventValue, value], comparison);
    const payload = { name, message };
    if(rule) {
      yield put({
        type: ActionTypes.AddPrompt,
        payload
      })
    } else {
      yield put({
        type: ActionTypes.RemovePrompt,
        payload
      })
    }
  }
}

export function* watchEvent() {
  yield takeEvery(ActionTypes.CreateEvent, checkForPrompt)
}
