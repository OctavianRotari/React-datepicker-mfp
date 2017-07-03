// @flow
import update from 'react-addons-update';
import ActionTypes from '../constants/ActionTypes';
import InputTypes from '../constants/InputTypes';

export default function(state = {}, action){
  switch(action.type) {
    case ActionTypes.RegisterSelectAction: {
      const { name, unit } = action.payload;
      const component = state.components;
      return Object.assign({}, state, {
        components: Object.assign({}, state.components, {
          [name]: Object.assign({}, component[name], {
            value: buildValue(state, action),
            unit: unit
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
            value: discardValue(state, action),
            unit: null
          })
        })
      })
    }
    default:
      return state;
  }
}

function buildValue(state, action) {
  const { name, value, control } = action.payload;
  if(control === InputTypes.Segmented.value){
    const component = state.components[name];
    const initialArray = component.value ? component.value : [];
    return insertItem(initialArray, value);
  }
  return value;
}

function discardValue(state, action){
  const { control, name, value } = action.payload;
  const component = state.components[name];
  if(control === InputTypes.Segmented.value){
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
