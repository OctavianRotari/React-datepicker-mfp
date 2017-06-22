// @flow
import { combineReducers } from 'redux';
import SelectValueReducer from './selectValue';
import AppDataReducer from './appData';
import EventsReducer from './eventsReducer';
import ViewStateReducer from './viewStateReducer';

export default function reducer(state = {}, action) {
  return {
    appData: AppDataReducer(state.appData, action),
    viewState: ViewStateReducer(state.viewState, action),
    componentsState: SelectValueReducer(state.viewState.components, action),
    events: EventsReducer(state.events, action)
  }
}
