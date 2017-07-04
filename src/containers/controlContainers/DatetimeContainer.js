// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../../actions/selectValue';
import InputTypes from '../../constants/InputTypes';
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
  const { name, value, control } = ownProps.datapoint;
  const selectedValue = InputTypes[control].selectedTime(name, state.events);

  return {
    selectedValue: selectedValue ? selectedValue.value : null,
  }
}

const DatetimeContainer = connect(mapStateToProps, mapDispatchToProps)(DatePicker);

export default DatetimeContainer;
