import { takeEvery, put, select } from 'redux-saga/effects';
import _ from 'lodash';
import ActionTypes from '../constants/ActionTypes';
import operations from '../config/operations';
import { prompts } from './selectors';

export function* checkForPrompt(action) {
  const allPrompts = yield (select(prompts));
  const { name, value } = action.payload;
  yield* _.map(allPrompts, ( prompt ) => {
    if(prompt.datapoint === name){
      const promptValue = prompt[name].value;
      const operators = [value, promptValue];
      const operator = prompt[name].comparison
      if(operations(operators, operator)) {
        return put({
          type: 'ADD_PROMPT',
          payload: prompt
        })
      }
    }
  })
}

export function* watchEvent() {
  yield takeEvery(ActionTypes.CreateEvent, checkForPrompt)
}
