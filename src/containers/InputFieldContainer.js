// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import { createEvent } from '../actions/createEvent';
import InputField from '../components/InputField';
import InputTypes from '../constants/InputTypes';

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (props) => {
      dispatch(selectValue(props));
      dispatch(createEvent(props));
    },
    onDiscard: (props) => {
      dispatch(discardValue(props));
    }
  };
}

function mapStateToProps(state, ownProps) {
  const { name, value } = ownProps;
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
