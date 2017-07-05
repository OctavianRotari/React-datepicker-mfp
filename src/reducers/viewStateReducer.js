import update from 'react-addons-update';
import ActionTypes from '../constants/ActionTypes';
import InputTypes from '../constants/InputTypes';

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
    case ActionTypes.RegisterSelectAction: {
      const { name, value, selected } = action.payload;
      const component = state.components;
      return Object.assign({}, state, {
        components: Object.assign({}, state.components, {
          [name]: Object.assign({}, component[name], {
            ...component[name],
            [value]: selected
          })
        })
      })
    }
    case ActionTypes.DiscardSelectAction: {
      const { name, value, selected } = action.payload;
      const component = state.components[name];
      return Object.assign({}, state, {
        components: Object.assign({}, state.components, {
          [name]: {
            ...component, [value]: selected
          }
        })
      })
    }
    default:
      return state;
  }
}
