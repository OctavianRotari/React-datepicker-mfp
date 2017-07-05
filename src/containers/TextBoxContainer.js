import React from 'react';
import { connect } from 'react-redux';
import InputTypes from '../constants/InputTypes';
import TextBox from '../components/TextBox';

function mapStateToProps(state, ownProps) {
  const { component } = ownProps;
  const { name } = ownProps.component;
  const { control, unit } = state.appData.datapoints[name];
  const selectedValue = InputTypes[control].selectedValues(name, state.events);
  if(selectedValue) {
    const value = Array.isArray(selectedValue) ? selectedValue : selectedValue.value;
    return {
      value: value,
      component,
      unit
    }
  }
  return {
    value: null
  }
}

const TextBoxContainer = connect(mapStateToProps)(TextBox);

export default TextBoxContainer;
