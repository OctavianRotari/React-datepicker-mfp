// @flow
import React from 'react';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../actions/selectValue';
import Box from '../components/Row/RowComponents/Box'

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

function mapStateToProps(state, ownProps) {
  const { name, value } = ownProps;
  const { viewState } = state;
  if( viewState[name] && viewState[name].value ){
    if(viewState[name].value === value) {
      return {
        selected: true
      }
    } else if(viewState[name].value.includes(value)) {
      return {
        selected: true
      }
    }
  }
  return {
    selected: false
  }
}

const BoxContainer = connect(mapStateToProps, mapDispatchToProps)(Box);

export default BoxContainer;
