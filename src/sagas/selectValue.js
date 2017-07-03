import { takeEvery, put, select } from 'redux-saga/effects';
import ActionTypes from '../constants/ActionTypes';
import InputTypes from '../constants/InputTypes';
import { formComponents } from './selectors';

export function* checkForToggle(action) {
  const { control, name, value } = action.payload;
  if(control === InputTypes[control].value ) {
    const components = yield (select(formComponents))
    for(var key in components[name]) {
      if(key !== value) {
        const payload = {
          name: name,
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
  yield takeEvery(ActionTypes.RegisterSelectAction, checkForToggle)
}
