import update from 'react-addons-update';
import ActionTypes from '../constants/ActionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case ActionTypes.CreateEvent: {
      const { value, timestamp, name, selected } = action.payload;
      const newEvent = { name, value, timestamp, selected }
      return update(
        state,
        {$push: [newEvent]}
      );
    }
    default:
      return state;
  }
};
