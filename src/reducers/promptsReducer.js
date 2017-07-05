import update from 'react-addons-update';
import _ from 'lodash';
import ActionTypes from '../constants/ActionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case ActionTypes.AddPrompt:
      const { name, message } = action.payload;
      const newPrompt = { name, message };
      return Object.assign({}, state, {
        ...state,
        [name]: message
      })
    case ActionTypes.RemovePrompt:
      return _.omit(state, action.payload.name);
    default:
      return state;
  }
}
