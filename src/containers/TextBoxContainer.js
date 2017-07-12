import React from 'react';
import { connect } from 'react-redux';
import { buildComposer } from '../composers';
import TextBox from '../components/TextBox';

function mapStateToProps(state, ownProps) {
  const { name } = ownProps.component;
  const datapoint = state.datapoints[name];
  const { unit } = datapoint;
  const { component } = ownProps;
  const { events } = state;
  const args = { datapoint, events };
  const Composer = buildComposer(args);
  const selectedValue = Composer.selectedValue;

  return {
    selectedValue,
    component,
    unit
  }
}

const TextBoxContainer = connect(mapStateToProps)(TextBox);

export default TextBoxContainer;
