// @flow
import React from 'react';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import { createEvent } from '../actions/createEvent';
import InputField from '../components/InputField';
import InputTypes from '../constants/InputTypes';

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (props) => {
      dispatch(createEvent(props));
      dispatch(selectValue(props));
    },
    onDiscard: (props) => {
      dispatch(discardValue(props));
    }
  };
}

function mapStateToProps(state, ownProps) {
  const { name, parentType } = ownProps;
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
  const { name, value, control } = ownProps;
  switch (control) {
    case InputTypes.Toggle.value: {
      if(selValue === value) {
        return selected = true
      }
      return selected = false;
    }
    case InputTypes.Segmented.value: {
      if(selValue.includes(value)) {
        return selected = true
      }
      return selected = false;
    }
    case InputTypes.Numeral.value: {
      if(selValue){
        return selected = true;
      }
      return selected = false;
    }
    case InputTypes.Datetime.value: {
      if(selValue){
        return selected = true;
      }
      return selected = false;
    }
    return selected;
  }
}

const InputFieldContainer = connect(mapStateToProps, mapDispatchToProps)(InputField);

export default InputFieldContainer;
