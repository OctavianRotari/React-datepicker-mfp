// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../../actions/selectValue';
import InputTypes from '../../constants/InputTypes';
import NumberPicker from '../../components/NumberPicker';

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
  const { name, value, control } = ownProps.datapoint;
  const selectedValue = InputTypes[control].selectedValues(name, state.events);
  return {
    selectedValue: selectedValue ? selectedValue.value : null,
  }
}

const NumeralContainer = connect(mapStateToProps, mapDispatchToProps)(NumberPicker);

export default NumeralContainer;
