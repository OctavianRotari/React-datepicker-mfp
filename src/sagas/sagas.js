import { all } from 'redux-saga/effects';
import { watchSelectValue, watchDiscardValue } from './selectValue'
import { watchEvent } from './event';

export default function* rootSaga() {
  yield all([
    watchSelectValue(),
    watchDiscardValue(),
    watchEvent()
  ])
}
