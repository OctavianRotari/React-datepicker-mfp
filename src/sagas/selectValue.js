import { takeEvery, put, select } from 'redux-saga/effects';
import _ from 'lodash';
import ActionTypes from '../constants/ActionTypes';
import InputTypes from '../constants/InputTypes';
import { formComponents } from './selectors';

export function* checkIfSingleton(action) {
  const { control, name, value } = action.payload;
  if( InputTypes[control].singleton ) {
    const components = yield (select(formComponents))
    for(var key in components[name]) {
      if(key !== value) {
        const payload = {
          name,
          value: key
        }
        yield put({
          type: ActionTypes.DiscardSelectAction,
          payload
        })
      }
    }
  }
}

export function* watchSelectValue() {
  yield takeEvery(ActionTypes.RegisterSelectAction, checkIfSingleton)
}
