import ActionTypes from '../constants/actionTypes';

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.CreateViewStateRequestesAction: {
      return Object.assign({}, state, {
        inProgress: true,
      })
    }
    case ActionTypes.CreateViewStateAction: {
      let newObject = {};
      for(datapoint in action.datapoints) {
        newObject[datapoint] = {};
      }
      return Object.assign({}, state, {
        inProgress: false,
        components: newObject
      });
    }
    default: 
      return state;
  }
}
