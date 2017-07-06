// @flow
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { selectValue, discardValue } from '../../actions/selectValue';
import { buildComposer } from '../../composers';
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
  const { name, value, control } = ownProps.datapoint;
  const { events } = state;
  const Composer = buildComposer(control, events, name);
  const selectedValue = Composer.selectedValues();
  return {
    selectedValue,
  }
}

const NumeralContainer = connect(mapStateToProps, mapDispatchToProps)(NumberPicker);

export default NumeralContainer;
