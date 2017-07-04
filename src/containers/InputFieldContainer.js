// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import InputField from '../components/InputField';
import InputTypes from '../constants/InputTypes';

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (props) => {
      dispatch(selectValue(props));
    },
    onDiscard: (props) => {
      dispatch(discardValue(props));
    }
  };
}

function mapStateToProps(state, ownProps) {
  const { name, value, control } = ownProps;
  if(control === "Toggle") {
    const selectedValue = InputTypes[control].selectedValue(name, state.events);
    console.log(selectedValue);
  }
  if(control === "Segmented") {
    const selectedValues = InputTypes[control].selectedValues(name, state.events);
    console.log(selectedValues);
  }
  if(control === "Numeral") {
    const selectedValues = InputTypes[control].fixed(name, state.events);
    console.log(selectedValues);
  }
  if(control === "Datetime") {
    const selectedValues = InputTypes[control].selectedTime(name, state.events);
    console.log(selectedValues);
  }
  const { components } = state.viewState;
  const component = components[name];
  const selected = component[value];
  const selValue = _.invert(component)[true];

  return {
    selected: selected,
    selectedValue: selValue
  }
}

const InputFieldContainer = connect(mapStateToProps, mapDispatchToProps)(InputField);

export default InputFieldContainer;
