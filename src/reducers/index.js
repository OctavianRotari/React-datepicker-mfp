// @flow
import { combineReducers } from 'redux';
import AppDataReducer from './appData';
import EventsReducer from './eventsReducer';
import SetActiveFormReducer from './setActiveFormReducer';
import PromptsReducer from './promptsReducer';

const rootReducer = combineReducers({
  appData: AppDataReducer,
  events: EventsReducer,
  activeForm: SetActiveFormReducer,
  activePrompts: PromptsReducer,
  datapoints: (state = {}) => state,
  forms: (state = {}) => state,
  prompts: (state = {}) => state,
  topBar: (state = {}) => state,
  activeFormName: (state = {}) => state
})

export default rootReducer;
