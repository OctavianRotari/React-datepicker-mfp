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

const NumeralContainer = connect(null, mapDispatchToProps)(NumberPicker);

export default NumeralContainer;
