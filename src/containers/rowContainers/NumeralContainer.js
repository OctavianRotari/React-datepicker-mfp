// @flow

import { connect } from 'react-redux';
import Numeral from '../../components/Row/RowComponents/Numeral';

function mapStateToProps(state) {
  return {
    numeralValues: state.selectedValues.numeral
  }
}

const NumeralContainer = connect(mapStateToProps)(Numeral);

export default NumeralContainer;
