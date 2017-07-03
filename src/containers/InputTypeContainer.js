// @flow
import React from 'react';
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
  let selected = false;

  if(components[name][value]) {
    selected = components[name][value];
  }

  return {
    selected: selected
  }
}

const InputFieldContainer = connect(mapStateToProps, mapDispatchToProps)(InputField);

export default InputFieldContainer;
