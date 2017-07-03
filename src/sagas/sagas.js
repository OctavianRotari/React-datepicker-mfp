import { all } from 'redux-saga/effects';
import { watchEventAsync } from './event';

export default function* rootSaga() {
  yield all([
    watchEventAsync()
  ])
}
