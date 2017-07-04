// @flow
import { combineReducers } from 'redux';
import AppDataReducer from './appData';
import EventsReducer from './eventsReducer';
import SetActiveFormReducer from './setActiveFormReducer';
import PromptsReducer from './promptsReducer';

export default function reducers(state = {}, action) {
  return {
    appData: AppDataReducer(state.appData, action),
    events: EventsReducer(state.events, action),
    activeForm: SetActiveFormReducer(state.activeForm, action),
    activePrompts: PromptsReducer(state.activePrompts, action)
  }
}
