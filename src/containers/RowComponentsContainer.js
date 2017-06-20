// @flow
import React from 'react';
import { connect } from 'react-redux';
import RowComponents from '../components/Row/RowComponents';

function mapStateToProps(state, ownProps) {
  const { name } = ownProps;
  const selected = state.selectedValues[name]
  if(selected) {
    return {
      selectedValue: selected
    }
  }
  return {}
}

const RowComponentContainer = connect(mapStateToProps);

const ReduxWrapperComponent = (props) => {
  const RowComponent = RowComponents[props.componentType]
  return React.createElement(RowComponentContainer(RowComponent), props);
}

export default ReduxWrapperComponent;
