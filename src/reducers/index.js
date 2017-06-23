// @flow
import { combineReducers } from 'redux';
import AppDataReducer from './appData';
import EventsReducer from './eventsReducer';
import ViewStateReducer from './viewStateReducer';
import SetActiveFormReducer from './setActiveFormReducer';

export default function combinedReducer(state = {}, action) {
  return {
    appData: AppDataReducer(state.appData, action),
    viewState: ViewStateReducer(state.viewState, action),
    events: EventsReducer(state.events, action),
    activeForm: SetActiveFormReducer(state.activeForm, action)
  }
}
