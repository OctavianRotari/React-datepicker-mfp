import update from 'react-addons-update';
import ActionTypes from '../constants/ActionTypes';

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.SetActiveForm: {
      const activeForm = action.payload;
      return Object.assign({}, state, activeForm )
    }
    default:
      return state;
  }
}
