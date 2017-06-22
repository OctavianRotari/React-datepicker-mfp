// @flow
import React from 'react';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import { createEvent } from '../actions/createEvent';
import InputTypes from '../components/Row/RowComponents/InputTypes'

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (name, value, parentType) => {
      dispatch(createEvent(name, value));
      dispatch(selectValue(name, value, parentType));
    },
    onDiscard: (name, value, parentType) => {
      dispatch(discardValue(name, value, parentType));
    }
  };
}

function mapStateToProps(state, ownProps) {
  const { name } = ownProps;
  const { components } = state.viewState;
  return {
    componentState: components[name]
  }
}

const InputTypeContainer = connect(mapStateToProps, mapDispatchToProps);

const ReduxWrapperComponent = (props) => {
  InputType = InputTypes[props.childType];
  return React.createElement(InputTypeContainer(InputType), props);
};

export default ReduxWrapperComponent;
