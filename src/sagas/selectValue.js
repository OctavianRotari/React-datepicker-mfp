import { takeEvery, put, select } from 'redux-saga/effects';
import moment from 'moment';
import _ from 'lodash';
import ActionTypes from '../constants/ActionTypes';
import InputTypes from '../constants/InputTypes';
import { events } from './selectors';

export function* checkIfSingleton(action) {
  const { name, control } = action.payload;
  if( InputTypes[control].singleton ) {
    const state = yield select();
    const selectedValue = InputTypes[control].selectedValues(name, state.events);
    if(selectedValue) {
      const { value } = selectedValue;
      const payload = {
        name,
        value,
        selected: false
      }
      yield put({
        type: ActionTypes.DiscardSelectAction,
        payload
      })
    }
  }
}

export function* createEventAction(action) {
  const { name, value, selected } = action.payload;
  const payload = {
    name,
    value,
    selected,
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a")
  }

  yield put({
    type: ActionTypes.CreateEvent,
    payload
  })
}

export function* watchSelectValue() {
  yield takeEvery(ActionTypes.RegisterSelectAction, checkIfSingleton);
  yield takeEvery(ActionTypes.RegisterSelectAction, createEventAction);
}

export function* watchDiscardValue() {
  yield takeEvery(ActionTypes.DiscardSelectAction, createEventAction);
}