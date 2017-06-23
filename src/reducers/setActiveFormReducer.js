import update from 'react-addons-update';
import ActionTypes from '../constants/actionTypes';

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.SetActiveForm: {
      return Object.assign({}, state, {
        active: action.activeForm,
      })
    }
    default:
      return state;
  }
}
