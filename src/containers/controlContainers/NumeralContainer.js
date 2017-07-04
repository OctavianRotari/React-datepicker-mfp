// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../../actions/selectValue';
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
  const { name, value, control } = ownProps;
  if(control === "Numeral") {
    const selectedValues = InputTypes[control].fixed(name, state.events);
    console.log(selectedValues);
  }

  return {
    selected: false,
  }
}

const NumeralContainer = connect(mapStateToProps, mapDispatchToProps)(NumberPicker);

export default NumeralContainer;
