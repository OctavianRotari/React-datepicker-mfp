import React from 'react';
import { connect } from 'react-redux';
import { buildComposer } from '../composers';
import TextBox from '../components/TextBox';

function mapStateToProps(state, ownProps) {
  const { component } = ownProps;
  const { name } = ownProps.component;
  const { control, unit } = state.appData.datapoints[name];
  const { events } = state;
  const Composer = buildComposer(control, events, name);
  const selectedValue = Composer.selectedValues();
  if(selectedValue) {
    return {
      selectedValue,
      component,
      unit
    }
  }
  return {
    selectedValue: null
  }
}

const TextBoxContainer = connect(mapStateToProps)(TextBox);

export default TextBoxContainer;
