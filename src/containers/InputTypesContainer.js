// @flow
import React from 'react';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import InputTypes from '../components/Row/RowComponents/InputTypes'

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (name, value, parentType) => {
      dispatch(selectValue(name, value, parentType));
    },
    onDiscard: (name, value, parentType) => {
      dispatch(discardValue(name, value, parentType));
    }
  };
}

const InputTypeContainer = connect(null, mapDispatchToProps);

const ReduxWrapperComponent = (props) => {
  const InputType = InputTypes[props.childType];
  return React.createElement(InputTypeContainer(InputType), props);
};

export default ReduxWrapperComponent;
