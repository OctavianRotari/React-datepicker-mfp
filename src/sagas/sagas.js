import { all } from 'redux-saga/effects';
import { watchSelectValue } from './selectValue'
import { watchEvent } from './event';

export default function* rootSaga() {
  yield all([
    watchSelectValue(),
    watchEvent()
  ])
}
