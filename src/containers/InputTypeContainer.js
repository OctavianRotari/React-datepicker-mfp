// @flow
import React from 'react';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import { createEvent } from '../actions/createEvent';
import InputType from '../components/Row/RowComponents/InputType';
import RowComponentTypes from '../constants/rowComponentTypes';

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (name, value, parentType) => {
      dispatch(createEvent(name, value));
      dispatch(selectValue(name, value, parentType));
    },
    onDiscard: (name, value, parentType) => {
      dispatch(discardValue(name, value, parentType));
    }
  };
}

function mapStateToProps(state, ownProps) {
  const { name, value, parentType } = ownProps;
  const { components } = state.viewState;
  let selected, selValue;

  if(components[name] && components[name].value) {
    selValue = components[name].value;
    selected = checkIfSelected(selValue, ownProps)
  } else {
    selected = false;
  }

  return {
    selected: selected,
    selectedValue: selValue
  }
}

function checkIfSelected(selValue, ownProps) {
  let selected;
  const { name, value, parentType } = ownProps;
  switch (parentType) {
    case RowComponentTypes.TOGGLE: {
      if(selValue === value) {
        return selected = true
      }
      return selected = false;
    }
    case RowComponentTypes.SEGMENTED: {
      if(selValue.includes(value)) {
        return selected = true
      }
      return selected = false;
    }
    case RowComponentTypes.NUMERAL: {
      if(selValue){
        return selected = true;
      }
      return selected = false;
    }
    case RowComponentTypes.DATETIME: {
      if(selValue){
        return selected = true;
      }
      return selected = false;
    }
    return selected;
  }
}

const InputTypeContainer = connect(mapStateToProps, mapDispatchToProps)(InputType);

export default InputTypeContainer;
