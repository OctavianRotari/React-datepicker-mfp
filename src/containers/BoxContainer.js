// @flow
import React from 'react';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import Box from '../components/Row/RowComponents/InputTypes/Box'

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

function mapStateToProps(state) {
  return {
    selectedValues: state.selectedValues
  }
}

const BoxContainer = connect(mapStateToProps, mapDispatchToProps)(Box);

export default BoxContainer;
