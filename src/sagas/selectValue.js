import { takeEvery, put, select } from 'redux-saga/effects';
import moment from 'moment';
import _ from 'lodash';
import ActionTypes from '../constants/ActionTypes';
import InputTypes from '../constants/InputTypes';
import { formComponents } from './selectors';

export function* checkIfSingleton(action) {
  const { name, value, control } = action.payload;
  if( InputTypes[control].singleton ) {
    const components = yield (select(formComponents))
    for(var key in components[name]) {
      if(key !== value) {
        const payload = {
          name,
          value: key,
          selected: false
        }
        yield put({
          type: ActionTypes.DiscardSelectAction,
          payload
        })
      }
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
