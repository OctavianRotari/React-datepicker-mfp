import React from 'react';
import { connect } from 'react-redux';
import { buildComposer } from '../composers';
import PopoverBox from '../components/PopoverBox';

function mapStateToProps(state, ownProps) {
  const { datapoint } = ownProps;
  const { events } = state;
  const args = { datapoint, events };
  const Composer = buildComposer(args);
  const selectedValue = Composer.selectedValue;

  return {
    selectedValue,
  }
} 

const PopoverContainer = connect(mapStateToProps)(PopoverBox);

export default PopoverContainer;
