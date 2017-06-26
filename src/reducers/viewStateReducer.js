import update from 'react-addons-update';
import ActionTypes from '../constants/actionTypes';
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
      const { name } = action.payload;
      const component = state.components;
      return Object.assign({}, state, {
        components: Object.assign({}, state.components, {
          [name]: Object.assign({}, component[name], {
            value: buildValue(state, action)
          })
        })
      })
    }
    case ActionTypes.DiscardSelectAction: {
      const { name } = action.payload;
      const component = state.components[name];
      return Object.assign({}, state, {
        components: Object.assign({}, state.components, {
          [name]: Object.assign({}, component[name], {
            value: discardValue(state, action)
          })
        })
      })
    }
    default:
      return state;
  }
}

function buildValue(state, action) {
  const { name, value, parentType } = action.payload;
  if(parentType === InputTypes.SEGMENTED){
    const component = state.components[name];
    const initialArray = component.value ? component.value : [];
    return insertItem(initialArray, value);
  }
  return value;
}

function discardValue(state, action){
  const { parentType, name, value } = action.payload;
  const component = state.components[name];
  if(parentType === InputTypes.SEGMENTED){
    const index = component.value.indexOf(value)
    return removeItem(component.value, index);
  }
  return null
}

function insertItem(array, value) {
  let newArray = array.slice();
  newArray.splice(-1, 0, value);
  return newArray;
}

function removeItem(array, index) {
  let newArray = array.slice();
  newArray.splice(index, 1);
  console.log(newArray)
  return newArray;
}
