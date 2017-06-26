import update from 'react-addons-update';
import ActionTypes from '../constants/ActionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case ActionTypes.CreateEvent: {
      const { value, timestamp, name } = action.payload;
      const newEvent = {
        name: name,
        value: value,
        timestamp
      }
      return update(
        state,
        {$push: [newEvent]}
      );
    }
    default:
      return state;
  }
};
