// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../../actions/selectValue';
import DatePicker from '../../components/DatePicker';

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
  if(control === "Datetime") {
    const selectedValues = InputTypes[control].selectedTime(name, state.events);
    console.log(selectedValues);
  }

  return {
    selectedValue: value,
  }
}

const DatetimeContainer = connect(mapStateToProps, mapDispatchToProps)(DatePicker);

export default DatetimeContainer;
