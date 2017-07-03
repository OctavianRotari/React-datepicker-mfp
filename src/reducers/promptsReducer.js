import update from 'react-addons-update';
import ActionTypes from '../constants/ActionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_PROMPT':
      const { name, message } = action.payload;
      const newPrompt = {
        name: name, 
        message: message
      }
      return update(
        state,
        {$push: [newPrompt]}
      )
    default:
      return state;
  }
}
